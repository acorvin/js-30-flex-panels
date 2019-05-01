// Get panels by class
const panels = document.querySelectorAll('.panel')
// Open panels, transition-in, show child content on enter
function panelOpen() {
  this.classList.add('open')
  this.classList.add('open-active')
}
// Close panels, transition-out, hide child content on exit
function panelClose() {
  this.classList.remove('open')
  this.classList.remove('open-active')
}
// toggle each panel
function toggleOpen() {
  this.classList.toggle('open')
}
// transitions occur on mouse enter and exit
panels.forEach(panel => panel.addEventListener('mouseenter', panelOpen))
panels.forEach(panel => panel.addEventListener('mouseleave', panelClose))
