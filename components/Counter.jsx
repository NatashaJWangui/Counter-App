'use client'
import React, { useState } from 'react';
import DebouncedSearch from './DebouncedSearch';

function Counter() {
    const [value, setValue]=useState(0);
    // set history of the value
    const [history, setHistory]=useState([]);

    const increment =() => {
        setValue(currentValue => {
            const storeValue = currentValue + 1;
            setHistory(prevHistory => [
                ...prevHistory, storeValue]);
                return storeValue;
        });
    };
    const reset =() => {
        setValue(0);
    }
    const decrement =() => {
        setValue(currentValue => {
            const storeValue = currentValue - 1;
            setHistory(prevHistory => [
                ...prevHistory, storeValue]);
                return storeValue;
        });
    };
    

  return (
    <div className='container'>
      <h1 className='text-center lg:text-[60px] sm:text-[60px] xs:text-[50px] text-[40px]'>Counter App</h1>
      <h1 className='text-center lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px]'>{value}</h1>
      <div className='flex justify-center space-x-4 mt-4'>
        <button className='bg-green-500 hover:bg-green-950 rounded-lg font-bold text-[20px] text-center' onClick={increment}>Increment (+)</button>
        <button className='bg-blue-600 rounded-lg font-bold text-[20px] text-center' onClick={reset}>Reset</button>
        <button className='bg-red-600 hover:bg-red-900 rounded-lg font-semibold text-[20px] text-center' onClick={decrement}>Decrement(-)</button>
      </div>
      <DebouncedSearch history={history}/>
    
    </div>
  )
}


export default Counter