import type { NextPage } from 'next';
import Navigation from 'components/common/Navigation';
import DownloadButton from 'components/common/DownloadButton';
import Main from 'components/Main';
import About from 'components/About';
import LiveVideo from 'components/LiveVideo';
import CheckedBooks from 'components/CheckedBooks';
import ReadingBooks from 'components/ReadingBooks';
import ReadingDiary from 'components/ReadingDiary';
import useMedia from 'utils/hooks/useMedia';

const Home: NextPage = () => {
  const { isTablet, isPc } = useMedia();

  return (
    <div>
      <Navigation />
      <DownloadButton />
      <Main />
      <About />
      <LiveVideo isPc={isPc} />
      <CheckedBooks isTablet={isTablet} isPc={isPc} />
      <ReadingBooks isTablet={isTablet} />
      <ReadingDiary isPc={isPc} isTablet={isTablet} />
    </div>
  );
};

export default Home;
