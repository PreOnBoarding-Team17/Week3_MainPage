import type { NextPage } from "next";
import CheckedBooks from "components/CheckedBooks";

const Home: NextPage = () => {
  return (
    <div>
      <CheckedBooks />
    </div>
  );
};

export default Home;
