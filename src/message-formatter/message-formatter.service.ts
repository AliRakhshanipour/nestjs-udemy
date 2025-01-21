import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageFormatterService {
  format(message: string): string {
    const timestamps = new Date().toISOString();

    return `[${timestamps}] ${message}`;
  }
}
