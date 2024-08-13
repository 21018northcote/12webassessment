let bookOverlay = document.querySelector('.book-confirmation-overlay');
let bookButton = document.querySelector('.bookComBtn');
let nameSelect = document.querySelector('.name-selection');
let emailSelect = document.querySelector('.email-selection');
let numberSelect = document.querySelector('.number-selection');
let commentsSelect = document.querySelector('.comments-selection');
bookButton.addEventListener('click', () => {
  let fName = document.querySelector('#fName').value;
  let lName = document.querySelector('#lName').value;
  let nameCombine = fName + " " + lName;
  let email = document.querySelector('#email').value;
  console.log(email);
  let number = document.querySelector('#number').value;
  let comments = document.querySelector('#comments').value;
  const inputs = document.querySelectorAll('.details');
  const areAllInputsFilled = Array.from(inputs).every(input => input.value.trim() !== '');
  if(areAllInputsFilled){
    bookOverlay.style.display = 'flex';
    nameSelect.innerText = nameCombine;
    emailSelect.innerText = email;
    numberSelect.innerText = number;
    commentsSelect.innerText = comments;
  }
  
});

let closeBtn = document.querySelector('.close-book-button');
closeBtn.addEventListener('click', () =>{
  bookOverlay.style.display = 'none';
});



let ContinueBtn = document.querySelector('.continue-button');
let BackBtn = document.querySelector('.back-button')
let detailSec = document.querySelector('#details-section');
let dateTimeSec = document.querySelector('#date-time-section');

ContinueBtn.addEventListener('click', () => {
  detailSec.style.display = 'block';
  dateTimeSec.style.display = 'none';
})

BackBtn.addEventListener('click', () => {
  detailSec.style.display = 'none';
  dateTimeSec.style.display = 'flex';
})



const monthYearElement = document.querySelector('#monthYear');
const datesElement = document.querySelector('#cal-dates');
const calPrevBtn = document.querySelector('#prevBtn');
const calNextBtn = document.querySelector('#nextBtn');

let currentDate = new Date();
const updateCalender = () => {
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const firstDay = new Date(currentYear, currentMonth,0);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const totalDays = lastDay.getDate();
  const firstDayIndex = firstDay.getDay();
  const lastDayIndex = lastDay.getDay();

  const monthYearString = currentDate.toLocaleString('default', {month: 'long', year: 'numeric'});
  monthYearElement.innerText = monthYearString;

  let datesHTML = '';

  for(let i = firstDayIndex; i > 0; i--){
    const prevDate = new Date(currentYear, currentMonth, 0 - i + 1);
    datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;
  }

  for(let i = 1; i <= totalDays; i++){
    const date = new Date(currentYear, currentMonth, i);
    const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : '';
    datesHTML += `<div class="date ${activeClass}">${i}</div>`;
  }

  for(let i = 1; i <= 7 - lastDayIndex; i++){
    const nextDate = new Date(currentYear, currentMonth + 1, i);
    datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;
  }

  datesElement.innerHTML = datesHTML;
  console.log(datesElement);
}

calPrevBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  console.log('prev clicked');
  updateCalender();
})

calNextBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  console.log('next clicked');
  updateCalender();
})

let dateBtn = document.getElementsByClassName('date');
for(const button of dateBtn){
  button.style.backgroundColor = "#ffffff";
  button.addEventListener('click', (event) =>{
    let dateBtnClicked = event.target;
    dateBtnClicked.style.backgroundColor = "rgb(3, 173, 9)";
  })
}

let time = document.querySelector('.time');
let numPeople = document.querySelector('.numPeople');
let timePrevButton = document.querySelector('#timePrevBtn');
let timeNextButton = document.querySelector('#timeNextBtn');
let numPeoplePrevButton = document.querySelector('#numPeoplePrevBtn');
let numPeopleNextButton = document.querySelector('#numPeopleNextBtn');
let GuestsStore = 1;
let guestSelect = document.querySelector('.guests-selection');
let timeSelect = document.querySelector('.time-selection');
numPeoplePrevButton.addEventListener('click', () => {
  GuestsStore -= 1;
  if(GuestsStore <= 0){
    GuestsStore = 1;
  }
  numPeople.innerText = GuestsStore;
})

numPeopleNextButton.addEventListener('click', () => {
  GuestsStore += 1;
  numPeople.innerText = GuestsStore;
  guestSelect.innerText = GuestsStore;
})
let minutes = 600; // Initialize with 0 minutes (16:00)
updateTimeDisplay();
timeNextButton.addEventListener('click', () => {
  if(minutes < 1200){
    minutes += 5;
  }
  updateTimeDisplay();
});

timePrevButton.addEventListener('click', () => {
  if (minutes > 600) {
    minutes -= 5;
    updateTimeDisplay();
  }
});



function updateTimeDisplay() {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const formattedTime = `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
  time.innerText = formattedTime;
  timeSelect.innerText = formattedTime;
}
updateCalender();