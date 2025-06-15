import { useState } from "react";
import LoaderContext from "../contexts/LoaderContext";

const LoaderProvider = ({children}) => {
   const [isVisible, setIsVisible] = useState(false);

   const showLoader = () => {
      setIsVisible(true);
   }

   const hideLoader = () => {
      setIsVisible(false);
   }

  return <LoaderContext.Provider value={{isVisible, showLoader, hideLoader}}>{children}</LoaderContext.Provider>;
};

export default LoaderProvider;