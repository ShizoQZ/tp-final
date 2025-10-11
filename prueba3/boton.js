function mousePressed() {
  // Solo activa botones basados en la pantalla actual
  if (Pantalla !== 4 && Pantalla !== 9 && Pantalla !== 14 && !FinalMalo.isPlaying()) {
    // Botón de flecha derecha (avanzar secuencial)
    if (click(posX, posY, tam, tam)) {
      PasarPantalla(Pantalla, Pantalla + 1);
    }
  } else if ((Pantalla === 4 || Pantalla === 6 || Pantalla === 9) && !FinalMalo.isPlaying()) {
    //boton derecho
    if (click(posXD +15, posYD, tam + 80, tam)) {
      PasarPantalla(Pantalla, 7);
      FinalMalo.play();
    }
    //boton izquierdo
    else if (click(posXD2 +15, posYD, tam + 80, tam)) {
      PasarPantalla(Pantalla, 6);
    }
  }
  if (Pantalla === 12 || Pantalla === 13 || Pantalla === 14) {
    if (click(posXR, posYR, tam, tam)) {
      PasarPantalla(Pantalla, 0);
    }
  }
}
