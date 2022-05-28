import Next from '../../assets/Chevron.svg';
import { Header } from '../Header';
import React from 'react';

import { cover } from '../../data';
interface ICoverHeroProps {
  title: string;
  author: string;
  onNextClick: (e: React.MouseEvent) => void;
}

export default function Cover(props: ICoverHeroProps) {
  return (
    <>
      <Header name={cover.company.name} url={cover.company.url} />
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">{props.title}</h1>
          <div className="hero-author">
            <p
              style={{
                color: '#0F161E80',
                fontSize: 28,
                fontWeight: 400,
              }}
            >
              {props.author}
            </p>
          </div>
        </div>
      </div>
      <div className="next-button ">
        <img
          src={Next}
          alt="Next slide"
          onClick={props.onNextClick}
        />
      </div>
    </>
  );
}
