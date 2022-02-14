import type { NextPage } from 'next'
import Navigation from 'components/common/Navigation'
import Main from 'components/Main'
import DownloadButton from 'components/common/DownloadButton'
import LiveVideo from "components/LiveVideo";


const Home: NextPage = () => {
  return (
    <div>
      <Navigation />
      <DownloadButton />
      <Main />
      <LiveVideo />
    </div>
  );
};

export default Home;
