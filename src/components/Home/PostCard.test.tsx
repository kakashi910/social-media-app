import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PostCard from './PostCard';

describe('PostCard Component', () => {
  const mockPost = {
    id: 1,
    owner: 'John Doe',
    date: '2022-01-01',
    content: 'Test post content',
    likes: 0,
    bookmarks: 0,
    comments: [],
  };

  test('renders post details', () => {
    render(<PostCard post={mockPost} onLike={() => {}} onBookmark={() => {}} onComment={() => {}} />);
    expect(screen.getByText('John Doe - 2022-01-01')).toBeInTheDocument();
    expect(screen.getByText('Test post content')).toBeInTheDocument();
  });

  
});
