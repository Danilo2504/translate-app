import axios from "./base";

export const getTranslation = async (text, langPair) => {
   const data = {
      q: text,
      langpair: langPair,
   };

   const response = await axios.get(`/get?q=${data.q}&langpair=${data.langpair}`);

   return response.data;
}