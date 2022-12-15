const createAlertVanilla = (mensaje = 'Error', color = 'bg-red-300') => {
  const alertBox = document.createElement('div')
  
  // La propiedad cssText es el string con todos los estilos que hay en el atributo style="". Es mucho más fácil usar este si tenemos que añadir muchos estilos con javascript
  alertBox.style.cssText = `
    background-color:rgba(255, 99, 71, 0.85);
    padding: 1rem;
    border-radius: 0.1rem;
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 65vw;
    text-align: center;
  `
 

  alertBox.setAttribute('role', 'alert')
  alertBox.innerHTML = `<p>${mensaje}</p>`

  
  // podemos añadir las animaciones desde javascript directamente
  const fadeInFadeOut = alertBox.animate([
    { opacity: 0, visibility: 'hidden' },
    { opacity: 1, visibility: 'visible', offset: 0.1 },
    { opacity: 1, visibility: 'visible', offset: 0.9 },
    { opacity: 0, visibility: 'hidden' },
  ], { duration: 6000, easing: 'ease', fill: 'forwards' })

  fadeInFadeOut.addEventListener('finish', () => alertBox.remove())  

  document.body.append(alertBox)
}

export default createAlertVanilla