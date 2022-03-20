import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
console.log('window.require', (<any>window).require);

const electron = (<any>window).require('electron');



@Injectable({
  providedIn: 'root'
})
export class FileService {
  images = new BehaviorSubject<string[]>([]);
  directory = new BehaviorSubject<string[]>([]);

  constructor() {
    electron.ipcRenderer.on('getImagesResponse', (event: any, images: any) => {
      this.images.next(images);
    });
    electron.ipcRenderer.on('getDirectoryResponse', (event: any, directory: any) => {
      this.directory.next(directory);
    });
  }

  navigateDirectory(path: string) {
    electron.ipcRenderer.send('navigateDirectory', path);
  }
}
