import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
	reducerPath: 'videoGalleryAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:9000/',
	}),
	tagTypes: ['Videos', 'Video', 'RelatedVideos'],
	endpoints: (builder) => ({
		getVideos: builder.query({
			query: () => '/videos',
			keepUnusedDataFor: 600,
			providesTags: ['Videos'],
		}),
		getVideo: builder.query({
			query: (videoId) => `/videos/${videoId}`,
			providesTags: (result, error, arg) => [{ type: 'Video', id: arg }],
		}),
		getRelatedVideos: builder.query({
			query: ({ title }) => {
				const tags = title.split(' ');
				const tagString = tags
					.map((tag) => `title_like=${tag}`)
					.join('&');
				const queryString = `/videos?${tagString}&_limit=5`;
				return queryString;
			},
			providesTags: (result, error, arg) => [
				{ type: 'RelatedVideo', id: arg.id },
			],
		}),
		addVideo: builder.mutation({
			query: (data) => ({
				url: '/videos',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['Videos'],
		}),
		editVideo: builder.mutation({
			query: ({ videoId, data }) => ({
				url: `/videos/${videoId}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: (result, error, arg) => [
				'Videos',
				{ type: 'Video', id: arg.videoId },
				{ type: 'RelatedVideo', id: arg.videoId },
			],
		}),
	}),
});

export default apiSlice;
export const {
	useGetVideosQuery,
	useGetVideoQuery,
	useGetRelatedVideosQuery,
	useAddVideoMutation,
	useEditVideoMutation,
} = apiSlice;
