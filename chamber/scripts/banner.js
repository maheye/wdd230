const currentDate = new Date();
const dayOfWeek = currentDate.getDay(); 

if ([1, 2, 3].includes(dayOfWeek)) {
  const banner = document.createElement('div');
  banner.innerHTML = `
    <p>Join us for the Chamber of Commerce meet and greet on Wednesday at 7:00 p.m.</p>
    <button onclick="this.parentElement.remove()">❌</button>
  `;
  banner.style.background = '#ffcccb'; 
  banner.style.padding = '20px'; 
  banner.style.position = 'fixed'; 
  banner.style.top = '170px';
  banner.style.zIndex = '1000'; 

  document.body.prepend(banner);
}