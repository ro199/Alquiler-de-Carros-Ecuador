import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { AutoService } from 'src/app/servicios/http/auto.service';

@Component({
  selector: 'app-ruta-admin-catalogo',
  templateUrl: './ruta-admin-catalogo.component.html',
  styleUrls: ['./ruta-admin-catalogo.component.css'],
})
export class RutaAdminCatalogoComponent implements OnInit {
  imgSrc: string;
  selectedImage: any;
  isSubmitted: boolean;

  formTemplate = new FormGroup({
    nombre: new FormControl('', Validators.required),
    nmotor: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
  });

  arregloAutos: any = [];

  constructor(
    private readonly _storage: AngularFireStorage,
    private readonly _autoService: AutoService
  ) {}

  ngOnInit(): void {
    this.resetForm();
    this.getAutoCollection();
  }

  showPreview(event: any) {
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

  onSubmit(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      let filePath = `images/${this.selectedImage.name
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
              formValue['imageUrl'] = url;
              this._autoService.createAuto(formValue);
              this.resetForm();
            });
          })
        )
        .subscribe();
    }
  }

  get formControls() {
    return this.formTemplate['controls'];
  }

  resetForm() {
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

  getAutoCollection() {
    this._autoService.getAutoCollection().subscribe((autos) => {
      this.arregloAutos = autos.map((item) => item.payload.doc);
      console.log(this.arregloAutos);
    });
  }
}
