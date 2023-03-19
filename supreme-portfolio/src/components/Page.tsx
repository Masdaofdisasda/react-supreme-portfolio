import Header from './Header';
import Footer from './Footer';

type WrapperProps = {
  children: React.ReactNode;
};

const Page: React.FC<WrapperProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Page;
