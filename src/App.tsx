import gsap from 'gsap';
import {ScrollTrigger ,SplitText} from 'gsap/all';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';
import About from './components/About';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
  <main>
      <Nav />
      <Hero />
      <Cocktails />
      <About />
    </main>
  )
}

export default App
