const button = document.querySelector('.dark-light-btn')
const title = document.querySelector('.title')
const image = document.querySelector('.image')

let isMambaMode = false
const handleMode = () => {
  document.body.classList.toggle ('dark')

  if (isMambaMode === false) {
    title.innerText = 'No 24: Mamba Mentality'
    image.src = 'https://www.nplusonemag.com/wp-content/uploads/2016/04/EC9tW4j.jpg'
    image.alt = 'KB24'
  } else {
    title.innerText = 'No 8: The beginning'
    image.src = 'https://cdn.vox-cdn.com/thumbor/v_EzjIdSLAOPiYdKlAmLDkUg19Y=/0x0:2998x2998/1400x933/filters:focal(1642x1187:2120x1665):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66211020/450862838.jpg.0.jpg'
    image.alt = 'KB8'
  }
  isMambaMode = !isMambaMode
}

button.addEventListener('click', handleMode)