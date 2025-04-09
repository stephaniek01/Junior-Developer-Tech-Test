import dynamic from 'next/dynamic';
import { VideoMetaData } from '../../types';
import { getVideoSource } from '@/util/video';
import ReactPlayerComponent from 'react-player';
import React from 'react';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

type Props = {
  videoMetaData: VideoMetaData;
  onPlay: () => void;
  onPause: () => void;
  onEnded: () => void;
  controls?: boolean;
  isActive: boolean;
  playerRef: React.RefObject<ReactPlayerComponent | null> | null;
};

const EmblaSlide = ({
  videoMetaData,
  playerRef,
  isActive,
  ...reactPlayerProps
}: Props) => {
  const videoSource = getVideoSource(videoMetaData.sources);

  if (!videoSource) return null;

  return (
    <div className="embla__slide basis-full sm:basis-2/3 shrink-0 ">
      <ReactPlayer
        ref={playerRef}
        controls={isActive}
        width={'100%'}
        url={videoSource.src}
        onPlay={reactPlayerProps.onPlay}
        onPause={reactPlayerProps.onPause}
        onEnded={reactPlayerProps.onEnded}
      />
    </div>
  );
};

export default React.memo(EmblaSlide);
