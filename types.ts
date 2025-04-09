/**
 * The response type of /api/videos
 */
export type brightcoveIdResponse = {
  _key: string;
  brightcoveId: string;
};

export type VideoSource = {
  src: string;
  ext_x_version?: string;
  type?: string;
  codecs?: string;
  profiles?: string;
  avg_bitrate?: number;
  codec?: string;
  container?: string;
  duration?: number;
  height?: number;
  size?: number;
  width?: number;
};

type VideoTextTrack = {
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
  bandwidth: number;
};

export type VideoMetaData = {
  poster: string;
  thumbnail: string;
  poster_sources: { src: string }[];
  thumbnail_sources: { src: string }[];
  description: string | null;
  tags: string[];
  cue_points: string[];
  custom_fields: Record<string, unknown>;
  account_id: string;
  sources: VideoSource[];
  name: string;
  reference_id: string | null;
  long_description: string | null;
  duration: number;
  economics: string;
  text_tracks: VideoTextTrack[];
  published_at: string;
  created_at: string;
  updated_at: string;
  offline_enabled: boolean;
  link: string | null;
  id: string;
  ad_keys: string | null;
};
