import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { deleteImg, editImg } from '../assets';
import { useDeleteVideoMutation } from '../features/apiSlice/apiSlice';
import Error from './Error';

export default function VideoDescription({ video }) {
	const { id, title, description, date } = video;

	const navigate = useNavigate();
	const [deleteVideo, { isSuccess, isError, error }] =
		useDeleteVideoMutation();

	const handleDeleteVideo = () => {
		if (id) {
			deleteVideo(id);
		}
	};

	// redirect user after deleting video
	useEffect(() => {
		if (isSuccess) {
			navigate('/');
		}
	});

	return (
		<section>
			<h1 className='text-lg font-semibold tracking-tight text-slate-800'>
				{title}
			</h1>
			<div className='pb-4 flex items-center space-between border-b'>
				<h2 className='text-sm leading-[1.7142857] text-slate-600 w-full'>
					Uploaded on {date}
				</h2>

				{/* <!-- delete/edit --> */}
				<div className='flex gap-10 w-48'>
					<Link to={`/edit-video/${id}`} className='flex gap-1'>
						<div className='shrink-0'>
							<img
								className='w-5 block'
								src={editImg}
								alt='Edit'
							/>
						</div>
						<p className='text-sm leading-[1.7142857] text-slate-600'>
							Edit
						</p>
					</Link>
					<div className='flex gap-1'>
						<div className='shrink-0'>
							<img
								className='w-5 block'
								src={deleteImg}
								alt='Delete'
							/>
						</div>
						<button
							className='text-sm leading-[1.7142857] text-slate-600 cursor-pointer'
							onClick={handleDeleteVideo}>
							Delete
						</button>
					</div>
				</div>
			</div>

			{isError && (
				<Error
					className='mt-4 mx-auto'
					message={
						error?.message
							? error?.message
							: 'An error occurred while deleting the video.'
					}
				/>
			)}

			<div className='mt-4 text-sm text-[#334155] dark:text-slate-400'>
				{description}
			</div>
		</section>
	);
}
