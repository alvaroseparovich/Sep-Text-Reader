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
    let index;
    if(target.children.length){
      console.log('------->has-child');

      for (index in target.children){
        if(target.children[index] instanceof HTMLElement){
          if(target.children[index].children == 0){
            target.children[index] = this.splitTextSimpleDiv(target.children[index]);
            console.log('------->call splitTextSimpleDiv because have no child from FOR LOOP');

          }else{
            this.splitAllChildElements(target.children[index]);
            console.log('------->call splitAllChild from FOR LOOP');
          }
        }
      }
    }else{
      console.log('------->else split simple');
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
