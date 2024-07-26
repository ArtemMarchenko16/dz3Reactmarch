import {useState} from "react";

export const useToggle = <T> (inputValue:boolean)=>{

    const [value , setValue] = useState<boolean>(inputValue);
    const changeHandler = () => setValue((prevState) => !prevState);

    return {changeHandler,value};

}
