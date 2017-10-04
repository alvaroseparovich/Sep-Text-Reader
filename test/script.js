/*
document.addEventListener('dblclick', function p(event){
  sep.text(event.target.parentElement);
  sep.speak();
  event.target.classList.add('sep_speaking');
});

document.addEventListener('click', event=>{
  painter.paintDomO(event.target)
});
*/

document.addEventListener('click', event=>{
  sep.speakThat(event.target.id);
});

document.addEventListener('DOMContentLoaded', e=>{
  content = document.querySelector('content');
  painter.splitAllChildElements(content);
  sep.text(content);
}
);

document.addEventListener('dbclick', event=>{
  painter.splitAllChildElements(event.target)
});

document.onkeyup = e => {
  //console.log(e);
  switch( e.code ) {
    case "Space":

      if( !sep.voicePause ){sep.pause();console.log("Pause()"); sep.voicePause = !sep.voicePause;}
      else if(sep.voicePause){
        sep.resume(); console.log("Resume()");sep.voicePause = !sep.voicePause;
      }
        break;

    case "KeyC":
        sep._cancel = 1; sep.cancel();  console.log("cancel()");
        break;
    default:
        console.log('apertou um botão'+ e);
      }

      if( e.keyCode == 32/*Space*/ ){

    }
}
