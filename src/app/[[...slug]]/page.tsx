// Component: PageHome
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { VideoMetaData } from '../../../types';
import EmblaCarousel from '@/components/EmblaCarousel';
import { fetchVideoMetaData } from '@/util/video';

// Component
export default function PageHome() {
  const [videosMetaData, setVideosMetaData] = useState<VideoMetaData[]>([]);

  useEffect(() => {
    fetchVideoMetaData().then((allVideoMetaData) => {
      if (allVideoMetaData) setVideosMetaData(allVideoMetaData);
    });
  }, []);

  return (
    <div className="page--home flex flex-col justify-center items-stretch min-h-dvh bg-black text-white">
      <div className="page__container px-6 py-20 lg:px-8">
        <div className="page__row flex flex-col justify-center items-stretch max-w-screen-lg mx-auto gap-6">
          <div className="page__text-wrapper space-y-4">
            <div className="page__title font-bold text-2xl">
              <h1>Video carousel</h1>
            </div>

            <div className="page__copy space-y-1">
              <p>
                A coding challenge using specific libraries:{' '}
                <Link
                  className="font-semibold hover:underline"
                  href="https://www.embla-carousel.com/"
                  target="_blank"
                >
                  Embla Carousel
                </Link>
                ,{' '}
                <Link
                  className="font-semibold hover:underline"
                  href="https://www.npmjs.com/package/react-player"
                  target="_blank"
                >
                  React Player
                </Link>{' '}
                and the{' '}
                <Link
                  className="font-semibold hover:underline"
                  href="https://www.brightcove.com/"
                  target="_blank"
                >
                  Brightcove
                </Link>{' '}
                Playback API
              </p>
            </div>
          </div>

          <div className="page__carousel">
            <EmblaCarousel videos={videosMetaData} />
          </div>
        </div>
      </div>
    </div>
  );
}
