import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
	reducerPath: 'videoGalleryAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:9000/',
	}),
	endpoints: (builder) => ({
		getVideos: builder.query({
			query: () => '/videos',
		}),
		getVideo: builder.query({
			query: (videoId) => `/videos/${videoId}`,
		}),
	}),
});

export default apiSlice;
export const { useGetVideosQuery, useGetVideoQuery } = apiSlice;
