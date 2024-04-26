export class series{
  numero: number;
  nombre: string;
  canal: string;
  temporadas: number;
  resenia: string;
  imagen: string;
  url:string

  constructor(numero: number, nombre: string, canal:string,temporadas:number,resenia:string,imagen:string,url:string) {
      this.numero = numero
      this.nombre = nombre
      this.canal = canal
      this.temporadas = temporadas
      this.resenia = resenia
      this.imagen = imagen
      this.url = url

    }
}