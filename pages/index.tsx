import type { NextPage } from 'next';
import Navigation from 'components/common/Navigation';
import DownloadButton from 'components/common/DownloadButton';
import Main from 'components/Main';
import About from 'components/About';
import LiveVideo from 'components/LiveVideo';
import CheckedBooks from 'components/CheckedBooks';
import ReadingBooks from 'components/ReadingBooks';
import ReadingDiary from 'components/ReadingDiary';
import Footer from 'components/common/Footer';

import useMedia from 'utils/hooks/useMedia';

const Home: NextPage = () => {
  const { isTablet, isPc } = useMedia();

  return (
    <div>
      <Navigation />
      <DownloadButton />
      <Main />
      <About isPc={isPc} />
      <LiveVideo isPc={isPc} />
      <CheckedBooks isTablet={isTablet} isPc={isPc} />
      <ReadingBooks isTablet={isTablet} />
      <ReadingDiary isPc={isPc} isTablet={isTablet} />
      <Footer />
      <DownloadButton />
    </div>
  );
};

export default Home;
