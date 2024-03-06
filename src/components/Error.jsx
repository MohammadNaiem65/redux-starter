export default function Error({ message }) {
	return (
		<p className='w-fit h-fit px-3 py-1 col-span-12 text-red-500 capitalize bg-red-200 rounded'>
			{message}
		</p>
	);
}
