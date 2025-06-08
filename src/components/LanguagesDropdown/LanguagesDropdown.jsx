import { useState } from "react";
import Presentational from "./Presentational";
import { LANGUAGES_LIST } from "../../utils/constants";

const LanguagesDropdown = ({type, language, setLanguage}) => {
   const [isVisible, setIsVisible] = useState(false);
   const languages = LANGUAGES_LIST;

   const toggleDropdown = () => {
      setIsVisible(prev => !prev);
   }

   const openDropdown = () => {
      setIsVisible(true);
   }

   const closeDropdown = () => {
      setIsVisible(false);
   }

   const handleSetLanguage = ({type, newLanguage}) => {
      setLanguage({type, newLanguage});
      closeDropdown();
   }

   const findMoreLanguage = languages.slice(3).find(lang => lang.key === language);

   return <Presentational
      type={type}
      languages={languages}
      language={language}
      setLanguage={handleSetLanguage}
      isVisible={isVisible}
      toggleDropdown={toggleDropdown}
      openDropdown={openDropdown}
      closeDropdown={closeDropdown}
      findMoreLanguage={findMoreLanguage}
   />;
};

export default LanguagesDropdown;
