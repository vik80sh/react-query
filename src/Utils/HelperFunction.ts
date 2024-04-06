export const crouselShows=(index:number, type:string, dataLenght:number)=>{
    let lastIndex = index;
    if (type === "PREV") { 
        lastIndex = index - 10;
        index = index - 20;
        if (index < 0) {
            index = dataLenght - 10; 
            lastIndex = dataLenght;
            if (index < 0) {
                index = 0; 
            }
        }
    }
    if (type === "NEXT") { 
        lastIndex = index +10;
        if (lastIndex > dataLenght) {
            index = 0;
            lastIndex =10;
        }
    }
    return {startIndex: index, lastIndex}
}

export const imageURL = (item: { thumbnail: { path: string; extension: string; }; })=>{
    return item?.thumbnail?.path + "."+  item?.thumbnail?.extension
}