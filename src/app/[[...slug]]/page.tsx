// Component: PageHome

import Link from 'next/link';

// Settings
// const isDev = process.env.NODE_ENV === 'development';
// const fetchUrl = `${
// 	isDev
// 		? process.env.NEXT_PUBLIC_SITE_DEV_URL
// 		: process.env.NEXT_PUBLIC_SITE_PROD_URL
// }/api/videos`;

// Component
export default function PageHome() {
	// Render default
	return (
		<div className="page--home flex flex-col justify-center items-stretch min-h-dvh bg-black text-white">
			<div className="page__container px-6 py-20 lg:px-8">
				<div className="page__row flex flex-col justify-center items-stretch max-w-screen-lg mx-auto gap-6">
					<div className="page__text-wrapper space-y-4">
						<div className="page__title font-bold text-2xl">
							<h1>Video carousel</h1>
						</div>

						<div className="page__copy space-y-1">
							<p>
								A coding challenge using specific libraries:{' '}
								<Link
									className="font-semibold hover:underline"
									href="https://www.embla-carousel.com/"
									target="_blank"
								>
									Embla Carousel
								</Link>
								,{' '}
								<Link
									className="font-semibold hover:underline"
									href="https://www.npmjs.com/package/react-player"
									target="_blank"
								>
									React Player
								</Link>{' '}
								and the{' '}
								<Link
									className="font-semibold hover:underline"
									href="https://www.brightcove.com/"
									target="_blank"
								>
									Brightcove
								</Link>{' '}
								Playback API
							</p>
						</div>
					</div>

					<div className="page__carousel">[EmblaCarousel]</div>
				</div>
			</div>
		</div>
	);
}
