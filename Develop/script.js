
// const time24 = dayjs();
// const time12 = time24.format('h:mm A');
// console.log(time12)

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  const currentHour = dayjs().hour();
  console.log(currentHour);
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
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  const currentDay = dayjs().format('MMM-DD')
  const dayElement = document.getElementById('currentDate')
  dayElement.textContent = currentDay;
  console.log(currentDay);
});
