import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage'
import { audit } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = ""

  constructor(private storage: Storage) { }

  public upLoadImage($event: any, name: string){
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, 'imagen/' + name)
    uploadBytes(imgRef, file)
    .then(Response => {this.getImage()})
    .catch(error => console.log(error))
  }

  getImage(){
    const imageRef = ref(this.storage, 'imagen')
    list (imageRef)
    .then(async response => {
      for(let item of response.items){
        this.url = await getDownloadURL(item);
        console.log("la URL es: " + this.url)
      }
  })
    .catch(error => console.log(error))
  }
}
