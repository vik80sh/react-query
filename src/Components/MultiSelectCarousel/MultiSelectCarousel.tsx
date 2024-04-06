// MultiSelectCarousel.tsx
import React, { useEffect, useState } from 'react';
import './MultiSelectCarousel.css';
import { useQuery } from 'react-query';
import { fetchMarvelCharecter } from '../../Service/apiService';
import { useAtom } from 'jotai';
import { selectedComicsList, toggleButton, userInput } from '../../Variables/GlobalState';
import { crouselShows, imageURL } from '../../Utils/HelperFunction';
import CarouselItem from '../../Items/CarouselItem/CarouselItem';
import Loading from '../../Items/Loading/Loading';

const MultiSelectCarousel = () => {
  const [selectedComics, setSelectedComics] = useAtom(selectedComicsList);
  const [toggle] = useAtom(toggleButton)
  const [searchInput] = useAtom(userInput)

  const [carouselIndex, setCarouselIndex] = useState<number>(0)
  const [carousel, setCarousel] = useState([])

  const { isLoading, error, data } = useQuery({queryKey: ['marvelComics', ],queryFn: fetchMarvelCharecter, cacheTime: 5 * 24 * 60 * 60 * 1000});

  useEffect(()=>{
    setCarouselData(carouselIndex,"NEXT")
  },[data])

  const setCarouselData = (index: number, type: string) => {
    let dataLength = data?.data?.results?.length || 0;
    if (!dataLength) {
        setCarousel([]);
        return; 
    }
    const {startIndex, lastIndex} = crouselShows(index, type, dataLength)
    setCarousel(data?.data?.results.slice(startIndex, lastIndex) || []);
    setCarouselIndex(lastIndex); 
  }

  const handleDivClick = (item: {title: string; id: number}) => {
    const isSelected = isElementAvailable(item);
    if (isSelected) {
      setSelectedComics(selectedComics.filter((e: { id: number; }) => e.id !== item.id));
    } else {
      if(selectedComics.length<10){
        const selectedData = {id: item.id, title:item.title}
        setSelectedComics([...selectedComics, selectedData]);
      }else{
        alert("You can not add more than 10 ids")
      }
    }
  };

  const isElementAvailable=(item: { id: number; })=>{
    return selectedComics.some((element: { id: number; })=>element.id === item.id)
  }

  const selectedComicsData=()=>{
    let stringData = selectedComics.map(e=>e.title).join(",");
    return {
      title : stringData,
      showData: stringData.length > 150 ? stringData.substring(0, 145) + "..." : stringData
    }
  }
  if(isLoading) return <div><Loading/></div>
  if(error) return <div>Something went wrong</div>
  return (
    <div className={searchInput? 'carousel-disable':""}>
      <div className='carousel-wrapper'>
        <div className="carousel-container">
          <div className="prev-btn" onClick={()=>setCarouselData(carouselIndex, "PREV")}>{'<'}</div>
          <div className="carousel"> 
            {carousel?.map((element,key)=> {
                let image = imageURL(element)
                return <CarouselItem key={key} item={element} image={image} isElementAvailable={isElementAvailable} handleDivClick={handleDivClick}/>
            })}
          </div>
          <div className="next-btn" onClick={()=>setCarouselData(carouselIndex, "NEXT")}>{'>'}</div>
        </div>
      </div>
      <div className='selected-comics-banner'>
        <div className={toggle ? "selected-comics" :"" }title={selectedComicsData().title}> 
           {selectedComicsData().showData} 
        </div> 
        {selectedComics?.length>0 && <button className='selected-comics-clear-btn' onClick={()=>setSelectedComics([])}> Clear Filter : All- {selectedComics.length}</button>}
      </div>
    </div>
  );
};

export default MultiSelectCarousel;
