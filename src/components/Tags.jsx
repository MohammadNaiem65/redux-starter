export default function Tags() {
	return (
		<section>
			<div className='max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto'>
				<span className='selected-tag'>react</span>
				{/* <!-- selected --> */}
				<span className='unselected-tag'>redux</span>
			</div>
		</section>
	);
}
