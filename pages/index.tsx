import type { NextPage } from 'next'
import Navigation from 'components/common/Navigation'
import Main from 'components/Main'
import About from 'components/About'
import DownloadButton from 'components/common/DownloadButton'
import LiveVideo from 'components/LiveVideo'
import useMedia from 'utils/hooks/useMedia'
import Footer from 'components/common/Footer'

const Home: NextPage = () => {
  const { isTablet, isPc } = useMedia()

  return (
    <div>
      <Navigation />
      <Main />
      <About isPc={isPc} />
      <LiveVideo />
      <Footer isTablet={isTablet} isPc={isPc} />
      <DownloadButton />
    </div>
  )
}

export default Home
