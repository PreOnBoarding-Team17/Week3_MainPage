import type { NextPage } from "next";
import Navigation from "components/common/Navigation";
import Main from 'components/Main'
import About from 'components/About'

const Home: NextPage = () => {
  return (
    <div>
      <Navigation />
      <Main />
      <About />
    </div>
  )
}

export default Home
