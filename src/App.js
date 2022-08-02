import React, { useState, useCallback, useMemo } from 'react';
import './App.css';
import { HelloButton } from './components/button';
import RangeSlider from './components/range-slider';

function App() {
  const [parentVal, setParentVal] = useState(10);

      const sliderValueChanged = useCallback(val => {
        console.log("NEW VALUE", val);
        setParentVal(val);
      });

      const sliderProps = useMemo(
        () => ({
          min: 0,
          max: 100,
          value: parentVal,
          step: 2,
          label: "This is a reusable slider",
          onChange: e => sliderValueChanged(e)
        }),
        [parentVal]
      );

  return (
    <div className="App">
      <HelloButton name={"Charlotte"}></HelloButton>
      <h1>PARENT VALUE: {parentVal}</h1>
      <RangeSlider {...sliderProps} classes="additional-css-classes" />
    </div>
  );
}

export default App;
