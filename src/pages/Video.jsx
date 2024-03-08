import { useParams } from 'react-router-dom';

import { useGetVideoQuery } from '../features/apiSlice/apiSlice';
import RelatedVideos from '../components/RelatedVideos';
import VideoGrid from '../components/VideoGrid';
import Error from '../components/Error';

export default function Video() {
	const { videoId } = useParams();
	const {
		data: video,
		isLoading,
		isError,
		error,
	} = useGetVideoQuery(videoId);

	return isLoading ? (
		<p>Loading...</p>
	) : isError ? (
		<Error message={error.message} />
	) : (
		<section className='pt-6 pb-20'>
			<div className='mx-auto max-w-7xl px-2 pb-20 min-h-[400px]'>
				<div className='grid grid-cols-3 gap-2 lg:gap-8'>
					<VideoGrid video={video} />

					{/* <!-- related videos --> */}
					<RelatedVideos title={video?.title} />
				</div>
			</div>
		</section>
	);
}
