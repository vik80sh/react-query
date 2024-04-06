import PageHeader from "../Components/Header/Header";
import MultiSelectCarousel from "../Components/MultiSelectCarousel/MultiSelectCarousel";
import './Home.css'
import ComicCard from "../Components/ComicCard/ComicCard";
import Pagination from "../Components/Pagination/Pagination";
import { toggleButton } from "../Variables/GlobalState";
import { useAtom } from "jotai";
import ToggleButton from "../Items/ToggleButton/ToggleButton";

const HomePage = () => {
    const [toggle] = useAtom(toggleButton)
    return (
        <div className={toggle? "home-container" :""}>
            <div className={toggle? "home-wrapper" : ""}>
                <PageHeader />
                <MultiSelectCarousel/>
                <ToggleButton/>
                <ComicCard/>
                <Pagination/>
            </div>   
        </div>
    );
};

export default HomePage;
