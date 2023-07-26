import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';

@Injectable({ providedIn: 'root' })
export class ImageService {
  constructor(private readonly configService: ConfigService) {}

  get avatarUrl(): string {
    return this.configService.avatarUrl;
  }
}
