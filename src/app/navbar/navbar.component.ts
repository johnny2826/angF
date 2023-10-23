import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() fileSelected = new EventEmitter<File>();

  onFileChange(event: any) {
    const file = event.target.files[0] as File;
    this.fileSelected.emit(file);
  }

}
