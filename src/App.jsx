import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
	decrement,
	dynamicDecrement,
	dynamicIncrement,
	increment,
} from './features/Counter';

export default function App() {
	const [inputCount, setInputCount] = useState(0);

	const count = useSelector((state) => state.counter.count);

	const dispatch = useDispatch();

	function incrementCount() {
		inputCount
			? dispatch(dynamicIncrement(parseInt(inputCount)))
			: dispatch(increment());

		return setInputCount(0);
	}

	function decrementCount() {
		inputCount
			? dispatch(dynamicDecrement(parseInt(inputCount)))
			: dispatch(decrement());

		return setInputCount(0);
	}

	return (
		<section className='h-[100vh] w-full bg-black text-white flex justify-center items-center'>
			<div className='flex flex-col items-center'>
				<h1 id='count' className='text-5xl mb-3 text-center'>
					{count}
				</h1>
				<h2 className='text-3xl font-semibold'>
					A React Redux App Example
				</h2>
				<input
					id='num-input'
					className='w-72 h-8 mt-5 px-3 bg-slate-700 text-slate-400 rounded'
					defaultValue={inputCount}
					onClick={(e) => setInputCount(parseInt(e.target.value))}
				/>
				<div className='w-fit mt-5 space-x-5'>
					<button
						id='increment-btn'
						className='px-3 py-1 border-2 font-semibold rounded hover:bg-white hover:text-black duration-300'
						onClick={incrementCount}>
						Increment
					</button>
					<button
						id='decrement-btn'
						className='px-3 py-1 border-2 font-semibold rounded hover:bg-white hover:text-black duration-300'
						onClick={decrementCount}>
						Decrement
					</button>
				</div>
			</div>
		</section>
	);
}
