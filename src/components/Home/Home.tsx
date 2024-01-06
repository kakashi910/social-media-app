import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PostCard from './PostCard';

const Home: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]); 
  const [hasMore, setHasMore] = useState(true);

  // Function to fetch additional posts
  const fetchMorePosts = () => {
    // Implement logic to fetch more posts 
    // Update 'posts' state with the new posts
    // Set 'hasMore' to false when there are no more posts to fetch
  };

  const handleLike = (postId: number) => {
    // Implement logic to handle post liking
  };

  const handleBookmark = (postId: number) => {
    // Implement logic to handle post bookmarking
  };

  const handleComment = (postId: number, comment: string) => {
    // Implement logic to handle post commenting
  };

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={fetchMorePosts}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onLike={handleLike}
          onBookmark={handleBookmark}
          onComment={handleComment}
        />
      ))}
    </InfiniteScroll>
  );
};

export default Home;
