import React, {FC, useState} from 'react';
import './App.css';
import {useToggle} from './components/hook';
import {usePrevious} from "./components/hook2";

const App:FC = () => {


  const[num,setNum] = useState(0);
  let [currentValue,prevValue] = usePrevious<number>(num);

  let{changeHandler,value}= useToggle(false);
  return (
      <>
        <h3>{value.toString()}</h3>
        <button onClick={() => {
          console.log(value);
          changeHandler();
        }}>change
        </button>

        <hr/>
        <h4>Current value:{currentValue}</h4>
        <h4>Previous value:{prevValue}</h4>
        <button onClick={() => {
          setNum(currentValue += 5)
        }}>plus 10
        </button>

      </>
  );
}

export default App;