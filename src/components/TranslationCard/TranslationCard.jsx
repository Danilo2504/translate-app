import { useContext, useState } from "react";
import Presentational from "./Presentational";
import LoaderContext from "../../contexts/LoaderContext";

const TranslationCard = ({type, value, setValue, language, setLanguage, onClick, maxChars, onClear}) => {
  const {showLoader, hideLoader} = useContext(LoaderContext);
  const [isCopied, setIsCopied] = useState(false);
  
  const speakText = (text) => {
    showLoader();
    setTimeout(() => {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = language;
      speechSynthesis.speak(speech);
      hideLoader();
    }, 300);
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
