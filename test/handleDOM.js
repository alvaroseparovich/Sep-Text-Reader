class handleDOM{
  constructor(){
    this.is = 'cool';
    this.arrayOrganizada;
    this.arrayL;
    this.arrayIndice;
    this.textUN;
    this.childrenI = 0;

  }

  paintDomO(target){
    target.classList.add('speaking');
  }
  TextPaint(target, textToHighligth){
    if(target.querySelector('.Readed')){target.querySelector('.Readed').classList.remove('Readed');}
    target.innerHTML = target.innerHTML.replace(textToHighligth,"<high class='Readed'>"+textToHighligth+"</high>");

  }

  splitAllChildElements(target){
    if(target.hasChildNode()){
      target.setAttribute('childSweeped',0);

      while( target.getAttribute('childSweeped') < target.children.length){

        this.splitAllChildElements(target.children[target.getAttribute('childSweeped')]);
        target.setAttribute('childSweeped', target.getAttribute('childSweeped')+1);

      }
    }else{
      target = this.splitTextSimpleDiv(target);
    }
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
