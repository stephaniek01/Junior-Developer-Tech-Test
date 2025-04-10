// Utils for videos

import { UAParser } from 'ua-parser-js';
import { VideoSource } from '../../types';
import { getBrightcoveIds, getVideoMetaDataFromID } from './api/videoService';

/**
 * Get the most optimised video source based on the user's browser/OS
 */
export const getVideoSource = (sources: VideoSource[]) => {
  // parse the user agent
  const parser = new UAParser();
  const result = parser.getResult();
  let currentSource: VideoSource | undefined;

  if (result.os.name === 'iOS' || result.browser.name === 'Safari') {
    // IOS and safari prefers mpegURL
    currentSource = sources.find((s) => s.type?.includes('mpegURL')  && s.src.includes('https'));
  } else {
    // modern browsers prefer DASH
    currentSource = sources.find((s) => s.type?.includes('dash') && s.src.includes('https'));
  }

  // fallback to mp4 if none of the other source types are present
  if (!currentSource)
    currentSource = sources.find((s) => s.container?.includes('MP4') && s.src.includes('https'));

  return currentSource;
};

export const fetchVideoMetaData = async () => {
  const brightcoveIds = await getBrightcoveIds();

  const promises = brightcoveIds?.map((brightcoveId) =>
    getVideoMetaDataFromID(brightcoveId.brightcoveId)
  );

  const allVideoMetaData = (await Promise.all(promises??[])).filter(videoData => typeof videoData != 'undefined');

  return allVideoMetaData;
};
