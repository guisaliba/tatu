import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHomepage(): string {
    return 'Welcome to Tatu homepage!';
  }
}
