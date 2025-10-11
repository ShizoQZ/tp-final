function mousePressed() {
  // Solo activa botones basados en la pantalla actual
  if (Pantalla !== 4 && Pantalla !== 6 && Pantalla !== 9 && Pantalla !== 12 && Pantalla !== 13 && Pantalla !== 14 && Pantalla !== 15) {
    // Botón de flecha derecha (avanzar secuencial)
    if (click(posX, posY, tam, tam)) {
      PasarPantalla(Pantalla, Pantalla + 1);
    }
  } else if (Pantalla === 4) {
    //boton derecho
    if (click(posXD +15, posYD, tam + 80, tam)) {
      PasarPantalla(Pantalla, 5);
    }
    //boton izquierdo
    else if (click(posXD2 +15, posYD, tam + 80, tam)) {
      PasarPantalla(Pantalla, 13);
      FinalMalo.play();
    }
  } else if (Pantalla === 6) {
    //boton derecho
    if (click(posXD +15, posYD, tam + 80, tam)) {
      PasarPantalla(Pantalla, 7);
    }
    //boton izquierdo
    else if (click(posXD2 +15, posYD, tam + 80, tam)) {
      PasarPantalla(Pantalla, 14);
      FinalMalo.play();
    }
  } else if (Pantalla === 9) {
    //boton derecho
    if (click(posXD +15, posYD, tam + 80, tam)) {
      PasarPantalla(Pantalla, 10);
    }
    //boton izquierdo
    else if (click(posXD2 +15, posYD, tam + 80, tam)) {
      PasarPantalla(Pantalla, 15);
      FinalMalo.play();
    }
  }
  
  if (Pantalla === 12){
    if (click(posXR, posYR + 350, tam, tam)) {
      PasarPantalla(Pantalla, 0);
    }
  }
  else if (Pantalla === 13 || Pantalla === 14 || Pantalla === 15) {
    if (click(posXR, posYR, tam, tam)) {
      PasarPantalla(Pantalla, 0);
    }
  }
}
