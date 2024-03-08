import { GlobalContextProvider } from "../../context/store";
import React, { ReactNode } from 'react';
interface LayoutProps {
    children: ReactNode;
  }
  const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <GlobalContextProvider>
      {/* Your other layout elements */}
      {children}
    </GlobalContextProvider>
  );
};

export default Layout;