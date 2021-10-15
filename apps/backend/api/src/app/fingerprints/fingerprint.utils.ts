import { createHash } from 'crypto';

export function md5(contents: string): string {
  return createHash('md5').update(contents).digest('hex');
}
