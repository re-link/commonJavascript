const randomBoolean = () => Math.random() >= 0.5
const isWeekDay = date => date.getDay() % 6 !== 0
const reverse = str => str.split('').reverse().join('')
const isBrowserTabInView = () => document.hidden
const isEven = num => num % 2 === 0
const timeFromDate = date => date.toTimeString().slice(0, 8)
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform)
const fullscreen = () => {
    const element = document.documentElement
    if (element.requestFullscreen) {
        element.requestFullscreen()
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen()
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
    }
}
const exitFullscren = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen()
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
    }
}
const elementFull = element => {
    if (element.requestFullscreen) {
        element.requestFullscreen()
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen()
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
    }
}
