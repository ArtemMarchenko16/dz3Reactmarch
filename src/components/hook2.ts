import {useRef} from "react";


export const usePrevious =<T, >(value:number):number[]=>{
    let currentValue = useRef<number>(value);
    let prevValue = useRef(0);

    if(value !== currentValue.current){
        prevValue.current = currentValue.current;
        currentValue.current = value;
    }

    return[currentValue.current, prevValue.current];

}