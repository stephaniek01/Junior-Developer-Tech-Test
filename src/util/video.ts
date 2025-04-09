// Utils for videos

import { UAParser } from 'ua-parser-js';
import { VideoSource } from '../../types';
import { getBrightcoveIds } from './api/videoService';

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
    currentSource = sources.find((s) => s.type?.includes('mpegURL'));
  } else {
    // modern browsers prefer DASH
    currentSource = sources.find((s) => s.type?.includes('dash'));
  }

  // fallback to mp4 if none of the other source types are present
  if (!currentSource)
    currentSource = sources.find((s) => s.type?.includes('mp4'));

  return currentSource;
};

export const fetchVideoMetaData = async () => {
  const brightcoveIds = await getBrightcoveIds();

  // const promises = brightcoveIds?.map((brightcoveId) =>
  //   getVideoMetaDataFromID(brightcoveId.brightcoveId)
  // );
  // console.log(promises);

  // const allVideoMetaData = await Promise.all(promises);

  const allVideoMetaData = [
    {
      poster:
        'https://cf-images.eu-west-1.prod.boltdns.net/v1/jit/6057949401001/d17e6d13-9166-49a2-941c-2c75f4b5ddcb/main/640x360/12s80ms/match/image.jpg',
      thumbnail:
        'https://cf-images.eu-west-1.prod.boltdns.net/v1/jit/6057949401001/d17e6d13-9166-49a2-941c-2c75f4b5ddcb/main/160x90/12s80ms/match/image.jpg',
      poster_sources: [
        {
          src: 'https://cf-images.eu-west-1.prod.boltdns.net/v1/jit/6057949401001/d17e6d13-9166-49a2-941c-2c75f4b5ddcb/main/640x360/12s80ms/match/image.jpg',
        },
      ],
      thumbnail_sources: [
        {
          src: 'https://cf-images.eu-west-1.prod.boltdns.net/v1/jit/6057949401001/d17e6d13-9166-49a2-941c-2c75f4b5ddcb/main/160x90/12s80ms/match/image.jpg',
        },
      ],
      description: '',
      tags: [],
      cue_points: [],
      custom_fields: {},
      account_id: '6057949401001',
      sources: [
        {
          codecs: 'avc1',
          ext_x_version: '4',
          src: 'http://manifest.prod.boltdns.net/manifest/v1/hls/v4/clear/6057949401001/d17e6d13-9166-49a2-941c-2c75f4b5ddcb/10s/master.m3u8?fastly_token=NjgxZDIyOTBfNDJhNDg2MmY2M2QxZDM2Y2JhZjMyZDBmYjUwOGZhY2JmMWM4NTBiNmJjYmRlNmYwMjBhN2FlMzc5MjczMTU1NQ%3D%3D',
          type: 'application/x-mpegURL',
        },
        {
          codecs: 'avc1',
          ext_x_version: '4',
          src: 'https://manifest.prod.boltdns.net/manifest/v1/hls/v4/clear/6057949401001/d17e6d13-9166-49a2-941c-2c75f4b5ddcb/10s/master.m3u8?fastly_token=NjgxZDIyOTBfNDJhNDg2MmY2M2QxZDM2Y2JhZjMyZDBmYjUwOGZhY2JmMWM4NTBiNmJjYmRlNmYwMjBhN2FlMzc5MjczMTU1NQ%3D%3D',
          type: 'application/x-mpegURL',
        },
        {
          codecs: 'avc1',
          profiles: 'urn:mpeg:dash:profile:isoff-live:2011',
          src: 'http://manifest.prod.boltdns.net/manifest/v1/dash/live-baseurl/clear/6057949401001/d17e6d13-9166-49a2-941c-2c75f4b5ddcb/6s/manifest.mpd?fastly_token=NjgxZDIyOTBfYTBlYmJmZDcyZDkzYzEwMjU0YzNhMjhiOTllZmY3OTk3MmM1NDc3ZjBiMjZkZjgyYzIzZDAxZWU3MzM1ODNhMg%3D%3D',
          type: 'application/dash+xml',
        },
        {
          codecs: 'avc1',
          profiles: 'urn:mpeg:dash:profile:isoff-live:2011',
          src: 'https://manifest.prod.boltdns.net/manifest/v1/dash/live-baseurl/clear/6057949401001/d17e6d13-9166-49a2-941c-2c75f4b5ddcb/6s/manifest.mpd?fastly_token=NjgxZDIyOTBfYTBlYmJmZDcyZDkzYzEwMjU0YzNhMjhiOTllZmY3OTk3MmM1NDc3ZjBiMjZkZjgyYzIzZDAxZWU3MzM1ODNhMg%3D%3D',
          type: 'application/dash+xml',
        },
        {
          avg_bitrate: 2508000,
          codec: 'H264',
          container: 'MP4',
          duration: 24160,
          height: 720,
          size: 7582325,
          src: 'http://house-fastly-signed-eu-west-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/6057949401001/d17e6d13-9166-49a2-941c-2c75f4b5ddcb/7f0554f4-6dd0-44c8-ac4b-b219d8a7628d/main.mp4?fastly_token=NjgxZDIyOTBfNzAxNDQwMTBkODNkZjRlOTI0Njg5ZmYwNzc2NDJmYTg3MTkyYmM2NDQwNTBlOWExYTNkNTkyM2NkYjdmZTJiYl8vL2hvdXNlLWZhc3RseS1zaWduZWQtZXUtd2VzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvNjA1Nzk0OTQwMTAwMS9kMTdlNmQxMy05MTY2LTQ5YTItOTQxYy0yYzc1ZjRiNWRkY2IvN2YwNTU0ZjQtNmRkMC00NGM4LWFjNGItYjIxOWQ4YTc2MjhkL21haW4ubXA0',
          width: 1280,
        },
        {
          avg_bitrate: 2508000,
          codec: 'H264',
          container: 'MP4',
          duration: 24160,
          height: 720,
          size: 7582325,
          src: 'https://house-fastly-signed-eu-west-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/6057949401001/d17e6d13-9166-49a2-941c-2c75f4b5ddcb/7f0554f4-6dd0-44c8-ac4b-b219d8a7628d/main.mp4?fastly_token=NjgxZDIyOTBfNzAxNDQwMTBkODNkZjRlOTI0Njg5ZmYwNzc2NDJmYTg3MTkyYmM2NDQwNTBlOWExYTNkNTkyM2NkYjdmZTJiYl8vL2hvdXNlLWZhc3RseS1zaWduZWQtZXUtd2VzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvNjA1Nzk0OTQwMTAwMS9kMTdlNmQxMy05MTY2LTQ5YTItOTQxYy0yYzc1ZjRiNWRkY2IvN2YwNTU0ZjQtNmRkMC00NGM4LWFjNGItYjIxOWQ4YTc2MjhkL21haW4ubXA0',
          width: 1280,
        },
      ],
      name: 'Placeholder (Doggo)',
      reference_id: '',
      long_description: '',
      duration: 24160,
      economics: 'AD_SUPPORTED',
      text_tracks: [
        {
          id: null,
          account_id: '6057949401001',
          src: 'http://manifest.prod.boltdns.net/thumbnail/v1/6057949401001/d17e6d13-9166-49a2-941c-2c75f4b5ddcb/bf3f229f-20cd-49f7-896a-6dcbf56520fe/thumbnail.webvtt?fastly_token=NjgxZDIyOTBfMjIzNzc2Njg5MjBlZTViNzE4YjQ0NDRhMjhhZjcyM2UyOTE0MDFmNTgzMzYxMTdiNDcwZDYyNDIwNDA1MTgyNg%3D%3D',
          srclang: null,
          label: 'thumbnails',
          kind: 'metadata',
          mime_type: 'text/webvtt',
          asset_id: null,
          sources: null,
          default: false,
          width: 480,
          height: 270,
          bandwidth: 452,
        },
        {
          id: null,
          account_id: '6057949401001',
          src: 'https://manifest.prod.boltdns.net/thumbnail/v1/6057949401001/d17e6d13-9166-49a2-941c-2c75f4b5ddcb/bf3f229f-20cd-49f7-896a-6dcbf56520fe/thumbnail.webvtt?fastly_token=NjgxZDIyOTBfMjIzNzc2Njg5MjBlZTViNzE4YjQ0NDRhMjhhZjcyM2UyOTE0MDFmNTgzMzYxMTdiNDcwZDYyNDIwNDA1MTgyNg%3D%3D',
          srclang: null,
          label: 'thumbnails',
          kind: 'metadata',
          mime_type: 'text/webvtt',
          asset_id: null,
          sources: null,
          default: false,
          width: 480,
          height: 270,
          bandwidth: 452,
        },
      ],
      published_at: '2024-09-12T09:15:01.931Z',
      created_at: '2024-09-12T09:15:01.931Z',
      updated_at: '2025-04-02T11:12:01.421Z',
      offline_enabled: false,
      link: {
        text: '',
        url: '',
      },
      id: '6361867842112',
      ad_keys: null,
    },
    {
      poster:
        'https://cf-images.eu-west-1.prod.boltdns.net/v1/jit/6057949401001/f2b5a907-6b7d-45d7-9d17-b672ab6cf861/main/640x360/22s160ms/match/image.jpg',
      thumbnail:
        'https://cf-images.eu-west-1.prod.boltdns.net/v1/jit/6057949401001/f2b5a907-6b7d-45d7-9d17-b672ab6cf861/main/160x90/22s160ms/match/image.jpg',
      poster_sources: [
        {
          src: 'https://cf-images.eu-west-1.prod.boltdns.net/v1/jit/6057949401001/f2b5a907-6b7d-45d7-9d17-b672ab6cf861/main/640x360/22s160ms/match/image.jpg',
        },
      ],
      thumbnail_sources: [
        {
          src: 'https://cf-images.eu-west-1.prod.boltdns.net/v1/jit/6057949401001/f2b5a907-6b7d-45d7-9d17-b672ab6cf861/main/160x90/22s160ms/match/image.jpg',
        },
      ],
      description: '',
      tags: [],
      cue_points: [],
      custom_fields: {},
      account_id: '6057949401001',
      sources: [
        {
          codecs: 'avc1',
          ext_x_version: '4',
          src: 'http://manifest.prod.boltdns.net/manifest/v1/hls/v4/clear/6057949401001/f2b5a907-6b7d-45d7-9d17-b672ab6cf861/10s/master.m3u8?fastly_token=NjgxZDIyYThfYjhjMjM1ZDZmMjg5Yzc5MGViN2M5ZGUwMDgwNmE0OTZmZjA2M2MyM2E0ZTMxYTVkZjYzZDkyNGUzZmE0ZGQ0OA%3D%3D',
          type: 'application/x-mpegURL',
        },
        {
          codecs: 'avc1',
          ext_x_version: '4',
          src: 'https://manifest.prod.boltdns.net/manifest/v1/hls/v4/clear/6057949401001/f2b5a907-6b7d-45d7-9d17-b672ab6cf861/10s/master.m3u8?fastly_token=NjgxZDIyYThfYjhjMjM1ZDZmMjg5Yzc5MGViN2M5ZGUwMDgwNmE0OTZmZjA2M2MyM2E0ZTMxYTVkZjYzZDkyNGUzZmE0ZGQ0OA%3D%3D',
          type: 'application/x-mpegURL',
        },
        {
          codecs: 'avc1',
          profiles: 'urn:mpeg:dash:profile:isoff-live:2011',
          src: 'http://manifest.prod.boltdns.net/manifest/v1/dash/live-baseurl/clear/6057949401001/f2b5a907-6b7d-45d7-9d17-b672ab6cf861/6s/manifest.mpd?fastly_token=NjgxZDIyYThfMTJlMDY5MzgzM2IyOTQ0OTVhNjM2Mjg5ZTNhNTUzNzY3YTVlZjNiN2Q2ZjY0M2JiYTVhYTI2NzNhYzBjZjAzMQ%3D%3D',
          type: 'application/dash+xml',
        },
        {
          codecs: 'avc1',
          profiles: 'urn:mpeg:dash:profile:isoff-live:2011',
          src: 'https://manifest.prod.boltdns.net/manifest/v1/dash/live-baseurl/clear/6057949401001/f2b5a907-6b7d-45d7-9d17-b672ab6cf861/6s/manifest.mpd?fastly_token=NjgxZDIyYThfMTJlMDY5MzgzM2IyOTQ0OTVhNjM2Mjg5ZTNhNTUzNzY3YTVlZjNiN2Q2ZjY0M2JiYTVhYTI2NzNhYzBjZjAzMQ%3D%3D',
          type: 'application/dash+xml',
        },
        {
          avg_bitrate: 2500000,
          codec: 'H264',
          container: 'MP4',
          duration: 44320,
          height: 720,
          size: 13866747,
          src: 'http://house-fastly-signed-eu-west-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/6057949401001/f2b5a907-6b7d-45d7-9d17-b672ab6cf861/8366f57e-aaa7-4484-b929-6d4ad1bb2adf/main.mp4?fastly_token=NjgxZDIyYThfYmExOWM1M2NjZDhhNGY3MGY4ZWQxOTM1Y2U4NjNhMzhmNjQzY2RiZjE3MWZiZTBlZjBjYjVhMjc1MWQwMGE5ZV8vL2hvdXNlLWZhc3RseS1zaWduZWQtZXUtd2VzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvNjA1Nzk0OTQwMTAwMS9mMmI1YTkwNy02YjdkLTQ1ZDctOWQxNy1iNjcyYWI2Y2Y4NjEvODM2NmY1N2UtYWFhNy00NDg0LWI5MjktNmQ0YWQxYmIyYWRmL21haW4ubXA0',
          width: 1366,
        },
        {
          avg_bitrate: 2500000,
          codec: 'H264',
          container: 'MP4',
          duration: 44320,
          height: 720,
          size: 13866747,
          src: 'https://house-fastly-signed-eu-west-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/6057949401001/f2b5a907-6b7d-45d7-9d17-b672ab6cf861/8366f57e-aaa7-4484-b929-6d4ad1bb2adf/main.mp4?fastly_token=NjgxZDIyYThfYmExOWM1M2NjZDhhNGY3MGY4ZWQxOTM1Y2U4NjNhMzhmNjQzY2RiZjE3MWZiZTBlZjBjYjVhMjc1MWQwMGE5ZV8vL2hvdXNlLWZhc3RseS1zaWduZWQtZXUtd2VzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvNjA1Nzk0OTQwMTAwMS9mMmI1YTkwNy02YjdkLTQ1ZDctOWQxNy1iNjcyYWI2Y2Y4NjEvODM2NmY1N2UtYWFhNy00NDg0LWI5MjktNmQ0YWQxYmIyYWRmL21haW4ubXA0',
          width: 1366,
        },
      ],
      name: 'Placeholder (Bike)',
      reference_id: '',
      long_description: '',
      duration: 44320,
      economics: 'AD_SUPPORTED',
      text_tracks: [
        {
          id: null,
          account_id: '6057949401001',
          src: 'http://manifest.prod.boltdns.net/thumbnail/v1/6057949401001/f2b5a907-6b7d-45d7-9d17-b672ab6cf861/low-res/thumbnail.webvtt?fastly_token=NjgxZDIyYThfM2E4ZTFjMDc0NzRjZGFjMGNjMjZkNmRjNTljMDlhYTNmZjJhYmVhNzVmNzc3MGM3YTg2YmYwMzVmZGQxZjM2Yw%3D%3D',
          srclang: null,
          label: 'thumbnails',
          kind: 'metadata',
          mime_type: 'text/webvtt',
          asset_id: null,
          sources: null,
          default: false,
          width: 480,
          height: 270,
        },
        {
          id: null,
          account_id: '6057949401001',
          src: 'https://manifest.prod.boltdns.net/thumbnail/v1/6057949401001/f2b5a907-6b7d-45d7-9d17-b672ab6cf861/low-res/thumbnail.webvtt?fastly_token=NjgxZDIyYThfM2E4ZTFjMDc0NzRjZGFjMGNjMjZkNmRjNTljMDlhYTNmZjJhYmVhNzVmNzc3MGM3YTg2YmYwMzVmZGQxZjM2Yw%3D%3D',
          srclang: null,
          label: 'thumbnails',
          kind: 'metadata',
          mime_type: 'text/webvtt',
          asset_id: null,
          sources: null,
          default: false,
          width: 480,
          height: 270,
        },
      ],
      published_at: '2024-09-09T13:01:59.381Z',
      created_at: '2024-09-09T13:01:59.381Z',
      updated_at: '2025-04-02T11:12:20.324Z',
      offline_enabled: false,
      link: {
        text: '',
        url: '',
      },
      id: '6361737263112',
      ad_keys: null,
    },
    {
      poster:
        'https://cf-images.eu-west-1.prod.boltdns.net/v1/jit/6057949401001/0c26364c-55c6-4040-bc99-55dc698e505a/main/640x360/4s192ms/match/image.jpg',
      thumbnail:
        'https://cf-images.eu-west-1.prod.boltdns.net/v1/jit/6057949401001/0c26364c-55c6-4040-bc99-55dc698e505a/main/160x90/4s192ms/match/image.jpg',
      poster_sources: [
        {
          src: 'https://cf-images.eu-west-1.prod.boltdns.net/v1/jit/6057949401001/0c26364c-55c6-4040-bc99-55dc698e505a/main/640x360/4s192ms/match/image.jpg',
        },
      ],
      thumbnail_sources: [
        {
          src: 'https://cf-images.eu-west-1.prod.boltdns.net/v1/jit/6057949401001/0c26364c-55c6-4040-bc99-55dc698e505a/main/160x90/4s192ms/match/image.jpg',
        },
      ],
      description: '',
      tags: [],
      cue_points: [],
      custom_fields: {},
      account_id: '6057949401001',
      sources: [
        {
          codecs: 'avc1',
          ext_x_version: '4',
          src: 'http://manifest.prod.boltdns.net/manifest/v1/hls/v4/clear/6057949401001/0c26364c-55c6-4040-bc99-55dc698e505a/10s/master.m3u8?fastly_token=NjgxZDIyN2VfODNjM2NhYzRhYTA1NTk2YWMxYmNmNzJjNDUzMmVkZmVlYzlhMmE3MDVkZWZiN2YzYzZhZTI5YmM3MzQyMWIzMg%3D%3D',
          type: 'application/x-mpegURL',
        },
        {
          codecs: 'avc1',
          ext_x_version: '4',
          src: 'https://manifest.prod.boltdns.net/manifest/v1/hls/v4/clear/6057949401001/0c26364c-55c6-4040-bc99-55dc698e505a/10s/master.m3u8?fastly_token=NjgxZDIyN2VfODNjM2NhYzRhYTA1NTk2YWMxYmNmNzJjNDUzMmVkZmVlYzlhMmE3MDVkZWZiN2YzYzZhZTI5YmM3MzQyMWIzMg%3D%3D',
          type: 'application/x-mpegURL',
        },
        {
          codecs: 'avc1',
          profiles: 'urn:mpeg:dash:profile:isoff-live:2011',
          src: 'http://manifest.prod.boltdns.net/manifest/v1/dash/live-baseurl/clear/6057949401001/0c26364c-55c6-4040-bc99-55dc698e505a/6s/manifest.mpd?fastly_token=NjgxZDIyN2VfZDAwZjNjMzc4YWQwZjlkNjU0ZjZkYjMzNWVmZTY3OTlkNTMyMzI4MjM1NDQyZDRhN2VlYTk2ZDM3MzQ0MWI4Yg%3D%3D',
          type: 'application/dash+xml',
        },
        {
          codecs: 'avc1',
          profiles: 'urn:mpeg:dash:profile:isoff-live:2011',
          src: 'https://manifest.prod.boltdns.net/manifest/v1/dash/live-baseurl/clear/6057949401001/0c26364c-55c6-4040-bc99-55dc698e505a/6s/manifest.mpd?fastly_token=NjgxZDIyN2VfZDAwZjNjMzc4YWQwZjlkNjU0ZjZkYjMzNWVmZTY3OTlkNTMyMzI4MjM1NDQyZDRhN2VlYTk2ZDM3MzQ0MWI4Yg%3D%3D',
          type: 'application/dash+xml',
        },
        {
          avg_bitrate: 2491000,
          codec: 'H264',
          container: 'MP4',
          duration: 8384,
          height: 720,
          size: 2613610,
          src: 'http://house-fastly-signed-eu-west-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/6057949401001/0c26364c-55c6-4040-bc99-55dc698e505a/6e60dc3c-5941-4b34-a2cc-2aa22265dae6/main.mp4?fastly_token=NjgxZDIyN2VfYTg4NDhhY2ExOTgzN2Q4M2RmYzAxY2VhMDVhYzJlNjRiZjQyODZlN2NlYTQwM2NjM2M0YmZiNjVjMzFkOWRiMl8vL2hvdXNlLWZhc3RseS1zaWduZWQtZXUtd2VzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvNjA1Nzk0OTQwMTAwMS8wYzI2MzY0Yy01NWM2LTQwNDAtYmM5OS01NWRjNjk4ZTUwNWEvNmU2MGRjM2MtNTk0MS00YjM0LWEyY2MtMmFhMjIyNjVkYWU2L21haW4ubXA0',
          width: 1280,
        },
        {
          avg_bitrate: 2491000,
          codec: 'H264',
          container: 'MP4',
          duration: 8384,
          height: 720,
          size: 2613610,
          src: 'https://house-fastly-signed-eu-west-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/6057949401001/0c26364c-55c6-4040-bc99-55dc698e505a/6e60dc3c-5941-4b34-a2cc-2aa22265dae6/main.mp4?fastly_token=NjgxZDIyN2VfYTg4NDhhY2ExOTgzN2Q4M2RmYzAxY2VhMDVhYzJlNjRiZjQyODZlN2NlYTQwM2NjM2M0YmZiNjVjMzFkOWRiMl8vL2hvdXNlLWZhc3RseS1zaWduZWQtZXUtd2VzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvNjA1Nzk0OTQwMTAwMS8wYzI2MzY0Yy01NWM2LTQwNDAtYmM5OS01NWRjNjk4ZTUwNWEvNmU2MGRjM2MtNTk0MS00YjM0LWEyY2MtMmFhMjIyNjVkYWU2L21haW4ubXA0',
          width: 1280,
        },
      ],
      name: 'Placeholder (Pool)',
      reference_id: '',
      long_description: '',
      duration: 8384,
      economics: 'AD_SUPPORTED',
      text_tracks: [
        {
          id: null,
          account_id: '6057949401001',
          src: 'http://manifest.prod.boltdns.net/thumbnail/v1/6057949401001/0c26364c-55c6-4040-bc99-55dc698e505a/c2e5987e-df92-4380-965a-87b0d28d16f9/thumbnail.webvtt?fastly_token=NjgxZDIyN2VfNzkzNWI1NDdhNWNlOWIwMDUxOTQ4YTRjNTE4MTk0M2NkN2YwZjJmMzEyYTAxNDVkODNjZjZlYjg2NzVmNTEyNA%3D%3D',
          srclang: null,
          label: 'thumbnails',
          kind: 'metadata',
          mime_type: 'text/webvtt',
          asset_id: null,
          sources: null,
          default: false,
          width: 480,
          height: 270,
          bandwidth: 448,
        },
        {
          id: null,
          account_id: '6057949401001',
          src: 'https://manifest.prod.boltdns.net/thumbnail/v1/6057949401001/0c26364c-55c6-4040-bc99-55dc698e505a/c2e5987e-df92-4380-965a-87b0d28d16f9/thumbnail.webvtt?fastly_token=NjgxZDIyN2VfNzkzNWI1NDdhNWNlOWIwMDUxOTQ4YTRjNTE4MTk0M2NkN2YwZjJmMzEyYTAxNDVkODNjZjZlYjg2NzVmNTEyNA%3D%3D',
          srclang: null,
          label: 'thumbnails',
          kind: 'metadata',
          mime_type: 'text/webvtt',
          asset_id: null,
          sources: null,
          default: false,
          width: 480,
          height: 270,
          bandwidth: 448,
        },
      ],
      published_at: '2024-08-13T10:52:34.423Z',
      created_at: '2024-08-13T10:52:34.423Z',
      updated_at: '2025-04-02T11:12:35.079Z',
      offline_enabled: false,
      link: {
        text: '',
        url: '',
      },
      id: '6360358040112',
      ad_keys: null,
    },
  ];
  console.log(allVideoMetaData);

  return allVideoMetaData;
};
