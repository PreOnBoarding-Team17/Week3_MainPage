import type { NextPage } from "next";
import Navigation from "components/common/Navigation";
import Main from 'components/Main'

const Home: NextPage = () => {
  return (
    <div>
      <Navigation />
      <Main />
    </div>
  )
}

export default Home
