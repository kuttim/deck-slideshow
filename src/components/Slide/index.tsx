import '../../style/slide.scss';
import { slides } from '../../data';
import {
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
} from 'react-icons/bs';
type Data = {
  title: string;
  content: string;
};

type OnNextClick = () => void;
type OnBackClick = () => void;

export default function Slide({
  index,
  data,
  onNextClick,
  onBackClick,
}: {
  index: number;
  data: Data;
  onNextClick?: OnNextClick;
  onBackClick?: OnBackClick;
}) {
  return (
    <>
      <div className="container">
        <p className="slide-index">
          {index + 1} / {slides.length}
        </p>
        <div className="slide-title" key={data.title}>
          <h1>{data.title}</h1>
        </div>
        <div className="slide-content" key={data.content}>
          <p>{data.content}</p>
          <div className="slide-button-navigation">
            {/* only display the back button if the onBackClick method was provided as a prop */}
            {onBackClick && (
              <BsFillCaretLeftFill onClick={onBackClick} />
            )}

            {/* only display the next button if the onNextClick method was provided as a prop */}
            {onNextClick && (
              <BsFillCaretRightFill onClick={onNextClick} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
