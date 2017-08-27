
document.addEventListener('dblclick', function p(event){
  sep.text(event.target.parentElement);
  sep.speak();
  event.target.classList.add('sep_speaking');
});

document.addEventListener('click', event=>{
  painter.paintDomO(event.target)
});
