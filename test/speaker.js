// class
class Speaker{

  constructor(lang='en-US'){

    this.ssUtt = new SpeechSynthesisUtterance();

    this._voice = window.speechSynthesis.getVoices()[10];// Note: some voices don't support altering params
    this._voiceURI = 'native';
    this._volume = 1;// 0 to 1
    this._rate = 1;// 0.1 to 10
    this._pitch = 1;// 0 to 2
    this._text = 'Void';
    this._language = lang;
    this._array = [];
    this.elementPaint = '';
    this.arrayI = 0; //index para leitura dos textos
    this._cancel = 0;
    this.voicePause = false;

    this.ssUtt.voice = this._voice;
    this.ssUtt.voiceURI = this._voiceURI;
    this.ssUtt.volume = this._volume;
    this.ssUtt.rate = this._rate;
    this.ssUtt.pitch = this._pitch;
    this.ssUtt.text = this._text;
    this.ssUtt.lang = this._language;
    this.ssUtt.onend = e => {
      if(!this._cancel){
        this.continueSpeaking()
      }else if(this._cancel){
        console.log('cancelado a continuação!');
        this._cancel = 0;
      }
    };

  }

  //Modify SpeechSynthesisUtterance config...
  volume(volume=1)/* 0-1 */{  this.ssUtt.volume = volume;  }
  voice(voice){               this.ssUtt.voice = voice;}
  voiceURI(uri){              this.ssUtt.voiceURI = uri;  }
  rate(rate=1){               this.ssUtt.rate = rate;  }
  pitch(pitch=1){             this.ssUtt.pitch = pitch;  }
  lang(language='en-US'){     this.ssUtt.lang = language;  }

  //Do Actions...
  cancel(){    window.speechSynthesis.cancel();  }
  pause(){    window.speechSynthesis.pause();  }
  resume(){    window.speechSynthesis.resume();  }
  //get Status...
  isPaused(){      return window.speechSynthesis.paused;/*it's not confidence, this status may fail*/ }
  isSpeaking(){      return window.speechSynthesis.speaking;  }
  isPending(){      return window.speechSynthesis.pending;  }

  text(element){
    //receive an array of short texts to be spoken
    this._array = element;
    this.actualizeTextByArray();
  }

  actualizeTextByArray(){
    this.ssUtt.text = this._array.querySelector("#a"+this.arrayI).innerText;
    painter.TextPaint(this._array.querySelector("#a"+this.arrayI));
    this.arrayI ++;
  }

  continueSpeaking(){
    if(this._array.querySelector("#a"+this.arrayI)){
      this.actualizeTextByArray();
      this.speak();
      //console.log(this.ssUtt.text);

    }else{
      console.log('finish');return;
    }
  }

  cancelSpeak(){
    sep._cancel = 1; sep.cancel(); console.log("cancelSpeak()"); sep._cancel = 0;
  }

  organizeText(text='no text was gived'){
    /*  organizeText(STRING){return ARRAY}*/
    let tLen = text.length;
    let maxCaracters = 140;
    let initIndex = 0;
    let returnText = [];
    let invertText = "";
    let cutText = '';
    let dotIndex = 0;
    let pharse = '';

    if(tLen <= 140){returnText.push(text); return returnText;}

    while(initIndex != tLen){

      cutText = text.slice(initIndex, initIndex + maxCaracters);

      if(this.invertStr(cutText).search("[.]") >= 0){
        invertText = this.invertStr(cutText);
        dotIndex = invertText.search("[.]");
        pharse = cutText.slice(0,cutText.length - dotIndex);
        returnText.push(pharse);
        initIndex = initIndex + pharse.length;

      }else if(this.invertStr(cutText).search("[,]") >= 0){
        invertText = this.invertStr(cutText);
        dotIndex = invertText.search("[,]");
        pharse = cutText.slice(0,cutText.length - dotIndex);
        returnText.push(pharse);
        initIndex = initIndex + pharse.length;

      }else if(this.invertStr(cutText).search("[ ]") >= 0){
        invertText = this.invertStr(cutText);
        dotIndex = invertText.search("[ ]");
        pharse = cutText.slice(0,cutText.length - dotIndex);
        returnText.push(pharse);
        initIndex = initIndex + pharse.length;

      }else{

        if (tLen >= initIndex+maxCaracters){
          pharse = cutText;
          returnText.push(pharse);
          initIndex = initIndex + pharse.length;
        }else{
          returnText.push(text.slice(initIndex,tLen));
          initIndex = initIndex + text.slice(initIndex,tLen).length;
        }
        if(initIndex == tLen){console.log('All Array was Sweeped')}

      }
    }
    return returnText;
  }

  invertStr(string){
    return string.split("").reverse().join("");
  }

  speakThat(id='a0'){
    sep.cancelSpeak();
    this.arrayI = id.substr(1, id.length)
    this.actualizeTextByArray();
    //console.log(this.ssUtt.text);
    console.log('speak that');
    this.speak();

  }

  speak(){
    this.voicePause = false;
    window.speechSynthesis.speak(this.ssUtt);
  }

}
sep = new Speaker(/*'pt-BR'*/);
//Modules
