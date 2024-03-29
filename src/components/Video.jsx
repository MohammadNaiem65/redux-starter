import { Link } from 'react-router-dom';

export default function Video({ video }) {
	const { id, title, author, duration, date, thumbnail, views } = video;

	return (
		<div className='col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]'>
			<div className='w-full flex flex-col'>
				<div className='relative'>
					<Link to={`/video/${id}`}>
						<img
							src={thumbnail}
							className='w-full h-[10.875rem] object-cover'
							alt={title}
						/>
					</Link>

					<p className='absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py'>
						{duration}
					</p>
				</div>

				<div className='flex flex-row mt-2 gap-2'>
					<Link to={`/video/${id}`} className='shrink-0'>
						<img
							src='https://avatars.githubusercontent.com/u/73503432?v=4'
							className='rounded-full h-6 w-6'
							alt={thumbnail}
						/>
					</Link>

					<div className='flex flex-col'>
						<Link to={`/video/${id}`}>
							<p className='text-slate-900 text-sm font-semibold line-clamp-2'>
								{title}
							</p>
						</Link>
						<a
							className='text-gray-400 text-xs mt-2 hover:text-gray-600'
							href='#'>
							{author}
						</a>
						<p className='text-gray-400 text-xs mt-1'>
							{views} views . {date}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
