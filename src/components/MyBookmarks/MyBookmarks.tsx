import React from 'react';
import PostCard from './Home/PostCard';

const MyBookmarks: React.FC = () => {
  const bookmarkedPosts = []; 

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
    <div>
      <h1>My Bookmarked Posts</h1>
      {
      bookmarkedPosts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onLike={handleLike}
          onBookmark={handleBookmark}
          onComment={handleComment}
        />
      ))}
    </div>
  );
};

export default MyBookmarks;
