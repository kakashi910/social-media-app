import React from 'react';
import { Table, Space } from 'antd';

interface Post {
  id: number;
  owner: string;
  date: string;
  content: string;
  comments: string[];
}

const MyPosts: React.FC = () => {
  const myPosts: Post[] = []; 

  const columns = [
    {
      title: 'Owner',
      dataIndex: 'owner',
      key: 'owner',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: any, record: Post) => (
        <Space size="middle">
          <a onClick={() => console.log('Edit post', record)}>Edit</a>
          <a onClick={() => console.log('Delete post', record)}>Delete</a>
        </Space>
      ),
    },
  ];

  const expandedRowRender = (record: Post) => (
    <p>{record.comments.join(', ')}</p>
  );

  return (
    <div>
      <h1>My Posts</h1>
      <Table
        dataSource={myPosts}
        columns={columns}
        expandable={{ expandedRowRender }}
      />
    </div>
  );
};

export default MyPosts;
