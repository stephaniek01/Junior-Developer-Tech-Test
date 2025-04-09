// pages/api/video-metadata/[id].ts

import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const videoId = searchParams.get('id');

  const response = await fetch(
    `${process.env.BRIGHTCOVE_BASE_URL}/accounts/${process.env.BRIGHTCOVE_ACCOUNT_ID}/videos/${videoId}`,
    {
      headers: {
        Accept: `application/json;pk=${process.env.BRIGHTCOVE_POLICY_KEY}`,
      },
    }
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: 'Failed to fetch metadata' },
      { status: response.status }
    );
  }

  const data = await response.json();
  return NextResponse.json(data, { status: 200 });
}
