import { useEffect, useState, useRef } from 'react';
import './App.css';
import {RemoveScroll} from 'react-remove-scroll';
import lottie from 'lottie-web';
import * as idleAnim from './Idle.json';
import * as grabAnim from './Grab.json';

export default function App() {

  const [isGrabbing, setIsGrabbing] = useState(false);
  const lottieRef = useRef(null);

  useEffect(() => {
    lottie.destroy();
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      loop: isGrabbing ? false : true,
      autoplay: true,
      animationData: isGrabbing ? grabAnim : idleAnim,
    });
    anim.onComplete = function () {
      anim.pause();
      setIsGrabbing(false);
    };
    console.log('i fire once');
  }, [isGrabbing]);

  return (
    <RemoveScroll>
    <div className='container'>
      <div id="claw" ref={lottieRef}></div>
      <button onClick={() => {
        if(!isGrabbing){
          lottie.destroy();
          setIsGrabbing(true);
        }
      }}>perhaps</button>
    </div>
    </RemoveScroll>
  );
}

