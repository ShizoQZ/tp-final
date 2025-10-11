function dibujarPantalla(estado) { //funcion con parametros
image(miImagen[estado], 0, 0, 640, 480);
fill(0);
textSize(16);
text(texto[estado], 10, 10);
}
