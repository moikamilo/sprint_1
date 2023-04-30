// Función para encriptar un texto dado
function encriptarTexto(texto) {
    let textoEncriptado = texto.replace(/e/g, 'enter')
                                .replace(/i/g, 'imes')
                                .replace(/a/g, 'ai')
                                .replace(/o/g, 'ober')
                                .replace(/u/g, 'ufat');
    return textoEncriptado;
  }
  
  // Función para desencriptar un texto encriptado dado
  function desencriptarTexto(textoEncriptado) {
    let texto = textoEncriptado.replace(/enter/g, 'e')
                               .replace(/imes/g, 'i')
                               .replace(/ai/g, 'a')
                               .replace(/ober/g, 'o')
                               .replace(/ufat/g, 'u');
    return texto;
  }
  
  // Obtener los elementos HTML necesarios
  const textarea = document.getElementById('texto');
  const encriptarBtn = document.getElementById('encriptar');
  const desencriptarBtn = document.getElementById('desencriptar');
  const copiarBtn = document.getElementById('copiar');
  const textoEncriptadoTextarea = document.getElementById('texto-encriptado');
  const subtitulo = document.querySelector('.contenedor_subtitulo h3');
  const parrafo = document.querySelector('.contenedor_parrafo p');
  
  // Agregar el evento click al botón Encriptar
  encriptarBtn.addEventListener('click', function() {
    let texto = textarea.value.trim().toLowerCase();
    if (texto) {
      let textoEncriptado = encriptarTexto(texto);
      subtitulo.textContent = 'Texto encriptado:';
      parrafo.textContent = textoEncriptado;
      textoEncriptadoTextarea.value = textoEncriptado;
    } else {
      subtitulo.textContent = 'No se encontró ningún mensaje';
      parrafo.textContent = 'Escribe el texto que desea encriptar o desencriptar';
      textoEncriptadoTextarea.value = '';
    }
  });
  
  // Agregar el evento click al botón Desencriptar
  desencriptarBtn.addEventListener('click', function() {
    let textoEncriptado = textarea.value.trim().toLowerCase();
    if (textoEncriptado) {
      let texto = desencriptarTexto(textoEncriptado);
      subtitulo.textContent = 'Texto desencriptado:';
      parrafo.textContent = texto;
      textoEncriptadoTextarea.value = texto;
    } else {
      subtitulo.textContent = 'No se encontró ningún mensaje';
      parrafo.textContent = 'Escribe el texto que desea encriptar o desencriptar';
      textoEncriptadoTextarea.value = '';
    }
  });
  
  // Agregar el evento click al
  