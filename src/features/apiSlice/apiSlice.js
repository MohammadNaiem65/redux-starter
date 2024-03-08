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
		getRelatedVideos: builder.query({
			query: (title) => {
				const tags = title.split(' ');
				const tagString = tags
					.map((tag) => `title_like=${tag}`)
					.join('&');
				const queryString = `/videos?${tagString}&_limit=5`;
				return queryString;
			},
		}),
	}),
});

export default apiSlice;
export const { useGetVideosQuery, useGetVideoQuery, useGetRelatedVideosQuery } =
	apiSlice;
