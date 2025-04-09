/**
 * The response type of /api/videos
 */
export type brightcoveIdResponse = {
  _key: string;
  brightcoveId: string;
};

export type VideoSource = {
  src: string;
  codecs?: string;
  ext_x_version?: string;
  profiles?: string;
  type?: string;
  avg_bitrate?: number;
  codec?: string;
  container?: string;
  duration?: number;
  height?: number;
  size?: number;
  width?: number;
};

export type TextTrack = {
  id: string | null;
  account_id: string;
  src: string;
  srclang: string | null;
  label: string;
  kind: string;
  mime_type: string;
  asset_id: string | null;
  sources: string | null;
  default: boolean;
  width: number;
  height: number;
  bandwidth?: number;
};

// Define the type for the link object
export type Link = {
  text: string;
  url: string;
};

// Define the main type for video metadata
export type VideoMetaData = {
  poster: string;
  thumbnail: string;
  poster_sources: { src: string }[];
  thumbnail_sources: { src: string }[];
  description: string;
  tags: string[];
  cue_points: string[];
  custom_fields: Record<string, unknown>;
  account_id: string;
  sources: VideoSource[];
  name: string;
  reference_id: string;
  long_description: string;
  duration: number;
  economics: string;
  text_tracks: TextTrack[];
  published_at: string;
  created_at: string;
  updated_at: string;
  offline_enabled: boolean;
  link: Link | string;
  id: string;
  ad_keys: string | null;
};
