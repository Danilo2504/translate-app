import { useContext, useState } from "react";
import Presentational from "./Presentational";
import { getTranslation } from "../../requests/getTranslation";
import { INITIAL_LANGUAGES, INITIAL_VALUES, MAX_CHARS, TYPES } from "../../utils/constants";
import LoaderContext from "../../contexts/LoaderContext";



const Translator = () => {
   const {showLoader, hideLoader} = useContext(LoaderContext);
   const [values, setValues] = useState(INITIAL_VALUES);
   const [languages, setLanguages] = useState(INITIAL_LANGUAGES);

   const handleInputChange = ({ type = TYPES.INPUT, newValue = ''}) =>{     
      const newText = newValue.length > MAX_CHARS ? newValue.slice(0, MAX_CHARS) : newValue;
      
      setValues(prev => ({
         ...prev,
         [type]: newText
      }));
   }

   const handleLanguageChange = async({ type = TYPES.INPUT, newLanguage = 'en' }) => {
      setLanguages(prev => ({
         ...prev,
         [type]: newLanguage
      }));

      if(type === TYPES.OUTPUT && values.input.length > 0) {
         console.log(newLanguage);
         
         const translatedText = await makeTranslation({languages: {...languages, [type]: newLanguage}, values});
         console.log("Translated Text: ", translatedText);
         
         handleInputChange({
            type: TYPES.OUTPUT,
            newValue: translatedText
         });
      }
   };

   const handleClick = async ({event}) => {
      const translatedText = await makeTranslation({languages, values});

      handleInputChange({
         type: TYPES.OUTPUT,
         newValue: translatedText
      })

      event.target.blur();
   }

   const handleClear = () => {
      setValues(INITIAL_VALUES);
   }

   const makeTranslation = async ({languages, values}) => {
      showLoader();
      const langString = `${languages.input}|${languages.output}`;
      const res = await getTranslation(values.input, langString);
      if (res.responseStatus === 200 && res.responseData.translatedText) {
         hideLoader();
         return res.responseData.translatedText;
      } else {
         console.error("Translation failed: ", res.responseStatus, res.responseDetails);
         hideLoader();
         return values.input;
      }
   }

   return (
      <Presentational
         values={values}
         languages={languages}
         handleInputChange={handleInputChange}
         handleLanguageChange={handleLanguageChange}
         handleClick={handleClick}
         handleClear={handleClear}
         types={TYPES}
         maxChars={MAX_CHARS}
      />
   );
};

export default Translator;
