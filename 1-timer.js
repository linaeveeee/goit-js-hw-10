import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as h,i as y}from"./assets/vendor-A92OCY9B.js";const e={datePicker:document.querySelector("#datetime-picker"),startBtn:document.querySelector("[data-start]"),daysElem:document.querySelector("[data-days]"),hoursElem:document.querySelector("[data-hours]"),minutesElem:document.querySelector("[data-minutes]"),secondsElem:document.querySelector("[data-seconds]")};e.startBtn.disabled=!0;let i=null,c=null;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const n=t[0];n<=new Date?(y.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),e.startBtn.disabled=!0):(i=n,e.startBtn.disabled=!1)}};h(e.datePicker,p);function E(){e.startBtn.disabled=!0,e.datePicker.disabled=!0,c=setInterval(()=>{const n=i-new Date;if(n<=0){clearInterval(c),u(0,0,0,0),e.datePicker.disabled=!1;return}const{days:r,hours:o,minutes:d,seconds:a}=S(n);u(r,o,d,a)},1e3)}function u(t,n,r,o){e.daysElem.textContent=s(t),e.hoursElem.textContent=s(n),e.minutesElem.textContent=s(r),e.secondsElem.textContent=s(o)}function S(t){const a=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:l,minutes:m,seconds:f}}function s(t){return t.toString().padStart(2,"0")}e.startBtn.addEventListener("click",E);
//# sourceMappingURL=1-timer.js.map
