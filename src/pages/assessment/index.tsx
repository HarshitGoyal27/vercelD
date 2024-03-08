import React, { useEffect, useState } from 'react';
import style from "../../styles/assessment.module.css"
const SpeechRecognitionExample: React.FC = () => {
  const [listening, setListening] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string>('');
  const [startTest, setStartTest] = useState<boolean>(true);
  const startListening = () => {
    setListening(true);
    const recognition = new (window.SpeechRecognition || (window as any).webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const currentTranscript = event.results[event.results.length - 1][0].transcript;
      setTranscript(currentTranscript);
    };
    recognition.start();
  };

  const stopListening = () => {
    setListening(false);
    const recognition = new (window.SpeechRecognition || (window as any).webkitSpeechRecognition)();
    recognition.stop();
  };

   const textToSpeech = (text:string)=>{
    setStartTest(false);

    const value = new SpeechSynthesisUtterance(text);

    window.speechSynthesis.speak(value);
   }
 
  return (
    <div className={style.outer}>
      <div className={style.content}>
      <h1>AI Assessment</h1>
      {startTest && 
        <button 
          onClick={()=>textToSpeech("Hello, Welcome to skills capital platform")} 
          className={style.button}
        >
          Start assessment
        </button>
      }
      {!startTest &&<div> <div onClick={()=>textToSpeech("Introduce your self")} className={style.question} >Click to listen Question 1</div> <div style={{display:"flex", gap:"20px"}}>
      <button onClick={startListening} className={style.button} disabled={listening}>Start Answering</button>
      <button onClick={stopListening} className={style.button} disabled={!listening}>Stop Answering</button>
      </div>
      </div>}
      {!startTest && <div className={style.speech}>{transcript}</div>}
      </div>
    </div>
  );
};

export default SpeechRecognitionExample;
