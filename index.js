setInterval(setClock, 1000)

const hourHand = document.querySelector('.hour')
const minuteHand = document.querySelector('.minute')
const secondHand = document.querySelector('.second')

function setClock() {
  const date = new Date()
  const secondRatio = date.getSeconds() / 60
  const minuteRatio = (secondRatio + date.getMinutes()) / 60
  const hourRatio = (minuteRatio + date.getHours()) / 12

  setRatio(hourHand, hourRatio)
  setRatio(minuteHand, minuteRatio)
  setRatio(secondHand, secondRatio)
}

function setRatio(element, ratio) {
  element.style.setProperty('--rotation', ratio * 360)
}
setClock()
