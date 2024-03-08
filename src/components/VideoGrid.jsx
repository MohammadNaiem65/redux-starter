import VideoDescription from './VideoDescription';

export default function VideoGrid({ video }) {
	return (
		<section className='col-span-full w-full space-y-8 lg:col-span-2'>
			{/* <!-- video player --> */}
			<iframe
				width='100%'
				className='aspect-video'
				src={video?.link}
				title='Some video title'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
			/>

			{/* <!-- video description --> */}
			<VideoDescription video={video} />
		</section>
	);
}
