import React from "react";
import  headerlogo  from "./../../Assets/headerlogo.png";
import "./Header.css";
import { useAtom } from "jotai";
import { currentPageNumber, userInput } from "./../../Variables/GlobalState";
import InputBox from "../../Items/Input/Input";

const PageHeader=()=>{
    const [input, setInput] = useAtom(userInput)
    const [, setCurrentPage] = useAtom(currentPageNumber)


    const onChangeHandler=(e: { target: { value: string | ((prev: string) => string); }; })=>{
        setInput(e.target.value)
        setCurrentPage(1);
    }

    return <div className="header-conatiner" data-test-id="headerid">
       <img src={headerlogo} alt="marvel-logo"/>
       <InputBox value={input} onChange={onChangeHandler}/>
    </div>
}

export default PageHeader;