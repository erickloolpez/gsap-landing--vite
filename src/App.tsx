import gsap from 'gsap';
import {ScrollTrigger ,SplitText} from 'gsap/all';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
  <main>
      <Nav />
      <Hero />
      <Cocktails />
    </main>
  )
}

export default App
