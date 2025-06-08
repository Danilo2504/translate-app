import { useState } from "react";
import Presentational from "./Presentational";

const TranslationCard = ({type, value, setValue, language, setLanguage, onClick, maxChars, onClear}) => {
  const [isCopied, setIsCopied] = useState(false);
  
  const speakText = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = language;
    speechSynthesis.speak(speech);
  }

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      setIsCopied(false);
    }
  };

  return (
    <Presentational
      type={type}
      value={value}
      setValue={setValue}
      language={language}
      setLanguage={setLanguage}
      isCopied={isCopied}
      copyToClipboard={copyToClipboard}
      speakText={speakText}
      clearText={onClear}
      onClick={onClick}
      maxChars={maxChars}
    />
  );
};

export default TranslationCard;
