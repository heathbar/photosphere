import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FileService } from '../file.service';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss']
})
export class BrowserComponent implements OnInit {
  images: string[];
  directory: string[];

  constructor(private fileService: FileService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.fileService.images.subscribe((value: any) => {
      this.images = value;
      this.cdr.detectChanges();
    });

    this.fileService.directory.subscribe((value: any) => {
      this.directory = value;
      this.cdr.detectChanges();
    });
  }

  navigateDirectory(path: string) {
    this.fileService.navigateDirectory(path);
  }

}
