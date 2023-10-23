window.addEventListener('DOMContentLoaded', (event) => {
    const timestampInput = document.getElementById('timestamp');
    
    if (timestampInput) { 
        const now = new Date();

        
        const month = String(now.getMonth() + 1).padStart(2, '0'); 
        const day = String(now.getDate()).padStart(2, '0');
        const year = now.getFullYear();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');

        
        const formattedDate = `${month}/${day}/${year} ${hours}:${minutes}`;

        timestampInput.value = formattedDate;
    }
});