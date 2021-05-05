import { Component, OnInit } from '@angular/core';
import { ModalImagenService } from './../../servises/modal-imagen.service';
import { FileUploadService } from './../../servises/file-upload.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-imagen',
  templateUrl: './modal-imagen.component.html',
  styles: [
  ]
})
export class ModalImagenComponent implements OnInit {
  public imagenSubir: File;
  public imgTemp: any = null;
  constructor(public modalImagenService:ModalImagenService, public fileUploadService:FileUploadService) { }

  ngOnInit(): void {
  }

  cerrarModal(){
    this.imgTemp = null;
    this.modalImagenService.cerrarModal();
  } 
  
  cambiarImagen(file: File) {
    this.imagenSubir = file;
    if (!file) {
      return (this.imgTemp = null);
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.imgTemp = reader.result;
    };
  }
  subirImagen() {
    const tipo = this.modalImagenService.tipo;
    const id = this.modalImagenService.id;

    this.fileUploadService
      .actualizarFoto(this.imagenSubir, tipo, id)
      .then((img) => {
        Swal.fire('Guardado', 'Imagen modificada correctamente', 'success');
        this.modalImagenService.nuevaImagen.emit(img);
        this.cerrarModal();
      }).catch(err=>{
        console.log(err);
        Swal.fire('Error', 'No se pudo subir la imagen', 'error');
      });
  }
}
