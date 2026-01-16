const SEARCH_KEY = 'SEARCH_TEXT';

export const saveSearch = (text) => {
  localStorage.setItem(SEARCH_KEY, text);
};

export const getSearch = () => {
  return localStorage.getItem(SEARCH_KEY);
};
