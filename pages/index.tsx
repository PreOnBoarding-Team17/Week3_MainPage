import type { NextPage } from "next";
import Navigation from "components/common/Navigation";
import Main from "components/Main";
import LiveVideo from "components/LiveVideo";

const Home: NextPage = () => {
  return (
    <div>
      <Navigation />
      <Main />
      <LiveVideo />
    </div>
  );
};

export default Home;
