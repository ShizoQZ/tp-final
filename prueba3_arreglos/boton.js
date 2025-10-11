function mousePressed() {
  // Solo activa botones basados en la pantalla actual
  if (Pantalla !== 4 && Pantalla !== 9 && Pantalla !== 14 && !FinalMalo.isPlaying()) {
    // Botón de flecha derecha (avanzar secuencial)
    if (click(posX, posY, tam, tam)) {
      PasarPantalla(Pantalla, Pantalla + 1);
    }
  } else if ((Pantalla === 4 || Pantalla === 9 || Pantalla === 14) && !FinalMalo.isPlaying()) {
    // Botones de flechas arriba en pantallas ramificadas
    if (click(posXD, posYD, tam, tam)) {
      PasarPantalla(Pantalla, 7);
      FinalMalo.play();
    } else if (click(posXD2, posYD2, tam, tam)) {
      PasarPantalla(Pantalla, 6);
    }
  }
  if (Pantalla === 6 || Pantalla === 7 || Pantalla === 11) {
    if (click(posXR, posYR, tam, tam)) {
      PasarPantalla(Pantalla, 0);
    }
  }
}
