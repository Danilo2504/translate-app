import { useState } from "react";
import SortAlfa from '../assets/images/sort_alfa.svg?react';
import SoundMax from '../assets/images/sound_max_fill.svg?react';
import CopyClipboard from '../assets/images/copy_clipboard.svg?react';

const TranslationCard = ({type = 'input'}) => {
  const maxChars = 500;
  const [text, setText] = useState('');

  const cardColor = type === 'input' ? 'bg-[var(--color-semi-dark)]' : 'bg-[var(--color-semi-black)]';

  const handleChange = (event) => {
    const input = event.target.value;
    if (input.length <= maxChars) {
      setText(input);
    }
  }

  return (
    <div className={"flex flex-col w-full " + cardColor + " rounded-2xl p-6 border border-[var(--color-slate)]"}>
      <ul className="flex items-center space-x-3 list-none border-b border-[var(--color-slate)] py-3">
        <li><a href="#">Detect Language</a></li>
        <li><a href="#">English</a></li>
        <li><a href="#">French</a></li>
        <li><a href="#">Spanish</a></li>
      </ul>
      <div className="flex flex-col w-full py-3 relative">
        <textarea value={text} onChange={(event) => handleChange(event)} className="resize-none focus:outline-0 focus:border-0" placeholder="Write something" name="" id="" rows={8}></textarea>
        <div className="position absolute bottom-2.5 end-0"><span className="text-light-gray">{text.length}/{maxChars}</span></div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <button type="button" className="secondary"><SoundMax/></button>
          <button type="button" className="secondary"><CopyClipboard/></button>
        </div>
        <button type="button" className="flex items-center"><SortAlfa className="me-1"/>Translate</button>
      </div>
    </div>
  );
};

export default TranslationCard;
