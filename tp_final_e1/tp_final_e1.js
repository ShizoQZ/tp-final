let storyData; // Objeto para almacenar todos los estados de la historia
let currentStoryStateId = "start"; // ID del estado actual de la historia
let buttonHeight = 50; // Altura de los botones
let buttonWidth = 280; // Ancho de los botones
let buttonMargin = 20; // Margen entre botones y del borde

function setup() {
  createCanvas(640, 480); // Establece el tamaño del lienzo a 640x480 como se solicitó
  textAlign(CENTER, CENTER); // Alinea el texto al centro
  textSize(16); // Tamaño de fuente para el texto de la historia
  noStroke(); // Sin borde para las formas

  // Definición de todos los estados de la historia
  // Cada estado tiene un 'id', 'text', 'type' (story, decision, end)
  // y 'next' (para estados secuenciales) o 'choices' (para decisiones)
  storyData = {
    "start": {
      text: "Los tres cerdos deciden independizarse y cada uno construye su casa.",
      type: "story",
      next: "cerdo1_paja"
    },
    "cerdo1_paja": {
      text: "Cerdo nro1 construye su casa de paja.",
      type: "story",
      next: "cerdo2_madera"
    },
    "cerdo2_madera": {
      text: "Cerdo nro2 construye su casa de madera.",
      type: "story",
      next: "cerdo3_ladrillos"
    },
    "cerdo3_ladrillos": {
      text: "Cerdo nro3 construye su casa de ladrillos.",
      type: "story",
      next: "lobo_casa1_decision"
    },
    "lobo_casa1_decision": {
      text: "Lobo se presenta en la casa del cerdito nro1.",
      type: "decision",
      choices: [
        { text: "Cerdito nro1 intenta negociar con el lobo.", next: "final1" },
        { text: "Cerdito nro1 huye a la casa de madera.", next: "cerdito1_huye" }
      ]
    },
    "final1": {
      text: "Cerdito nro1 muere. (FINAL 1)",
      type: "end",
      isFinal: true
    },
    "cerdito1_huye": {
      text: "Cerdito nro1 huye a la casa de madera.",
      type: "story",
      next: "lobo_destruye_casa2"
    },
    "lobo_destruye_casa2": {
      text: "El lobo se dirige a la casa del cerdito nro2 y lo destruye.",
      type: "story",
      next: "cerditos_enfrentar_decision"
    },
    "cerditos_enfrentar_decision": {
      text: "Los cerditos deciden enfrentarlos.",
      type: "decision",
      choices: [
        { text: "Cerdito nro1 y cerdito nro2 mueren.", next: "final2" },
        { text: "Los cerdos huyen a la casa de ladrillos.", next: "cerdos_huyen_ladrillos" }
      ]
    },
    "final2": {
      text: "Cerdito nro1 y cerdito nro2 mueren. (FINAL 2)",
      type: "end",
      isFinal: true
    },
    "cerdos_huyen_ladrillos": {
      text: "Los cerdos huyen a la casa de ladrillos.",
      type: "story",
      next: "lobo_intenta_destruir_ladrillos"
    },
    "lobo_intenta_destruir_ladrillos": {
      text: "Lobo intenta destruir la casa de ladrillos pero no lo logra.",
      type: "story",
      next: "lobo_chimenea_decision"
    },
    "lobo_chimenea_decision": {
      text: "Lobo decide cambiar de técnica y se dirige a la chimenea.",
      type: "decision",
      choices: [
        { text: "Los cerdos aprovechan la oportunidad y escapan.", next: "final3" },
        { text: "Los cerdos aprovechan la oportunidad y colocan una olla de agua hirviendo debajo de la chimenea.", next: "final4" }
      ]
    },
    "final3": {
      text: "El lobo los atrapa y los tres cerditos mueren. (FINAL 3)",
      type: "end",
      isFinal: true
    },
    "final4": {
      text: "El lobo se quema al caerse en la olla y huye adolorido. (FINAL 4)",
      type: "end",
      isFinal: true
    }
  };
}

function draw() {
  background(220); // Fondo gris claro
  let currentState = storyData[currentStoryStateId]; // Obtiene el estado actual

  displayStoryScreen(currentState); // Muestra el contenido del estado actual
}

/**
 * Muestra el texto y los botones para el estado de historia dado.
 * @param {object} state - El objeto del estado actual de la historia.
 */
function displayStoryScreen(state) {
  fill(0); // Color de texto negro
  // Muestra el texto de la historia en la parte superior de la pantalla
  text(state.text, width / 2, height / 4, width - 40, height / 2);

  if (state.type === "decision") {
    // Si es un estado de decisión, dibuja los botones de elección
    drawChoices(state.choices);
  } else if (state.type === "story" && !state.isFinal) {
    // Si es un estado de historia secuencial (no final), dibuja un botón "Continuar"
    drawContinueButton();
  } else if (state.type === "end") {
    // Si es un estado final, dibuja un botón "Reiniciar"
    drawRestartButton();
  }
}

/**
 * Dibuja los botones para las opciones de un estado de decisión.
 * @param {Array<object>} choices - Un arreglo de objetos de elección, cada uno con 'text' y 'next'.
 */
function drawChoices(choices) {
  let startY = height / 2 + buttonMargin; // Posición Y inicial para los botones
  for (let i = 0; i < choices.length; i++) {
    let x = width / 2 - buttonWidth / 2; // Centra el botón horizontalmente
    let y = startY + i * (buttonHeight + buttonMargin); // Calcula la posición Y para cada botón
    drawButton(x, y, buttonWidth, buttonHeight, choices[i].text); // Dibuja el botón
  }
}

/**
 * Dibuja un botón genérico con texto.
 * @param {number} x - Posición X del botón.
 * @param {number} y - Posición Y del botón.
 * @param {number} w - Ancho del botón.
 * @param {number} h - Altura del botón.
 * @param {string} label - Texto a mostrar en el botón.
 */
function drawButton(x, y, w, h, label) {
  // Cambia el color del botón si el ratón está sobre él
  let isHover = mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
  fill(isHover ? 150 : 200); // Gris más oscuro al pasar el ratón
  rect(x, y, w, h, 10); // Dibuja el rectángulo del botón con esquinas redondeadas
  fill(0); // Color de texto negro
  text(label, x + w / 2, y + h / 2); // Dibuja el texto centrado en el botón
}

/**
 * Dibuja el botón "Continuar" para avanzar en la historia secuencial.
 */
function drawContinueButton() {
  let x = width / 2 - buttonWidth / 2;
  let y = height - buttonHeight - buttonMargin;
  drawButton(x, y, buttonWidth, buttonHeight, "Continuar");
}

/**
 * Dibuja el botón "Reiniciar" para volver al inicio de la historia.
 */
function drawRestartButton() {
  let x = width / 2 - buttonWidth / 2;
  let y = height - buttonHeight - buttonMargin;
  drawButton(x, y, buttonWidth, buttonHeight, "Reiniciar");
}

/**
 * Maneja los clics del ratón para la interacción con los botones.
 */
function mousePressed() {
  let currentState = storyData[currentStoryStateId];

  if (currentState.type === "decision") {
    let startY = height / 2 + buttonMargin;
    for (let i = 0; i < currentState.choices.length; i++) {
      let x = width / 2 - buttonWidth / 2;
      let y = startY + i * (buttonHeight + buttonMargin);
      if (isMouseOverButton(x, y, buttonWidth, buttonHeight)) {
        advanceStory(currentState.choices[i].next); // Avanza al siguiente estado según la elección
        return; // Sale de la función después de manejar el clic
      }
    }
  } else if (currentState.type === "story" && !currentState.isFinal) {
    // Si es un estado secuencial, verifica el botón "Continuar"
    let x = width / 2 - buttonWidth / 2;
    let y = height - buttonHeight - buttonMargin;
    if (isMouseOverButton(x, y, buttonWidth, buttonHeight)) {
      advanceStory(currentState.next); // Avanza al siguiente estado secuencial
    }
  } else if (currentState.type === "end") {
    // Si es un estado final, verifica el botón "Reiniciar"
    let x = width / 2 - buttonWidth / 2;
    let y = height - buttonHeight - buttonMargin;
    if (isMouseOverButton(x, y, buttonWidth, buttonHeight)) {
      advanceStory("start"); // Reinicia la historia
    }
  }
}

/**
 * Función auxiliar para verificar si el ratón está sobre un botón.
 * @param {number} x - Posición X del botón.
 * @param {number} y - Posición Y del botón.
 * @param {number} w - Ancho del botón.
 * @param {number} h - Altura del botón.
 * @returns {boolean} - Verdadero si el ratón está sobre el botón, falso en caso contrario.
 */
function isMouseOverButton(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

/**
 * Cambia el estado actual de la historia al ID proporcionado.
 * @param {string} nextStateId - El ID del próximo estado de la historia.
 */
function advanceStory(nextStateId) {
  currentStoryStateId = nextStateId;
}
