import React from 'react';
import Slider from './components/Slider';
import Cover from './components/Cover';
import Slide from './components/Slide';
import { slides, cover } from './data';

import './style/cover.scss';
function App() {
  const [index, setIndex] = React.useState(0);
  const maxIndex = slides.length;

  const gotoNextSlide = () => {
    if (index === maxIndex) return;
    setIndex(index + 1);
  };

  const gotoLastSlide = () => {
    if (index === 0) return;
    setIndex(index - 1);
  };
  return (
    <div>
      <Slider index={index}>
        <Cover
          author={cover.author}
          title={cover.title}
          onNextClick={gotoNextSlide}
        />
        {slides.map((slide, i) => {
          if (i === maxIndex - 1)
            return (
              <Slide
                index={i}
                data={slide}
                onBackClick={gotoLastSlide}
              />
            );

          return (
            <Slide
              index={i}
              data={slide}
              onNextClick={gotoNextSlide}
              onBackClick={gotoLastSlide}
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default App;
