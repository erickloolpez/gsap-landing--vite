import gsap from 'gsap';
import {ScrollTrigger ,SplitText} from 'gsap/all';
import Nav from './components/Nav';
import Hero from './components/Hero';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
  <main>
      <Nav />
      <Hero />
      <div className="h-dvh bg-black">
      </div>
    </main>
  )
}

export default App
