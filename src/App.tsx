import React, { Fragment } from 'react';
import Slider from './components/Slider';
import Cover from './components/Cover';
import { Header } from './components/Header';

import './style/header.scss';
function App() {
  const [index, setIndex] = React.useState(0);
  return (
    <div>
      <Slider index={index}>
        <Cover
          author="author"
          title="title"
          onNextClick={(e) => setIndex(index + 1)}
        />
        <div>Index 1</div>
        <div>Index 2</div>
        <div>Index 3</div>
        <div>Index 4</div>
        <div>Index 5</div>
      </Slider>
    </div>
  );
}

export default App;
