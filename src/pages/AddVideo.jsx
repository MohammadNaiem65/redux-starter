import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useAddVideoMutation } from '../features/apiSlice/apiSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Error from '../components/Error';

export default function AddVideo() {
	const path = useLocation().pathname?.split('/');
	const pathType = path[1]?.split('-')[0];
	const id = path[2];
	const navigate = useNavigate();

	const [addVideo, { isSuccess, isError, error }] = useAddVideoMutation();

	const [data, setData] = useState({
		title: '',
		description: '',
		author: '',
		date: '',
		duration: '',
		views: '',
		link: '',
		thumbnail: '',
	});

	const submitData = (e) => {
		e.preventDefault();
		``;

		addVideo(data);
	};

	useEffect(() => {
		if (isSuccess) {
			navigate('/');
		}
	}, [navigate, isSuccess]);

	return (
		<section className='pt-6 pb-20 min-h-[calc(100vh_-_157px)]'>
			<div className='max-w-7xl mx-auto px-5 lg:px-0'>
				<div className='w-full'>
					<div className='px-4 sm:px-0 pb-4'>
						<h3 className='text-lg font-medium leading-6 text-gray-900'>
							{pathType === 'edit'
								? 'Edit video'
								: 'Add new video'}
						</h3>
						<p className='mt-1 text-sm text-gray-600'>
							Please fillup the form to add new video
						</p>
					</div>

					<div className='mt-5 md:mt-0 md:col-span-2'>
						<form onSubmit={submitData}>
							<div className='shadow overflow-hidden sm:rounded-md'>
								<div className='px-4 py-5 bg-white sm:p-6'>
									<div className='grid grid-cols-6 gap-6'>
										<div className='col-span-6 sm:col-span-3'>
											<label
												htmlFor='first-name'
												className='block text-sm font-medium text-gray-700'>
												Title
											</label>
											<input
												type='text'
												name='first-name'
												id='first-name'
												autoComplete='given-name'
												className='mt-1 px-3 py-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md'
												value={data.title}
												onChange={(e) =>
													setData((prev) => ({
														...prev,
														title: e.target.value,
													}))
												}
												required
											/>
										</div>

										<div className='col-span-6 sm:col-span-3'>
											<label
												htmlFor='last-name'
												className='block text-sm font-medium text-gray-700'>
												Author
											</label>
											<input
												type='text'
												name='last-name'
												id='last-name'
												autoComplete='family-name'
												className='mt-1 px-3 py-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md'
												value={data.author}
												onChange={(e) =>
													setData((prev) => ({
														...prev,
														author: e.target.value,
													}))
												}
												required
											/>
										</div>

										<div className='col-span-6'>
											<label
												htmlFor='about'
												className='block text-sm font-medium text-gray-700'>
												Description
											</label>
											<div className='mt-1'>
												<textarea
													id='about'
													name='about'
													rows='3'
													className='px-3 py-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
													value={data.description}
													onChange={(e) =>
														setData((prev) => ({
															...prev,
															description:
																e.target.value,
														}))
													}
													required
												/>
											</div>
											<p className='mt-2 text-sm text-gray-500'>
												Brief description your video
											</p>
										</div>

										<div className='col-span-6'>
											<label
												htmlFor='email-address'
												className='block text-sm font-medium text-gray-700'>
												YouTube Video Link
											</label>
											<input
												type='text'
												name='email-address'
												id='email-address'
												autoComplete='email'
												className='mt-1 px-3 py-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md'
												value={data.link}
												onChange={(e) =>
													setData((prev) => ({
														...prev,
														link: e.target.value,
													}))
												}
												required
											/>
										</div>

										<div className='col-span-6'>
											<label
												htmlFor='street-address'
												className='block text-sm font-medium text-gray-700'>
												Thumbnail link
											</label>
											<input
												type='text'
												name='street-address'
												id='street-address'
												autoComplete='street-address'
												className='mt-1 px-3 py-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md'
												value={data.thumbnail}
												onChange={(e) =>
													setData((prev) => ({
														...prev,
														thumbnail:
															e.target.value,
													}))
												}
												required
											/>
										</div>

										<div className='col-span-6 sm:col-span-6 lg:col-span-2'>
											<label
												htmlFor='city'
												className='block text-sm font-medium text-gray-700'>
												Date
											</label>
											<input
												type='text'
												name='city'
												id='city'
												autoComplete='address-level2'
												className='mt-1 px-3 py-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md'
												value={data.date}
												onChange={(e) =>
													setData((prev) => ({
														...prev,
														date: e.target.value,
													}))
												}
												required
											/>
										</div>

										<div className='col-span-6 sm:col-span-3 lg:col-span-2'>
											<label
												htmlFor='region'
												className='block text-sm font-medium text-gray-700'>
												Duration
											</label>
											<input
												type='text'
												name='region'
												id='region'
												autoComplete='address-level1'
												className='mt-1 px-3 py-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md'
												value={data.duration}
												onChange={(e) =>
													setData((prev) => ({
														...prev,
														duration:
															e.target.value,
													}))
												}
												required
											/>
										</div>

										<div className='col-span-6 sm:col-span-3 lg:col-span-2'>
											<label
												htmlFor='postal-code'
												className='block text-sm font-medium text-gray-700'>
												Views
											</label>
											<input
												type='text'
												name='postal-code'
												id='postal-code'
												autoComplete='postal-code'
												className='mt-1 px-3 py-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md'
												value={data.views}
												onChange={(e) =>
													setData((prev) => ({
														...prev,
														views: e.target.value,
													}))
												}
												required
											/>
										</div>
									</div>
								</div>

								{/* show error */}
								{isError && <Error message={error.message} />}

								<div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
									<button
										type='submit'
										className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500'>
										Save
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
