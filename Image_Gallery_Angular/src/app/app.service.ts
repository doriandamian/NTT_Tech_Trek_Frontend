import { Injectable } from '@angular/core';
import { ImageModel } from './image.model';

@Injectable({ providedIn: 'root' })
export class AppService {
  private images: ImageModel[] = [];

  constructor() {}

  async loadImages() {
    try {
      const response = await fetch('https://picsum.photos/v2/list');
      if (!response.ok) {
        throw new Error(`An error has occurred: ${response.status}`);
      }
      this.images = await response.json();
    } catch (error) {
      console.error('Failed to fetch images:', error);
    }
  }

  getListOfAuthors() {
    return Array.from(new Set(this.images.map((image) => image.author)));
  }

  getImagesFromAuthor(authorName: string): ImageModel[] {
    return this.images.filter((image) => image.author === authorName);
  }
}
