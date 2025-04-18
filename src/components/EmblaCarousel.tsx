'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import EmblaNavigation from './EmblaNavigation';
import EmblaSlide from './EmblaSlide';
import { VideoMetaData } from '../../types';
import { AUTO_SCROLL_DURATION } from '@/constants';
import ReactPlayerComponent from 'react-player';

type Props = {
  videos: VideoMetaData[];
};

const EmblaCarousel = ({ videos }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const [currentDisplayedSlide, setCurrentDisplayedSlide] = useState(0);
  const autoScrollTimer = useRef<ReturnType<typeof setInterval>>(null);
  const currentPlayerRef = useRef<ReactPlayerComponent>(null);

  // ********************************************************
  // Carousel handlers
  // ********************************************************
  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      resetCurrentVideo();
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      // set the prev slides time to 0 and pause it
      resetCurrentVideo();
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  const startAutoScroll = useCallback(() => {
    if (autoScrollTimer.current) clearInterval(autoScrollTimer.current);

    autoScrollTimer.current = setInterval(() => {
      scrollNext();
    }, AUTO_SCROLL_DURATION);
  }, [scrollNext]);

  // ********************************************************
  // React Player handlers
  // ********************************************************
  const onEnded = useCallback(() => {
    scrollNext();
  }, [scrollNext]);

  const handlePlay = () => {
    if (autoScrollTimer.current) {
      clearInterval(autoScrollTimer.current);
      autoScrollTimer.current = null;
    }
  };

  const handlePause = () => {
    startAutoScroll();
  };

  const resetCurrentVideo = () => {
    if (currentPlayerRef && currentPlayerRef.current) {
      const internalPlayer = currentPlayerRef.current.getInternalPlayer?.();

      if (internalPlayer) {
        internalPlayer.pause(); // Pause the video
        internalPlayer.currentTime = 0; // Reset video time to 0
      }
    }
  };

  // on component mount
  useEffect(() => {
    startAutoScroll();

    return () => {
      if (autoScrollTimer.current) clearInterval(autoScrollTimer.current);
    };
  }, [startAutoScroll]);

  // on slide change
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      resetCurrentVideo();
      setCurrentDisplayedSlide(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, startAutoScroll]);

  // add keyboard acessibility to the carosel
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        event.preventDefault(); // Prevent scrolling
        const player = currentPlayerRef.current?.getInternalPlayer?.();

        // play/pause functionality
        if (player) {
          if (player.paused) {
            player.play();
          } else {
            player.pause();
          }
        }
      }

      // scroll left
      if (event.code === 'ArrowRight') {
        scrollNext();
      }

      // scroll right
      if (event.code === 'ArrowLeft') {
        scrollPrev();
      }
    };

    // add the event listener
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [scrollNext, scrollPrev]);

  return (
    <div className="embla">
      <div className="embla__viewport overflow-hidden relative" ref={emblaRef}>
        <div className="embla__container flex">
          {videos.map((videoData, index) => (
            <EmblaSlide
              key={videoData.id}
              isActive={currentDisplayedSlide === index}
              playerRef={
                currentDisplayedSlide === index ? currentPlayerRef : null
              }
              videoMetaData={videoData}
              onEnded={onEnded}
              onPlay={handlePlay}
              onPause={handlePause}
            />
          ))}
        </div>
        {/* Navigation Buttons */}
        <EmblaNavigation scrollPrev={scrollPrev} scrollNext={scrollNext} />
      </div>
    </div>
  );
};

export default EmblaCarousel;
