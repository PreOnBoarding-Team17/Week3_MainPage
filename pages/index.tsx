import type { NextPage } from "next";
import Navigation from "components/common/Navigation";
import Main from "components/Main";
import CheckedBooks from "components/CheckedBooks";

const Home: NextPage = () => {
  return (
    <div>
      <Navigation />
      <Main />
      <CheckedBooks />
    </div>
  );
};

export default Home;
