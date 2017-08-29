
document.addEventListener('dblclick', function p(event){
  sep.text(event.target.parentElement);
  sep.speak();
  event.target.classList.add('sep_speaking');
});

document.addEventListener('click', event=>{
  painter.paintDomO(event.target)
});

document.onkeyup = e => {
  console.log(e);
  switch( e.code ) {
    case "Space":

      if( !sep.isPaused() ){sep.pause();console.log("Pause()");}
      else if(sep.isPaused()){
        sep.resume(); console.log("Resume()");
      }
        break;

    case "KeyC":
        sep.cancel();  console.log("cancel()");
        break;
    default:
        console.log('apertou um botão'+ e);
      }

      if( e.keyCode == 32/*Space*/ ){

    }
}
