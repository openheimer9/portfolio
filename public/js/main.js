// Preserve responsive animations with performance optimizations
document.addEventListener('DOMContentLoaded', () => {
  // Performance-optimized animation handler
  const animationHandler = {
    init() {
      this.movingName = document.querySelector('.moving-name');
      this.scrollText = document.querySelector('.scroll-animate-text');
      this.lastScrollPosition = window.scrollY;
      this.ticking = false;
      
      // Throttled scroll handler
      window.addEventListener('scroll', () => {
        this.lastScrollPosition = window.scrollY;
        if (!this.ticking) {
          window.requestAnimationFrame(() => {
            this.handleScroll(this.lastScrollPosition);
            this.ticking = false;
          });
          this.ticking = true;
        }
      }, { passive: true });
    },
    
    handleScroll(scrollPosition) {
      if (!this.movingName || !this.scrollText) return;
      
      // Optimized animation calculations
      if (scrollPosition > 0) {
        const translateY = -Math.min(scrollPosition, 80);
        const opacity = 1 - (Math.abs(translateY) / 80);
        
        // Use transform for better performance
        this.movingName.style.transform = `translateY(${translateY}px)`;
        this.movingName.style.opacity = opacity;
        
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          // Simplified floating effect
          this.scrollText.style.transform = 
            `translateY(${Math.sin(scrollPosition * 0.05) * 3}px)`;
        }
      } else {
        this.movingName.style.transform = 'translateY(0)';
        this.movingName.style.opacity = '1';
        this.scrollText.style.transform = 'translateY(0)';
      }
    }
  };
  
  // Initialize animations with performance considerations
  animationHandler.init();
  
  // Optimized theme toggle
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
    }
    
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      localStorage.setItem('theme', 
        document.body.classList.contains('dark-theme') ? 'dark' : 'light'
      );
    });
  }
  
  // Optimized time display with reduced updates
  const timeDisplay = document.getElementById('timeDisplay');
  if (timeDisplay) {
    const updateTime = () => {
      const now = new Date();
      const options = { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true,
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      };
      timeDisplay.textContent = now.toLocaleString('en-US', options);
    };
    
    updateTime();
    // Update every 30 seconds instead of every second
    setInterval(updateTime, 30000);
  }
}); 