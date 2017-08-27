class handleDOM{
  constructor(){
    this.is = 'cool';
  }

  paintDomO(target){
    target.classList.add('speaking');
  }
  TextPaint(target, textToHighligth){
    if(target.querySelector('.Readed')){target.querySelector('.Readed').classList.remove('Readed');}
    target.innerHTML = target.innerHTML.replace(textToHighligth,"<high class='Readed'>"+textToHighligth+"</high>");

  }




}
painter = new handleDOM();
