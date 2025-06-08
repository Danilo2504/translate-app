import TranslationCard from "../TranslationCard";

const Presentational = ({values, languages, handleInputChange, handleLanguageChange, handleClick, handleClear, types, maxChars}) => {
   return (
      <div className='flex space-x-4 items-center w-full'>
         <TranslationCard type={types.INPUT} value={values.input} setValue={handleInputChange} language={languages.input} setLanguage={handleLanguageChange} onClear={handleClear} onClick={handleClick} maxChars={maxChars}/>
         <TranslationCard type={types.OUTPUT} value={values.output} setValue={handleInputChange} language={languages.output} setLanguage={handleLanguageChange} onClear={handleClear} onClick={handleClick} maxChars={maxChars}/>
      </div>
   );
};

export default Presentational;
