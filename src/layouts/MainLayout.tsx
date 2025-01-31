import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="px-4 py-4 ">
        {children}
      </main>
     <Footer/>
    </div>
  );
};

export default MainLayout;
