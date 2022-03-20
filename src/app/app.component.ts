import { Component, OnInit } from '@angular/core';
import { FileService } from './file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private fileService: FileService) {}
  
  ngOnInit(): void {
    this.fileService.navigateDirectory('.');
  }
}
