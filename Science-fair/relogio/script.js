const Hours = document.getElementById('hours')
const Minutes = document.getElementById('minutes')
const Seconds = document.getElementById('seconds')
const hrs = document.getElementById('hr')

const timer = setInterval(function time() {
    let atualTime = new Date();
    let h = atualTime.getHours();
    let m = atualTime.getMinutes();
    let s = atualTime.getSeconds();
   

    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;

    if (h == 1) {
        hrs.innerText = "Hora";
    }
    else {
        hrs.innerText = "Horas";
    }
    
    Hours.textContent = h;
    Minutes.textContent = m;
    Seconds.textContent = s;
    

})


