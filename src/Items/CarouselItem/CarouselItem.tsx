
interface CarouselProps {
    item: object;
    image: string;
    isElementAvailable: (item: any) => boolean;
    handleDivClick: (item: any) => void;
}


const CarouselItem=(props:CarouselProps)=>{
    const {item, image,isElementAvailable,handleDivClick} = props
    return <div className="carousel" onClick={() => handleDivClick(item)}>
             <div className={`carousel-item ${isElementAvailable(item) ? 'selected' : ''}`} >
                <img src = {image}/>
             </div>
        </div>
}

export default CarouselItem


