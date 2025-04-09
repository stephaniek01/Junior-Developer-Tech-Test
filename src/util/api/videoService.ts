import { brightcoveIdResponse, VideoMetaData } from '../../../types';

// get base url according to environment
const isDev = process.env.NODE_ENV === 'development';
const fetchUrl = isDev
  ? process.env.NEXT_PUBLIC_SITE_DEV_URL
  : process.env.NEXT_PUBLIC_SITE_PROD_URL;
export const getBrightcoveIds = async (): Promise<
  brightcoveIdResponse[] | undefined
> => {
  try {
    const response = await fetch(`${fetchUrl}/videos`);
    const videos = await response.json();

    return videos;
  } catch (error) {
    console.error('There was an error fetching the bright cove IDs', error);
  }
};

export const getVideoMetaDataFromID = async (
  videoId: string
): Promise<VideoMetaData | undefined> => {
  try {
    const response = await fetch(`${fetchUrl}/video-metadata/${videoId}`);
    const videoMetaData = await response.json();

    return videoMetaData;
  } catch (error) {
    console.error('There was an error fetching the bright cove IDs', error);
  }
};
