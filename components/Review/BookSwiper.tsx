import React, { useRef } from 'react';
import styled from 'styled-components';
import ReviewItem from './ReviewItem';
import { getReviewItems } from 'utils/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface BookSwiperProps {
  index: number;
  setIndex: (index: number) => void;
  isPc: boolean;
  isTablet: boolean;
}

const BookSwiper: React.FC<BookSwiperProps> = ({
  index,
  setIndex,
  isPc,
  isTablet,
}) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const reviews = getReviewItems(isPc, isTablet);

  const onChangeIndex = (Swiper: any) => {
    if (Swiper.activeIndex === 6) setIndex(1);
    else if (Swiper.activeIndex === 0) setIndex(5);
    else setIndex(Swiper.activeIndex);
  };

  return (
    <SwiperWrap>
      <SwiperImage>
        <UnderImageWrap index={index}>
          <UnderImageInner>
            <UnderImage
              src="assets/yellow-logo-low-opacity.png"
              alt="yellow-logo"
            />
          </UnderImageInner>
        </UnderImageWrap>
        <KidsImageWrap>
          <KidsImage src={`assets/kids-circle/kids${index}.png`} />
        </KidsImageWrap>
      </SwiperImage>

      <SwiperPrevBtn className="swiper-prev-btn" ref={prevRef}>
        <Icon src="assets/prev.png" alt="prev" />
      </SwiperPrevBtn>

      <Swiper
        onActiveIndexChange={onChangeIndex}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{ delay: 3400, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay, Navigation]}
        className="review-swiper"
        navigation={{ nextEl: nextRef.current, prevEl: prevRef.current }}
        autoHeight={true}
      >
        {reviews.map((review, index) => {
          return (
            <SwiperSlide key={index}>
              <ReviewItem userId={review.name} content={review.content} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <SwiperNextBtn className="swiper-next-btn" ref={nextRef}>
        <Icon src="assets/next.png" alt="next" />
      </SwiperNextBtn>
    </SwiperWrap>
  );
};

const SwiperWrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding: 0 20px;
  width: 100%;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 30px;
  }
  @media ${({ theme }) => theme.device.pc} {
    max-width: 1200px;
  }
`;

const SwiperImage = styled.div`
  position: absolute;
  top: 100px;
  width: 73px;
  height: 73px;
  border-radius: 50%;
  padding: 7.2px;
  background-color: rgb(255, 177, 0);

  @media ${({ theme }) => theme.device.tablet} {
    top: 150px;
    width: 120px;
    height: 120px;
    padding: 12px;
  }
`;
const UnderImageWrap = styled.div<{ index: number }>`
  transition: all 1s ease 0s;
  position: absolute;
  padding: 8px;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  transform: ${(props) => `rotate(${(props.index - 1) * 45}deg)`};
  transform-origin: right center;
  margin: -16px 0px 0px -84px;

  @media ${({ theme }) => theme.device.tablet} {
    margin: -19px 0px 0px -138px;
  }
`;

const UnderImageInner = styled.div`
  width: 68px;
  height: 68px;
  z-index: 0;

  @media ${({ theme }) => theme.device.tablet} {
    width: 122px;
    height: 122px;
  }
`;
const UnderImage = styled.img`
  width: 112px;
  height: 72px;
  z-index: 0;

  @media ${({ theme }) => theme.device.tablet} {
    width: 190px;
    height: 122px;
  }
`;

const KidsImageWrap = styled.div`
  z-index: 4;
`;
const KidsImage = styled.img`
  width: 100%;
  height: 100%;
`;

const SwiperPrevBtn = styled.button`
  position: absolute;
  z-index: 4;
  cursor: pointer;
  top: 113px;
  left: 20px;
  background-color: transparent;
  border: none;

  @media ${({ theme }) => theme.device.tablet} {
    top: 182px;
    left: 30px;
  }

  @media ${({ theme }) => theme.device.pc} {
    top: 306px;
    left: 124px;
  }
`;
const SwiperNextBtn = styled.button`
  position: absolute;
  z-index: 4;
  cursor: pointer;
  top: 112px;
  right: 20px;
  background-color: transparent;
  border: none;

  @media ${({ theme }) => theme.device.tablet} {
    top: 182px;
    right: 30px;
  }

  @media ${({ theme }) => theme.device.pc} {
    top: 306px;
    right: 124px;
  }
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

export default BookSwiper;
