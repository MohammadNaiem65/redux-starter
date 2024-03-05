import VideoDescription from "./VideoDescription";
import VideoPlayer from "./VideoPlayer";

export default function VideoGrid() {
    return (
		<section className='col-span-full w-full space-y-8 lg:col-span-2'>
			{/* <!-- video player --> */}
			<VideoPlayer />

			{/* <!-- video description --> */}
			<VideoDescription />
		</section>
	);
}