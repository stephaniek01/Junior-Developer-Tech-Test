// app/api/video-metadata/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { VideoMetaData } from '../../../../../types';

export type ResponseError = {
  error: string;
};

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
): Promise<NextResponse<VideoMetaData | ResponseError>> {
  const params = await context.params;
  const videoId = params.id;

  const res = await fetch(
    `${process.env.BRIGHTCOVE_BASE_URL}/accounts/${process.env.BRIGHTCOVE_ACCOUNT_ID}/videos/${videoId}`,
    {
      headers: {
        Accept: `application/json;pk=${process.env.BRIGHTCOVE_POLICY_KEY}`,
      },
    }
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: 'Failed to fetch metadata' },
      { status: res.status }
    );
  }

  const data: VideoMetaData = await res.json();
  return NextResponse.json(data, { status: 200 });
}
