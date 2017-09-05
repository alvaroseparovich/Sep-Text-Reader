class handleDOM{
  constructor(){
    this.is = 'cool';
    this.arrayOrganizada;
    this.arrayL;
    this.arrayIndice;
    this.ttText;
  }

  paintDomO(target){
    target.classList.add('speaking');
  }
  TextPaint(target, textToHighligth){
    if(target.querySelector('.Readed')){target.querySelector('.Readed').classList.remove('Readed');}
    target.innerHTML = target.innerHTML.replace(textToHighligth,"<high class='Readed'>"+textToHighligth+"</high>");

  }
  splitTextSimpleDiv(target){
    this.arrayOrganizada = sep.organizeText(target.innerText);
    this.arrayL = this.arrayOrganizada.length;
    this.arrayIndice = 0;

    while(this.arrayIndice < this.arrayL){

      target.innerHTML = target.innerHTML.replace(this.arrayOrganizada[this.arrayIndice],"<splited>"+this.arrayOrganizada[this.arrayIndice]+"</splited>");
      this.arrayIndice ++;

    }

  }



}
painter = new handleDOM();
