import gsap from 'gsap';
import {ScrollTrigger ,SplitText} from 'gsap/all';
import Nav from './components/Nav';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
  <main>
      <Nav />
    </main>
  )
}

export default App
