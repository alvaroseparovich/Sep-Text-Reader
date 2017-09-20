class Speaker{

  constructor(lang='en-US'){

    this.ssUtt = new SpeechSynthesisUtterance();

    this._voice = window.speechSynthesis.getVoices()[10];// Note: some voices don't support altering params
    this._voiceURI = 'native';
    this._volume = 1;// 0 to 1
    this._rate = 1;// 0.1 to 10
    this._pitch = 1;//0 to 2
    this._text = 'Void';
    this._language = lang;
    this._array = [];

    this.ssUtt.voice = this._voice;
    this.ssUtt.voiceURI = this._voiceURI;
    this.ssUtt.volume = this._volume;
    this.ssUtt.rate = this._rate;
    this.ssUtt.pitch = this._pitch;
    this.ssUtt.text = this._text;
    this.ssUtt.lang = this._language;

  }

  //
  //Core Controller
  //

  voice(voice){
    this.ssUtt.voice = voice;
  }
  voiceURI(uri){
    this.ssUtt.voiceURI = uri;
  }
  volume(volume=1){//need to make a filter of volume value, to don't allow mor than 1 or less than 0
    this.ssUtt.volume = volume;
  }
  rate(rate=1){
    this.ssUtt.rate = rate;
  }
  pitch(pitch=1){
    this.ssUtt.pitch = pitch;
  }
  text(text='text is empty'){
    this._array = [text,'segundo','terceiro','quarto'];
    this.ssUtt.text = text;
    sep.speak();
  }
  lang(language='en-US'){
    this.ssUtt.lang = language;
  }

  select(event){
    //this.text(target.innerContent);
    console.log(event);
    console.log('event');
  }

  continueSpeaking(){
    this.ssUtt.text = this._array.shift();
    window.speechSynthesis.speak(this.ssUtt);
  }

  /*
  organizeText(STRING){return ARRAY}*/
  organizeText(text='no text was gived'){
    let tLen = text.length;
    let maxCaracters = 140;
    let initIndex = 0;
    let returnText = [];
    let invertText = "";
    let cutText = '';

  if(tLen <= 140){returnText.push(text); return returnText;}

    while(initIndex != tLen){

      cutText = text.slice(initIndex, initIndex + maxCaracters);
      if(((dotIndex = (invertText = invertStr(cutText)).search("[.]"))) >= 0){
        pharse = cutText.slice(0,cutText.length - dotIndex);
        returnText.push(pharse);
        initIndex = initIndex + pharse.length;

      }else if(((dotIndex = (invertText = invertStr(cutText)).search("[,]"))) >= 0){
        pharse = cutText.slice(0,cutText.length - dotIndex);
        returnText.push(pharse);
        initIndex = initIndex + pharse.length;

      }else if(((dotIndex = (invertText = invertStr(cutText)).search("[ ]"))) >= 0){
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


  speak(){
    window.speechSynthesis.speak(this.ssUtt);
  }

}

sep = new Speaker('pt-BR');
