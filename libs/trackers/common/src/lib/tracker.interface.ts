export enum TrackerKeys {
  Ping = 'trackerLitePing',
  Records = 'trackerLiteRecords',
}

export enum TrackerEventType {
  Blur = 'blur',
  Focus = 'focus',
  Change = 'change',
  VisibilityChange = 'visibilitychange',
  Custom = 'custom',
  Keydown = 'keydown',
  Keyup = 'keyup',
  Keypress = 'keypress',
  Navigate = 'navigation',
  StickyKey = 'stickykey',
  StickyKeyEnd = 'stickykeyend',
  Click = 'click',
  Press = 'press',
}

export interface TrackerEvent<T extends Record<string, any> = Record<string, any>> {
  type: TrackerEventType;
  element: string;
  value?: unknown;
  time?: number;
  url?: string;
  user?: number;
  keys?: string[];
  data?: T;
}

export interface TrackerRecord<T extends Record<string, any> = Record<string, any>> {
  id: string;
  type: TrackerEventType;
  element: string;
  value: unknown;
  time: number;
  url: string;
  user: number | null;
  keys: string[];
  data?: T;
}
