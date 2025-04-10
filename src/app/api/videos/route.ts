// API Route: Videos

// Imports - scripts (node)
import { NextResponse } from 'next/server';

// Route
export async function GET() {
  const videos = [
    {
      _key: 'video1',
      brightcoveId: '6361867842112',
    },
    {
      _key: 'video2',
      brightcoveId: '6361737263112',
    },
    {
      _key: 'video3',
      brightcoveId: '6360358040112',
    },
  ];

  return NextResponse.json(videos);
}
