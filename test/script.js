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
  sep.cancelingKey(0);
  sep.speakThat(event.target);
  console.log(event.target);
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
        sep.cancelingKey(1);
        sep.cancelSpeak();
        break;
    default:
        console.log('apertou um botão'+ e);
      }

      if( e.keyCode == 32/*Space*/ ){

    }
}
