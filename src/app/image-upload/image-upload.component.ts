import { Input, Output, Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  image: string;

  @Input() default = 'images/user.png';
  @Output() upload = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  loadImage(event: any) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.image = reader.result;
      this.upload.emit(this.image);
    }, false);
    // fileReader.onload = (e) => this.model.image = fileReader.result;
    reader.readAsDataURL(event.target.files[0]);
  }

}
