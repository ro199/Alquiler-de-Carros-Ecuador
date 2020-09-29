import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { AutoService } from '../../../servicios/http/auto.service';

@Component({
  selector: 'app-admin-add-form',
  templateUrl: './admin-add-form.component.html',
  styleUrls: ['./admin-add-form.component.css'],
})
export class AdminAddFormComponent implements OnInit {
  imgSrc: string;
  selectedImage: any;
  isSubmitted: boolean;

  formTemplate = new FormGroup({
    nombre: new FormControl('', Validators.required),
    nmotor: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
  });

  constructor(
    private readonly _storage: AngularFireStorage,
    private readonly _router: Router,
    private readonly _autoService: AutoService
  ) {}

  ngOnInit(): void {
    this.resetForm();
  }

  showPreview(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => (this.imgSrc = e.target.result);
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    } else {
      this.imgSrc = './assets/image/place_holder.png';
      this.selectedImage = null;
    }
  }

  onSubmit(formValue): void {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      const filePath = `images/${this.selectedImage.name
        .split('.')
        .slice(0, -1)
        .join('.')}_${new Date().getTime()}`;
      const fileRef = this._storage.ref(filePath);
      this._storage
        .upload(filePath, this.selectedImage)
        .snapshotChanges()
        .pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              formValue.imageUrl = url;
              this._autoService.createAuto(formValue);
              this.resetForm();
            });
          })
        )
        .subscribe();
    }
  }

  get formControls() {
    return this.formTemplate.controls;
  }

  resetForm(): void {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      nombre: '',
      nmotor: '',
      precio: '',
      imageUrl: '',
    });
    this.imgSrc = './assets/image/place_holder.png';
    this.selectedImage = null;
    this.isSubmitted = false;
  }
}
