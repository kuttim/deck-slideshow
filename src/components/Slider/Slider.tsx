import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  index?: number;
  style?: React.CSSProperties;
}>;

export default function Slider({ children, index, style }: Props) {
  const childAtIndex = React.Children.toArray(children)[index || 0];

  return (
    <>
      <div style={style}>{childAtIndex}</div>
    </>
  );
}
