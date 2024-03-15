$(function () {

  const saveButtons = document.querySelectorAll('.saveBtn');
  saveButtons.forEach(saveButton => {
    saveButton.addEventListener('click', function() {
      const timeBlock = this.parentElement;
      const time = timeBlock.dataset.time;
      saveToLocalStorage(time);
    });
  });
  
  const currentHour = dayjs().hour();
  const timeBlocks = document.querySelectorAll('.time-block');
  timeBlocks.forEach(timeBlock => {
    const blockHour = parseInt(timeBlock.dataset.time.split(':')[0]);

    if (blockHour < currentHour) {
      timeBlock.classList.add('past');
    } else if (blockHour === currentHour) {
      timeBlock.classList.add('present');
    } else {
      timeBlock.classList.add('future');
    }
  });

  const loadFromLocalStorage = function() {
    const timeBlocks = document.querySelectorAll('.time-block');
    timeBlocks.forEach(timeBlock => {
      const savedInput = localStorage.getItem(timeBlock.dataset.time);
      if (savedInput) {
        const textArea = timeBlock.querySelector('.description');
        textArea.value = savedInput;
      }
    });
  };

  loadFromLocalStorage();

  function saveToLocalStorage(time) {
    const timeBlock = document.querySelector(`.time-block[data-time="${time}"]`);
    const textArea = timeBlock.querySelector('.description');
    const inputValue = textArea.value;
    localStorage.setItem(time, inputValue);
  }
  const currentDay = dayjs().format('MMM-DD')
  const dayElement = document.getElementById('currentDate')
  dayElement.textContent = currentDay;
});
