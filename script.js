function ad() {
    setInterval(() => {
      const bday = new Date(document.getElementById("date").value);
      const now = new Date();
  
      const ageInMs = now.getTime() - bday.getTime();
  
    
      const ageInSeconds = Math.floor(ageInMs / 1000);
      const ageInMinutes = Math.floor(ageInSeconds / 60);
      const ageInHours = Math.floor(ageInMinutes / 60);
      const ageInDays = Math.floor(ageInHours / 24);
      const ageInMonths = Math.floor(ageInDays / 30.4375); // Approximate month length
      const ageInYears = Math.floor(ageInMonths / 12);
  
   
      document.getElementById("year").innerHTML = ageInYears;
      document.getElementById("months").innerHTML = ageInMonths % 12;
      document.getElementById("days").innerHTML = ageInDays % 30.4375;
      document.getElementById("hours").innerHTML = ageInHours % 24;
      document.getElementById("minutes").innerHTML = ageInMinutes % 60;
      document.getElementById("seconds").innerHTML = ageInSeconds % 60;
    }, 100); 
  }
  
  function reset() {
    window.location.reload(); 
  }
  