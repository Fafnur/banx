export enum TrackerKeys {
  Ping = 'trackerLitePing',
  Records = 'trackerLiteRecords',
}

export enum TrackerEventType {
  Blur = 'blur',
  Focus = 'focus',
  Change = 'change',
  Open = 'open',
  Close = 'close',
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
  value?: string;
  time?: string;
  url?: string;
  user?: number;
  keys?: string;
  data?: T;
}

export interface TrackerRecord<T extends Record<string, any> = Record<string, any>> {
  uid: string;
  type: TrackerEventType;
  element: string;
  value: string;
  time: string;
  url: string;
  user?: number;
  keys: string;
  data?: T;
}

export interface TrackerRecordsDto {
  visitor: string;
  records: TrackerRecord[];
}
