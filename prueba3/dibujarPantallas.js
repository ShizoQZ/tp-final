function dibujarPantalla (estado) { //funcion con parametros
  image(miImagen[estado], 0, 0, 640, 480);
  fill(0)
    textSize(16)
    text(texto[estado], 10, 20);
    

/*if (!FinalMalo.isPlaying()){
  if (Pantalla === 4 || Pantalla === 9 || Pantalla === 14) {
    image(flechaD, posXD, posYD, tam-30, tam-30);
    image(flechaD, posXD2, posYD2, tam-30, tam-30);
  } else {
    image(flecha, posX, posY, tam, tam);
  }

}*/
}//final del function
