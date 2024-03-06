import { deleteImg, editImg } from '../assets';

export default function VideoDescription() {
	return (
		<section>
			<h1 className='text-lg font-semibold tracking-tight text-slate-800'>
				Some video title
			</h1>
			<div className='pb-4 flex items-center space-between border-b'>
				<h2 className='text-sm leading-[1.7142857] text-slate-600 w-full'>
					Uploaded on 23 Nov 2022
				</h2>

				{/* <!-- delete/edit --> */}
				<div className='flex gap-10 w-48'>
					<div className='flex gap-1'>
						<div className='shrink-0'>
							<img
								className='w-5 block'
								src={editImg}
								alt='Edit'
							/>
						</div>
						<a
							href='add-video.html'
							className='text-sm leading-[1.7142857] text-slate-600'>
							Edit
						</a>
					</div>
					<div className='flex gap-1'>
						<div className='shrink-0'>
							<img
								className='w-5 block'
								src={deleteImg}
								alt='Delete'
							/>
						</div>
						<div className='text-sm leading-[1.7142857] text-slate-600 cursor-pointer'>
							Delete
						</div>
					</div>
				</div>
			</div>

			<div className='mt-4 text-sm text-[#334155] dark:text-slate-400'>
				Some video description here
			</div>
		</section>
	);
}
