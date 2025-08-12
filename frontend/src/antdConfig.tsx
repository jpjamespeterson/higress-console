import React from 'react';
import { ConfigProvider } from 'antd';

export const AntdThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1A2B4C', // company brand color
          borderRadius: 8,
          wireframe: false,
          colorTextHeading: '#0B1A2B',
          // add other tokens you need, e.g. font, size, etc.
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
