// API Route: Videos

// Imports - scripts (node)
import { NextResponse } from 'next/server';

// Route
export async function GET() {
  const videos = [
    {
      _key: 'video1',
      brightcoveId: '5510483493001',
    },
    {
      _key: 'video2',
      brightcoveId: '5510487311001',
    },
    {
      _key: 'video3',
      brightcoveId: '5510486328001',
    },
    {
      _key: 'video4',
      brightcoveId: '5701202551001',
    },
  ];

  return NextResponse.json(videos);
}
