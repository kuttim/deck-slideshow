import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{}>;

export default function SliderController({ children }: Props) {
  const [index, setIndex] = React.useState(0);
  const slideCount = React.useRef<number>(0);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const { children } = child.props;
      slideCount.current = children.length;

      return React.cloneElement(child, {
        index,
        setIndex,
      });
    }

    return child;
  });

  return (
    <>
      {childrenWithProps}
      <button
        onClick={() => {
          const newIndex = index === 0 ? index : index - 1;
          setIndex(newIndex);
        }}
      >
        Back
      </button>
      <button
        onClick={() => {
          const newIndex =
            index === slideCount.current - 1 ? index : index + 1;
          setIndex(newIndex);
        }}
      >
        Next
      </button>
    </>
  );
}
