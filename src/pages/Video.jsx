import RelatedVideos from '../components/RelatedVideos';
import VideoGrid from '../components/VideoGrid';

export default function Video() {
	return (
		<section className='pt-6 pb-20'>
			<div className='mx-auto max-w-7xl px-2 pb-20 min-h-[400px]'>
				<div className='grid grid-cols-3 gap-2 lg:gap-8'>
					<VideoGrid />

					{/* <!-- related videos --> */}
					<RelatedVideos />
				</div>
			</div>
		</section>
	);
}
