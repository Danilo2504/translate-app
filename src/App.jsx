import './App.css'
import Logo from './assets/images/logo.svg?react';
import Loader from './components/Loader';
import Spacer from './components/Spacer';
import Translator from './components/Translator';
import LoaderProvider from './providers/LoaderProvider';

function App() {
  return (
    <LoaderProvider>
      <div className='flex flex-col justify-start items-center max-w-6xl w-full text-white px-4 relative z-10 grow'>
        <Spacer height={70}/>
        <Logo className="max-w-full h-auto object-cover" width="200px"/>
        <Spacer height={60}/>
        <Translator/>
      </div>
      <div className='absolute bottom-0 left-0 right-0 top-0 z-0 bg-gradient-to-t from-black from-45%'></div>
      <Loader/>
    </LoaderProvider>
  )
}

export default App
