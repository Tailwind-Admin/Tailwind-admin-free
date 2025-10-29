import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';
import type { blogpostType } from '@/types/apps/BlogTypes';

interface blogTypeDe {
    blogposts: blogpostType[];
    recentPosts: blogpostType[];
    blogSearch: string;
    sortBy: string;
    selectedPost: blogpostType[] | any;
}

export const useBlogStore = defineStore('blog',{


    state: (): blogTypeDe => ({
        blogposts: [],
        recentPosts: [],
        blogSearch: '',
        sortBy: 'newest',
        selectedPost: []
    }),
    getters: {
        // Get Post from Getters
        getPosts(state) {
            return state.blogposts;
        }
    },
    actions: {
        // Fetch Blog from action
        async fetchPosts() {
            try {
                const data = await axios.get('/api/data/blog/BlogPosts');
                this.blogposts = data.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        async fetchPost(title: string) {
            try {
                const response = await axios.post('/api/data/blog/post', { title });
                this.selectedPost = response.data.post;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        }
    }
});
