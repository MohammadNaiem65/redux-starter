import { useGetVideosQuery } from '../features/apiSlice/apiSlice';
import Error from './Error';
import Video from './Video';

export default function Videos() {
	const { data: videos, isError, error } = useGetVideosQuery();

	return (
		<section className='pt-12'>
			<section className='pt-12'>
				<div className='grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]'>
					{/* <!-- single video --> */}
					{videos?.length > 0 &&
						videos.map((video) => <Video key={video.id} />)}

					{/* <!-- error section --> */}
					{isError && (
						<Error
							message={
								error?.message
									? error?.message
									: 'An unknown error occurred!'
							}
						/>
					)}
				</div>
			</section>
		</section>
	);
}
