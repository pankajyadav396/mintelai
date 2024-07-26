import './App.css'
import Brands from './components/Brands'
import BackToTop from './components/common/BackToTop'
import Compatible from './components/Compatible'
import DidYouKnow from './components/DidYouKnow'
import Footer from './components/Footer'
import Header from './components/Header'
import Installation from './components/Installation'
import MintelizeIt from './components/MintelizeIt'
import Prospecting from './components/Prospecting'

function App() {

  return (
    <>
      <div className='bg-black overflow-hidden'>
        <BackToTop />
        <Header />
        <DidYouKnow />
        <Prospecting />
        <Compatible />
        <MintelizeIt />
        <Installation />
        <Brands />
        <Footer />
      </div>
    </>
  )
}

export default App