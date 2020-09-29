import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AutoService } from 'src/app/servicios/http/auto.service';
import { OfertaService } from 'src/app/servicios/http/oferta.service';
import * as moment from 'moment';

@Component({
  selector: 'app-admin-oferta-form',
  templateUrl: './admin-oferta-form.component.html',
  styleUrls: ['./admin-oferta-form.component.css'],
})
export class AdminOfertaFormComponent implements OnInit {
  listaAutos: any[] = [];
  isSubmitted: boolean;
  imgSrc: string;
  selectedImage: any;
  precioAuto: number;

  formTemplate = new FormGroup({
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    porcentaje: new FormControl('', Validators.required),
    fecha_inicio: new FormControl('', Validators.required),
    fecha_fin: new FormControl('', Validators.required),
    link_web: new FormControl('', Validators.required),
    id_autos: new FormControl('', Validators.required),
  });

  constructor(
    private readonly _autoService: AutoService,
    private readonly _ofertaService: OfertaService,
    private readonly _storage: AngularFireStorage
  ) {}

  ngOnInit(): void {
    this.getListaAutos();
    this.resetForm();
  }

  getListaAutos() {
    const obsAuto = this._autoService.getAutoCollection();
    obsAuto.subscribe(
      (auto: any) => (this.listaAutos = auto),
      (error) => console.error(error)
    );
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

  async onSubmit(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      const filePath = `images/${this.selectedImage.name
        .split('.')
        .slice(0, -1)
        .join('.')}_${new Date().getTime()}`;
      const fileRef = await this._storage.ref(filePath);
      await this._storage
        .upload(filePath, this.selectedImage)
        .snapshotChanges()
        .pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              formValue.link_web = url;
              const obsAutoValor = this._autoService
                .getAutoCollectionForId(formValue.id_autos)
                .subscribe(
                  (auto: any) => {
                    this.precioAuto = auto.payload.data().precio;
                    const porcentaje = this.precioAuto * formValue.porcentaje;
                    formValue.valor = this.precioAuto - porcentaje;
                    this._ofertaService.createOferta(formValue);
                    this.resetForm();
                  },
                  (error) => console.error(error)
                );
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
      descripcion: '',
      porcentaje: '',
      fecha_inicio: '',
      fecha_fin: '',
      link_web: '',
      id_autos: '',
    });
    this.imgSrc = './assets/image/place_holder.png';
    this.selectedImage = null;
    this.isSubmitted = false;
  }

  async obtenerPrecio(formValue) {
    console.log('id autos ', formValue.id_autos);
  }
}
