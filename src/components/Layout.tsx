import React from 'react';
import ProLayout, { MenuDataItem } from '@ant-design/pro-layout';
import { Link } from 'react-router-dom';

const Layout: React.FC = ({ children }) => {
  const menuData: MenuDataItem[] = [
    {
      path: '/',
      name: 'Home',
      icon: 'home',
    },
    {
      path: '/my-likes',
      name: 'My Likes',
      icon: 'heart',
    },
    {
      path: '/my-bookmarks',
      name: 'My Bookmarks',
      icon: 'book',
    },
    {
      path: '/my-posts',
      name: 'My Posts',
      icon: 'profile',
    },
    {
      path: '/my-profile',
      name: 'My Profile',
      icon: 'user',
    },
  ];

  return (
    <ProLayout
      route={{
        routes: menuData,
      }}
      location={{
        pathname: '/',
      }}
      menuDataRender={() => menuData}
      menuItemRender={(item, dom) => (
        <Link to={item.path || '/'}>{dom}</Link>
      )}
    >
      {children}
    </ProLayout>
  );
};

export default Layout;
