function update() {
    const now = new Date();
  
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
  
    const week = document.getElementById('week');
    const days = week.children;
    
    Array.from(days).forEach(day => day.classList.remove('active'));
  
    days[now.getDay()].classList.add('active');
  }
  
  setInterval(update, 500);
  
  update();
  