import Video from './Video';

export default function Videos() {
	return (
		<section className='pt-12'>
			<section className='pt-12'>
				<div className='grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]'>
					{/* <!-- single video --> */}
					<Video />

					{/* <!-- error section --> */}
					<div className='w-fit px-3 col-span-12 text-red-500 capitalize bg-red-200 rounded'>
						some error happened
					</div>
				</div>
			</section>
		</section>
	);
}
