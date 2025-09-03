import { createContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from 'react';
import React from "react";
import { BlogPostType, BlogType } from 'src/types/apps/blog';
import { BlogPost } from "src/api/blog/blogData";

// Define BlogContextProps interface
export interface BlogContextProps {
    posts: BlogPostType[];
    sortBy: string;
    selectedPost: BlogPostType | null;
    isLoading: boolean;
    setPosts: Dispatch<SetStateAction<BlogPostType[]>>;
    setSortBy: Dispatch<SetStateAction<string>>;
    setSelectedPost: Dispatch<SetStateAction<BlogPostType | null>>;
    setLoading: Dispatch<SetStateAction<boolean>>;
    addComment: (postId: number, newComment: BlogType) => void;
    error: null | any;
}

// Create context with default values
export const BlogContext = createContext<BlogContextProps>({
    posts: [],
    sortBy: 'newest',
    selectedPost: null,
    isLoading: true,
    setPosts: () => { },
    setSortBy: () => { },
    setSelectedPost: () => { },
    setLoading: () => { },
    addComment: () => { },
    error: null
});

// BlogProvider component
export const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [posts, setPosts] = useState<BlogPostType[]>([]);
    const [sortBy, setSortBy] = useState<string>('newest');
    const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(null);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    // Fetch posts using fetch API
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                setPosts(BlogPost);
            } catch (err: any) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    // Adds a new comment to a specific post by updating the state
    const addComment = (postId: number, newComment: BlogType) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === postId ? { ...post, comments: [newComment, ...(post.comments || [])] } : post
            )
        );
    }

    const value: BlogContextProps = {
        posts,
        sortBy,
        selectedPost,
        isLoading,
        setPosts,
        setSortBy,
        setSelectedPost,
        setLoading,
        addComment,
        error
    };

    return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
