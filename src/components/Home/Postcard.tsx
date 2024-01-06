import React, { useState } from 'react';
import { Card, Input, Button, List } from 'antd';
import { CommentOutlined, HeartOutlined, BookOutlined, MessageOutlined } from '@ant-design/icons';

interface PostCardProps {
  post: {
    id: number;
    owner: string;
    date: string;
    content: string;
    likes: number;
    bookmarks: number;
    comments: string[];
  };
  onLike: (postId: number) => void;
  onBookmark: (postId: number) => void;
  onComment: (postId: number, comment: string) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onLike, onBookmark, onComment }) => {
  const [commentInput, setCommentInput] = useState('');

  const handleLike = () => {
    onLike(post.id);
  };

  const handleBookmark = () => {
    onBookmark(post.id);
  };

  const handleComment = () => {
    if (commentInput.trim() !== '') {
      onComment(post.id, commentInput);
      setCommentInput('');
    }
  };

  return (
    <Card
      title={`${post.owner} - ${post.date}`}
      extra={
        post.owner === 'current_user' ? (
          <>
            <Button type="link" onClick={() => console.log('Edit post')}>
              Edit
            </Button>
            <Button type="link" onClick={() => console.log('Delete post')}>
              Delete
            </Button>
          </>
        ) : null
      }
      actions={[
        <span key="like" onClick={handleLike}>
          <HeartOutlined /> {post.likes} Likes
        </span>,
        <span key="bookmark" onClick={handleBookmark}>
          <BookOutlined /> {post.bookmarks} Bookmarks
        </span>,
        <span key="comment" onClick={() => console.log('Show comments')}>
          <CommentOutlined /> {post.comments.length} Comments
        </span>,
      ]}
    >
      <p>{post.content}</p>
      <Input
        placeholder="Add a comment..."
        value={commentInput}
        onChange={(e) => setCommentInput(e.target.value)}
        suffix={<Button onClick={handleComment}>Post</Button>}
      />
      <List
        dataSource={post.comments}
        renderItem={(comment) => <List.Item>{comment}</List.Item>}
      />
    </Card>
  );
};

export default PostCard;
