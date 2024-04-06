const apiKey = "&ts=1&apikey=7086841978afa18aec1eb0c889c1e2fc&hash=4cc496e6b08c833bafd82d77ffa8a831"; // exposing key, because there is no backend involved 
const baseURL = `https://gateway.marvel.com/v1/public/`;
const comicBaseURL = `${baseURL}comics`
export const comicURL = `${comicBaseURL}?[TITLE][SERIES]limit=21&[OFFSET]${apiKey}`;

const charactersBaseURL = `${baseURL}series`;
export const charactersURL = `${charactersBaseURL}?limit=100&offset=1${apiKey}`;

export const totalPaginationButton = 15;