const tortoiseimg = document.querySelector('.tortoise img')
const tortoisep = document.querySelector('.tortoise p')

const roadrunnerimg = document.querySelector('.roadrunner img')
const roadrunnerp = document.querySelector('.roadrunner p')

const saguaroimg = document.querySelector('.saguaro img')
const saguarop = document.querySelector('.saguaro p')

const pricklyimg = document.querySelector('.pricklypear img')
const pricklyp = document.querySelector('.pricklypear p')

tortoiseimg.addEventListener('click', () => {
  tortoisep.style.display = tortoisep.style.display === 'none' ? 'block' : 'none'
})

roadrunnerimg.addEventListener('click', () => {
  roadrunnerp.style.display = roadrunnerp.style.display === 'none' ? 'block' : 'none'
})

saguaroimg.addEventListener('click', () => {
  saguarop.style.display = saguarop.style.display === 'none' ? 'block' : 'none'
})

pricklyimg.addEventListener('click', () => {
  pricklyp.style.display = pricklyp.style.display === 'none' ? 'block' : 'none'
})