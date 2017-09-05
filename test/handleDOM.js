class handleDOM{
  constructor(){
    this.is = 'cool';
    this.arrayOrganizada;
    this.arrayL;
    this.arrayIndice;
    this.textUN;

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

    target.innerHTML = "<splited>" + this.arrayOrganizada[this.arrayIndice] + "</splited>";
    this.arrayIndice++;

    while(this.arrayIndice < this.arrayL){
      this.textUN = this.arrayOrganizada[this.arrayIndice];
      target.innerHTML = target.innerHTML + "<splited>" + this.textUN + "</splited>";
      console.log(this.textUN);
      console.log(target.innerHTML);

      this.arrayIndice ++;

    }

  }



}
painter = new handleDOM();
