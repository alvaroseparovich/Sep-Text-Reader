class handleDOM{
  constructor(){
    this.is = 'cool';
    this.arrayOrganizada;
    this.arrayL;
    this.arrayIndice;
    this.textUN;
    this.childrenI = 0;
    this.idIndice = 0;

  }

  paintDomO(target){
    target.classList.add('speaking');
  }

  TextPaint(target){
    if(document.querySelector('.Readed')){document.querySelector('.Readed').classList.remove('Readed');}
    target.classList.add('Readed');

    console.log('pass TextPaint()');
    console.log(target);
  }

  splitAllChildElements(target){
    let index;
    //console.log(target);
    if(target.children.length){
      //console.log('------->has-child');

      target.childNodes.forEach(node=>{
        //console.log(node)
        if(node instanceof HTMLElement){
          node = this.splitTextSimpleDiv(node);
          //console.log('------->call splitTextSimpleDiv because have no child from FOR LOOP');

        }else if( node.toString() == "[object Text]"){
          target = this.splitTextSimpleDiv(target);
          //console.log('------->call splitAllChild from FOR LOOP');
        }
      });

    }else{
      //console.log('------->else split simple');
      target = this.splitTextSimpleDiv(target);
    }
  }

  splitTextSimpleDiv(target){
    this.arrayOrganizada = sep.organizeText(target.innerText);
    this.arrayL = this.arrayOrganizada.length;
    this.arrayIndice = 0;

    target.innerHTML = "<splited id='a" + this.idIndice +"'>" + this.arrayOrganizada[this.arrayIndice] + "</splited>";
    this.arrayIndice++;
    this.idIndice++;

    while(this.arrayIndice < this.arrayL){
      this.textUN = this.arrayOrganizada[this.arrayIndice];
      target.innerHTML = target.innerHTML + "<splited id='a" + this.idIndice +"'>" + this.textUN + "</splited>";
      this.idIndice++;
      console.log(this.textUN);
      console.log(target.innerHTML);

      this.arrayIndice ++;

    }

  }



}
painter = new handleDOM();
