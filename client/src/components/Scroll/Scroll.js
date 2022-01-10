import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import classes from './Scroll.module.css';

const Scroll = () => {
    const hasWindow = typeof window !== 'undefined';
    const [ show, setShow ] = useState(false);

    function handleElementsOnScroll() {
    window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
  
        if (currentScrollPos > 600) {
            setShow(true);
        } else {
          setShow(false);
        }
    }
}
    
    useEffect(() => {
        if (hasWindow) {
          handleElementsOnScroll()
        }
      }, [hasWindow])    

    const scrollToTop = () => {
        window[`scrollTo`]({ top: 0, behavior: 'smooth'});
    }

    return <div>
        {show && 
            <FontAwesomeIcon 
                icon={faArrowCircleUp}
                className={classes.icon} 
                onClick={ scrollToTop }
            />
        }
    </div>
}

export default Scroll;