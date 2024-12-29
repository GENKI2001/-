import React from 'react';
import { FlexCarousel } from 'reidea-common';

interface LoginButtonProps {
  autoScroll?: boolean;
  items: React.ReactNode[];
  slide_min_width: number;
  displayButton?: boolean;
  disableDrag?: boolean;
  loop?: boolean;
}

// 処理が複雑な外部コンポーネントのため、テストは書かない
export const Carousel: React.FC<LoginButtonProps> = (props) => {
  return (
    <FlexCarousel
      disableDrag={props.disableDrag ?? false}
      selectedDotButtonStyle={{
        backgroundImage:
          '-webkit-linear-gradient(left, #43CEA2 0%, #185A9D 100%)',
      }}
      displayButton={props.displayButton ?? false}
      loop={props.loop ?? true}
      isBanner={false}
      slide_min_width={props.slide_min_width}
      autoScroll={props.autoScroll ?? false}
      items={props.items}
    />
  );
};
