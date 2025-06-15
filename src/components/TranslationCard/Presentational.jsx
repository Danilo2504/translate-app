import SortAlfa from '../../assets/images/sort_alfa.svg?react';
import SoundMax from '../../assets/images/sound_max_fill.svg?react';
import CopyClipboard from '../../assets/images/copy_clipboard.svg?react';
import LanguagesDropdown from '../LanguagesDropdown';
import { debounce } from '../../utils/helpers';

const Presentational = ({type, value, setValue, language, setLanguage, onClick, maxChars, copyToClipboard, isCopied, speakText, clearText}) => {
  const cardClasses = type === 'input' ? 'bg-[var(--color-semi-dark)]' : 'bg-[var(--color-semi-black)]';

  return (
    <div className={"flex flex-col w-full " + cardClasses + " rounded-2xl p-6 border border-[var(--color-slate)]"}>
      <LanguagesDropdown type={type} language={language} setLanguage={setLanguage}/>
      <div className="flex flex-col w-full py-3 relative">
        {(type === 'input' && value.length > 0) ? (<button type='button' onClick={() => clearText()} className='absolute top-0 right-0 w-8 h-8 mt-3 pl-2 clear bg-transparent cursor-pointer '>X</button>) : null}
        <textarea value={value} readOnly={type === 'output'} onChange={(event) => setValue({type, newValue:event.target.value})} className="resize-none focus:outline-0 focus:border-0 mb-2.5 pr-4" name="" id="" rows={8}></textarea>
        {type === 'input' && <div className="position absolute bottom-2.5 end-0 select-none"><span className="text-[var(--color-light-gray)] text-xs">{value.length}/{maxChars}</span></div>}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <button type="button" onClick={() => debounce(speakText(value))} className="secondary"><SoundMax/></button>
          <div className='relative'>
            {isCopied && (
              <span className="bg-white rounded-xl px-3 py-1.5 absolute -top-9 left-1/2 -translate-1/2 text-black shadow after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2
                  after:border-8 after:border-transparent after:border-t-white">Copied!</span>
            )}
            <button type="button" className="secondary" onClick={() => copyToClipboard(value)}><CopyClipboard/></button>
          </div>
        </div>
        {type === 'input' && <button type="button" onClick={(event) => debounce(onClick({event}))} className="flex items-center"><SortAlfa className="me-1"/>Translate</button>}
      </div>
    </div>
  );
};

export default Presentational;
