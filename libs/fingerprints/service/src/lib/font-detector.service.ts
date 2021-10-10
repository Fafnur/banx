import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { last, map, switchMap, take, tap } from 'rxjs/operators';

import { SessionAsyncStorage } from '@banx/core/storage/session';

import { FONTS_NAMES } from './fonts';

const FONTS_DETECTED = 'fontDetected';

const TEST_STRING =
  // eslint-disable-next-line max-len
  'Grumpy wizards make toxic brew for the evil Queen and Jack. One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked';

@Injectable()
export class FontDetectorService {
  constructor(private readonly sessionAsyncStorage: SessionAsyncStorage, @Inject(DOCUMENT) private readonly document: Document) {}

  detect(): Observable<Record<string, boolean>> {
    return this.sessionAsyncStorage.getItem<boolean | null>(FONTS_DETECTED).pipe(
      take(1),
      switchMap((fontsDetected) => (fontsDetected ? this.getDataFromStorage() : this.getData()))
    );
  }

  private getDataFromStorage(): Observable<Record<string, boolean>> {
    const data: Record<string, boolean> = {};

    return this.sessionAsyncStorage.getItems<boolean[]>(FONTS_NAMES).pipe(
      map((response) => {
        FONTS_NAMES.forEach((fontName, index) => {
          data[fontName] = response[index];
        });

        return data;
      })
    );
  }

  private getData(): Observable<Record<string, boolean>> {
    const data: Record<string, boolean> = {};

    // Create node
    const testNode = this.getTestNode();
    const isUnknownSupport = this.isSupport(testNode, 'sdfnerlkfgnerherlopigreiuhgerg');

    let checked = 1;
    let sum = 0;
    const average = (): number => {
      return Math.round((sum * 10) / checked);
    };
    const state = this.sessionAsyncStorage.state;

    return interval(10 + average()).pipe(
      take(FONTS_NAMES.length),
      tap((index) => {
        const font = FONTS_NAMES[index];

        if (state[font] != null) {
          data[font] = state[font];
        } else {
          const startTime = new Date().getTime();
          const supported = this.isSupport(testNode, font, isUnknownSupport);
          data[font] = supported;

          checked++;
          sum += new Date().getTime() - startTime;
          this.sessionAsyncStorage.setItem(font, supported);
        }
      }),
      last(),
      map(() => {
        this.clear(testNode);
        this.sessionAsyncStorage.setItem(FONTS_DETECTED, true);

        return data;
      })
    );
  }

  private getTestNode(): HTMLDivElement {
    const testNode = this.document.createElement('div');
    testNode.setAttribute('id', 'text-node');
    testNode.style.cssText = 'overflow: hidden; height: 1px; width: 1px; position: absolute;';
    this.document.body.appendChild(testNode);

    return testNode;
  }

  private clear(testNode: HTMLElement): void {
    if (testNode?.parentNode) {
      try {
        this.document.body.removeChild(testNode);
      } catch (exception) {
        // Some wrong...
      }
    }
  }

  private getFontSize(testNode: HTMLElement, font: string, family: string): number | null {
    const fontFamilyId = !family ? font : `${font}, ${family}`;
    // eslint-disable-next-line max-len
    testNode.innerHTML = `<div style="position: absolute; width: 30000px; visibility: hidden;" id="parenttest"><div id="test" style="float: left; white-space: nowrap; font-family: ${fontFamilyId}">${TEST_STRING}</div></div>`;

    const element = this.document.getElementById('test');
    const style = element && this.document.defaultView ? this.document.defaultView.getComputedStyle(element, '') : null;

    return style ? parseInt(style.width, 10) : null;
  }

  private isSupport(testNode: HTMLElement, font: string, isUnknownSupport: boolean = false): boolean {
    let support = true;
    const serif = { font, family: 'serif' };
    const sansSerif = { font, family: 'sans-serif' };

    if (isUnknownSupport) {
      serif.family = '';
      sansSerif.font = '';
      sansSerif.family = '';
    }

    try {
      const currentSerif = this.getFontSize(testNode, serif.font, serif.family);
      const currentSansSerif = this.getFontSize(testNode, sansSerif.font, sansSerif.family);

      support = currentSerif === currentSansSerif;
      if (isUnknownSupport) {
        support = !support;
      }
    } catch (e) {
      // IE8 fix
      support = false;
    }

    return support;
  }
}
