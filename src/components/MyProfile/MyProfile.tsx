
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useAuth } from '../context/AuthContext';

interface UserProfile {
  email: string;
  name: string;
  profilePhoto: string;
}

const MyProfile: React.FC = () => {
    const { isAuthenticated, login, logout } = useAuth();  
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    email: 'user@example.com', 
    name: 'John Doe',
    profilePhoto: 'https://example.com/profile.jpg',
  });

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSave = (values: UserProfile) => {
    // Implement logic to save edited user profile
    console.log('Saving profile', values);
    setProfile(values);
    setEditing(false);
  };

  return (
    <div>
      <h1>My Profile</h1>
      <Form
        name="my-profile"
        initialValues={profile}
        onFinish={handleSave}
      >
        <Form.Item
          label="Email"
          name="email"
        >
          <Input readOnly={!editing} />
        </Form.Item>

        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input disabled={!editing} />
        </Form.Item>

        <Form.Item
          label="Profile Photo"
          name="profilePhoto"
        >
          <Input disabled={!editing} />
        </Form.Item>

        {editing && (
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        )}

        {!editing && (
          <Form.Item>
            <Button type="primary" onClick={handleEditClick}>
              Edit Profile
            </Button>
          </Form.Item>
        )}
      </Form>
    </div>
  );
};

export default MyProfile;
