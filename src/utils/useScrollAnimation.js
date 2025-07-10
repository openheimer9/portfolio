import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.scroll-animation');
    
    const checkScroll = () => {
      animatedElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on initial load
    
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []); // Empty dependency array means this runs once when component mounts
};

export default useScrollAnimation;