import { QueryFunction } from 'react-query';
import { charactersURL, comicURL } from "../constant";

const APICALL =async (url:string)=>{
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        throw error;
    }
}

export const fetchMarvelComic: QueryFunction<any, [string, { offset: number; titleStartWith: string | number, series: string | number }]> = async ({ queryKey }) => {
    const [, queryParams] = queryKey;
    const { offset, titleStartWith, series } = queryParams;
    let apiURL = comicURL.replace("[TITLE]", titleStartWith ? `titleStartsWith=${titleStartWith}&` : '');
    apiURL = apiURL.replace("[SERIES]", series ? `series=${series}&` : '');
    apiURL = apiURL.replace("[OFFSET]", offset >=0 ? `&offset=${offset}` : '');
    return APICALL(apiURL)
};

export const fetchMarvelCharecter: QueryFunction<any, [string]> = async () => {
    return APICALL(charactersURL)
};
