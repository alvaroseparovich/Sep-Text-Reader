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
    this.ssUtt.text = text;
  }
  lang(language='en-US'){
    this.ssUtt.lang = language;
  }

  select(event){
    //this.text(target.innerContent);
    console.log(event);
    console.log('event');
  }

  speak(){
    window.speechSynthesis.speak(this.ssUtt);
  }

}

sep = new Speaker();

document.addEventListener('click', sep.select(event))
