function moveDodgerLeft() {
    let left = parseInt(dodger.style.left, 10) || 0;
    if (left > 0) {
      dodger.style.left = `${left - 10}px`;
    }
  }
  
  function moveDodgerRight() {
    let left = parseInt(dodger.style.left, 10) || 0;
    if (left < 360) { 
      dodger.style.left = `${left + 10}px`;
    }
  }
  