export default function Pagination() {
	return (
		<section className='pt-12'>
			<div className='max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end'>
				<span className='active-page'>1</span>
				<span className='inactive-page'>2</span>
				<span className='inactive-page'>3</span>
			</div>
		</section>
	);
}
