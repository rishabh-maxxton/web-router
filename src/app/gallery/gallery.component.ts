import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  appList: any[] = [ {
    "ID": "1",
    "url": './asset/images/img1.jpg'
 },
 {
    "ID": "2",
    "url": './asset/images/img2.jpg'
 },
 {
    "ID": "3",
    "url": './asset/images/img3.jpg'
 },
 {
    "ID": "4",
    "url": './asset/images/img4.jpg'
 },
 {
    "ID": "5",
    "url": './asset/images/img5.jpg'
 },
 {
    "ID": "6",
    "url": './asset/images/img6.jpg'
 }
 ];
}
