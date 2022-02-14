import type { NextPage } from 'next'
import Navigation from 'components/common/Navigation'
import Main from 'components/Main'
import About from 'components/About'
import DownloadButton from 'components/common/DownloadButton'
import LiveVideo from 'components/LiveVideo'

const Home: NextPage = () => {
  return (
    <div>
      <Navigation />
      <Main />
      <About />
      <LiveVideo />
      <DownloadButton />
    </div>
  )
}

export default Home
