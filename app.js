document.getElementById("name").innerHTML="Hello DOM!" 
document.getElementById("para").innerHTML="Asfiya Hussain!" 

Digital Clock
setInterval(() => {
    document.getElementById('time').textContent = new Date().toLocaleTimeString();
  }, 1000);

