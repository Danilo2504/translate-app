const Presentational = ({type, languages, language, setLanguage, isVisible, toggleDropdown, findMoreLanguage}) => {
   const activeClasses = 'text-[var(--color-white)] bg-[var(--color-slate)] cursor-pointer';
   
   return (
      <ul className="flex items-center space-x-3 list-none border-b border-[var(--color-slate)] py-3">
         {languages.slice(0, 3).map(({key, value}) => {
            return (
               <li key={key}>
                  <a
                     className={language === key ? activeClasses : ''}
                     onClick={() => setLanguage({type, newLanguage:key})}
                  >{value}</a>
               </li>
            );
         })}
         <li>
            <a className={language === findMoreLanguage?.key ? activeClasses : ''} onClick={toggleDropdown}>{findMoreLanguage ? findMoreLanguage.value : 'Search More'}</a>
            {
               isVisible && (
                  <ul className = "dropdown absolute z-10">
                     {languages.slice(3).map(({key, value}) => {
                        return (
                           <li key={key}>
                              <a
                                 onClick={() => setLanguage({type, newLanguage:key})}
                              >{value}</a>
                           </li>
                        );
                     })}
                  </ul>
               )
            }
         </li>
      </ul>
   );
};

export default Presentational;
