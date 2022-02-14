import type { NextPage } from "next";
import Navigation from "components/common/Navigation";
import Main from "components/Main";
import DownloadButton from "components/common/DownloadButton";

const Home: NextPage = () => {
  return (
    <div>
      <Navigation />
      <DownloadButton />
      <Main />
    </div>
  );
};

export default Home;
