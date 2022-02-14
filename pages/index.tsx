import type { NextPage } from 'next';
import Navigation from 'components/common/Navigation';
import Main from 'components/Main';
import About from 'components/About';
import DownloadButton from 'components/common/DownloadButton';
import LiveVideo from 'components/LiveVideo';
import ReadingBooks from 'components/ReadingBooks';
import useMedia from 'utils/hooks/useMedia';

const Home: NextPage = () => {
  const { isTablet, isPc } = useMedia();

  return (
    <div>
      <Navigation />
      <Main />
      <About />
      <DownloadButton />
      <LiveVideo isPc={isPc} />
      <ReadingBooks isTablet={isTablet} />
    </div>
  );
};

export default Home;
