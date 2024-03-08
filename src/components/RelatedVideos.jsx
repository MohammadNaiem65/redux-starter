import { useGetRelatedVideosQuery } from '../features/apiSlice/apiSlice';
import Error from './Error';
import RelatedVideo from './RelatedVideo';

export default function RelatedVideos({ title }) {
	const {
		data: relatedVideos,
		isLoading,
		isError,
		error,
	} = useGetRelatedVideosQuery(title);

	return isLoading ? (
		<p>Loading...</p>
	) : isError ? (
		<Error message={error.message} />
	) : (
		relatedVideos.length > 0 && (
			<aside className='col-span-full lg:col-auto max-h-[570px] overflow-y-auto'>
				{relatedVideos.map((video) => (
					<RelatedVideo key={video.id} video={video} />
				))}
			</aside>
		)
	);
}
