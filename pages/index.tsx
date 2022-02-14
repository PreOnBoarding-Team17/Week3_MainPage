import type { NextPage } from 'next';
import Navigation from 'components/common/Navigation';
import Main from 'components/Main';
import About from 'components/About';
import DownloadButton from 'components/common/DownloadButton';
import LiveVideo from 'components/LiveVideo';
import useMedia from 'utils/hooks/useMedia';

const Home: NextPage = () => {
  const { isTablet, isPc } = useMedia();

  return (
    <div>
      <Navigation />
      <Main />
      <About />
      <DownloadButton />
      <LiveVideo />
    </div>
  );
};

export default Home;
