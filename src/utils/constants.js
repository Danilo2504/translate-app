export const TYPES = {
   INPUT: 'input',
   OUTPUT: 'output'
}
export const LANGUAGES = {
   en: 'English',
   es: 'Spanish',
   fr: 'French',
   it: 'Italian',
   de: 'German',
   pt: 'Portuguese',
   ru: 'Russian',
};
export const MAX_CHARS = 500;
export const INITIAL_VALUES = {
   input: '',
   output: ''
};
export const INITIAL_LANGUAGES = {
   input: 'en',
   output: 'fr'
};
export const LANGUAGES_LIST = Object.entries(LANGUAGES).map(([key, value]) => ({ key, value }));
export const BASE_URL = 'https://api.mymemory.translated.net';