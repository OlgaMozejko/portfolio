const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('#skill-square');
  
      if (entry.isIntersecting) {
        square.classList.add('square-animation');
        return; 
      }
  
      
      square.classList.remove('square-animation');
    });
  });
  
  observer.observe(document.querySelector('#skill-wrapp'));
  
  
  const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square2 = entry.target.querySelector('#skill-square2');
  
      if (entry.isIntersecting) {
        square2.classList.add('square-animation');
        return; 
      }
  
      
      square2.classList.remove('square-animation');
    });
  });
  
  observer2.observe(document.querySelector('#skill-wrapp2'));