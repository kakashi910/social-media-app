import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './Home';

describe('Home Component', () => {
  const mockPosts = [
    {
      id: 1,
      owner: 'John Doe',
      date: '2022-01-01',
      content: 'Test post content 1',
      likes: 0,
      bookmarks: 0,
      comments: [],
    },
    {
      id: 2,
      owner: 'Jane Doe',
      date: '2022-01-02',
      content: 'Test post content 2',
      likes: 0,
      bookmarks: 0,
      comments: [],
    },
  ];

  test('renders posts', () => {
    render(<Home />);
    
  });

});
