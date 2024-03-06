import { Link } from 'react-router-dom';
import { lwsImg, searchImg } from '../assets';

export default function Navbar() {
	return (
		<nav className='bg-slate-100 shadow-md'>
			<div className='max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3'>
				<Link to='/'>
					<img className='h-10' src={lwsImg} alt='Learn with Sumit' />
				</Link>

				<div className='flex space-x-3'>
					<div className='border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200'>
						{/* <!-- search --> */}
						<form>
							<input
								className='outline-none border-none mr-2'
								type='search'
								name='search'
								placeholder='Search'
							/>
						</form>
						<img
							className='inline h-4 cursor-pointer'
							src={searchImg}
							alt='Search'
						/>
					</div>
					<a
						href='add-video.html'
						className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500'>
						+ Add Video
					</a>
				</div>
			</div>
		</nav>
	);
}
