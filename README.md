# 🎥 Frontend Challenge: Video Carousel with Embla + Brightcove

Welcome! This is a short frontend coding challenge to help us understand how you approach real-world component development. It focuses on building a **video carousel** using modern frontend tools and libraries.

---

## 🧩 Your Task

Using the included starter project, your job is to build a responsive, interactive video carousel with the following features:

### 🚀 Core Requirements

1. **Fetch a list of video IDs** from the local API route at `/api/videos`.
2. **Use each video ID** to fetch video metadata from the [Brightcove Playback API](https://www.brightcove.com/).
3. **Display the videos** in a horizontally scrollable carousel using [Embla Carousel](https://www.embla-carousel.com/).
4. **Render each video** using [React Player](https://www.npmjs.com/package/react-player).

> ⚠️ For this challenge, you will be provided with a temporary brightcove account and policy key. Please use the provided credentials to fetch the video metadata. If you don't have access to the credentials, please reach out to us.

---

### ✨ Bonus Points

If you’d like to push things a bit further, we’d love to see:

- 🌀 **Autoplay Carousel Scrolling**  
  Make the carousel scroll automatically **unless** a video is currently playing.

- 🛑 **Single Playback Enforcement**  
  Ensure that **only one video** plays at a time. When a new video plays:
  - All other videos should stop.
  - Their playback should reset to the beginning.

---

## Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
