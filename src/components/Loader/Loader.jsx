import { useContext } from "react";
import Presentational from "./Presentational";
import LoaderContext from "../../contexts/LoaderContext";

const Loader = () => {
   const {isVisible} = useContext(LoaderContext);

   return (
      <>
         {isVisible ? <Presentational isVisible={isVisible} /> : null}
      </>
   );
};

export default Loader;
