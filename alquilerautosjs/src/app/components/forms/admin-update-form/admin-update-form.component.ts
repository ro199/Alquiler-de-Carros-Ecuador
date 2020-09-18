import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AutoService } from 'src/app/servicios/http/auto.service';
import { Auto } from '../../Clases/auto';

@Component({
  selector: 'app-admin-update-form',
  templateUrl: './admin-update-form.component.html',
  styleUrls: ['./admin-update-form.component.css'],
})
export class AdminUpdateFormComponent implements OnInit {
  auto: Auto;
  id: string;
  imgSrc: string;
  selectedImage: any;
  isSubmitted: boolean;

  form = new FormGroup({
    nombre: new FormControl('', Validators.required),
    nmotor: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
  });

  constructor(
    private readonly _autoService: AutoService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _storage: AngularFireStorage
  ) {}

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params;
    obsRuta.subscribe((parametros: Params) => {
      this.id = parametros.id;
      console.log('el id es: ', this.id);
      const obsAuto = this._autoService.getAutoCollectionForId(this.id);
      obsAuto.subscribe(
        (auto: any) => {
          this.auto = auto.payload.data();
          this.imgSrc = this.auto.imageUrl;
          this.form.patchValue({
            nombre: this.auto.nombre,
            nmotor: this.auto.nmotor,
            precio: this.auto.precio,
            imageUrl: '',
          });

          console.log(this.auto);
        },
        (error) => {
          console.error(error);
        }
      );
    });
  }

  showPreview(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => (this.imgSrc = e.target.result);
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    } else {
      this.imgSrc = this.auto.imageUrl;
      this.selectedImage = null;
    }
  }

  onSubmit(formValue): void {
    this.isSubmitted = true;
    console.log(formValue);
    if (this.form.valid) {
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
              this._autoService.updateAuto(formValue, this.id);
              alert('Se ah actualizado con exito');
            });
          })
        )
        .subscribe();
    } else {
      if (formValue.imageUrl === '') {
        this.auto.nombre = formValue.nombre;
        this.auto.nmotor = formValue.nmotor;
        this.auto.precio = formValue.precio;
        this._autoService.updateAuto(this.auto, this.id);
        alert('Se ah actualizado con exito');
      }
    }
  }
}
