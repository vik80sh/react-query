import React, { useEffect, useState } from "react";

import "./ComicCard.css";
import { useAtom } from "jotai";
import { currentPageNumber, selectedComicsList, totalPagesAvailable, userInput } from "../../Variables/GlobalState";
import { useQuery } from "react-query";
import { fetchMarvelComic } from "../../Service/apiService";
import Loading from "../../Items/Loading/Loading";
import { imageURL } from "../../Utils/HelperFunction";
import ComicItem from "../../Items/CardItem/CardItem";

const ComicCard=()=>{
    const [currentPage, setCurrentPage] = useAtom(currentPageNumber);
    const [selectedComics] = useAtom(selectedComicsList);
    const [totalPage,setTotalPages] = useAtom<number>(totalPagesAvailable)
    const [searchInput] = useAtom(userInput)
    const [debouncedSearchInput, setDebouncedSearchInput] = useState<string | number>("");
    const [series, setSeries] = useState<string|number>("");

    const { isLoading, error, data } = useQuery({
        queryKey: ['marvelComics', { offset: currentPage, titleStartWith: debouncedSearchInput, series}],
        queryFn: fetchMarvelComic,
        cacheTime: 1 * 24 * 60 * 60 * 1000
    });

    useEffect(()=>{
        let pages = Math.ceil(Number(data?.data?.total/21));
        if(pages!==totalPage) setTotalPages(pages)

    },[data])

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedSearchInput(searchInput);
        }, 500); 

        return () => {
            clearTimeout(timerId);
        };
    }, [searchInput]);

    useEffect(() => {
        if(selectedComics?.length){
            let ids = selectedComics.map(e=>  e.id);
            setSeries(ids.join(','))
        }
        else setSeries("");
        setCurrentPage(1);
    }, [selectedComics]);
    
    if (isLoading) return <div><Loading/></div>;
    if (error) return <div>Something Went Wrong</div>;

    return <div className="comic-wrapper">
        <div className="comic-list">
            {data.data?.results.length ?  data.data?.results.map((comic: { thumbnail: { path: string; extension: string; }; title: any; id: any; })=>{
                const  image = imageURL(comic)  
                const  id = "#" + comic.id;
                return <div className="comic-card" key={id}> 
                          <ComicItem image={image} title={comic?.title} id={id} /> 
                        </div>
            }) : <div className="not-found">No Data Found</div>}
        </div>
    </div>
   
}

export default ComicCard;