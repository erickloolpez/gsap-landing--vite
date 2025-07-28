import {navLinks} from '../../constants/index.js';
import {useGSAP} from "@gsap/react"
import gsap from 'gsap';

const Nav = () => {
  useGSAP(()=>{
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top',
      }
    });

    navTween.fromTo('nav', {backgroundColor: 'tranpsarent'},{
    backgroundColor: '#00000050',
    backgroundFilter: 'blur(10px)',
    duration: 1,
    ease: 'power1.inOut',
    })
  })
  return (
  <nav>
      <a href="#home" className="flex items-center gap-2">
        <img src="/images/logo.png" alt="logo"/>
        <p>Velvet pour</p>
      </a>
      <ul>
        {navLinks.map((link) =>(
          <li key={link.id}>
            <a href={`${link.id}`} >{link.title}</a>
          </li>
        ))}
      </ul>
  </nav>
  )
}

export default Nav
