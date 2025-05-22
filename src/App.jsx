import './App.css'
import Logo from './assets/images/logo.svg?react';
import TranslationCard from './components/TranslationCard';
import Spacer from './components/Spacer';

function App() {

  return (
    <>
      <div className='flex flex-col justify-start items-center max-w-6xl h-screen w-full text-white px-4 relative z-10'>
        <Spacer height={70}/>
        <Logo className="max-w-full h-auto object-cover" width="200px"/>
        <Spacer height={60}/>
        <div className='flex space-x-4 items-center w-full'>
          <TranslationCard type="input"/>
          <TranslationCard type="output"/>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 right-0 top-0 z-0 bg-gradient-to-t from-black from-45%'></div>
    </>
  )
}

export default App
