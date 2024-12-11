/*

Returns the current day and time to quickly compare against the last time the website was updated.

*/

   /* Returns the day of the week, the month, the day of the month, and the year. */
function showDate() {
   var today = new Date();
   var dayOfMonth = today.getDate();

   var weekDay;
   switch (today.getDay()) {
      case 0:
         weekDay = "Sunday";
         break;
         case 1:
         weekDay = "Monday";
         break;
      case 2:
         weekDay = "Tuesday";
         break;
      case 3:
         weekDay = "Wednesday";
         break;
      case 4:
         weekDay = "Thursday";
         break;
      case 5:
         weekDay = "Friday";
         break;
      case 6:
         weekDay = "Saturday";
}

/* getMonth() grabs the month as a number and replaces it with the word */
   var month = today.getMonth();
   switch (today.getMonth()) {
      case 0:
         month = "January";
         break;
      case 1:
         month = "February";
         break;
      case 2:
         month = "March";
         break;
      case 3:
         month = "April";
         break;
      case 4:
         month = "May";
         break;
      case 5:
         month = "June";
         break;
      case 6:
         month = "July";
         break;
      case 7:
         month = "August";
         break;
      case 8:
         month = "September";
         break;
      case 9:
         month = "October";
         break;
      case 10:
         month = "November";
         break;
      case 11:
         month = "December";
         break;
}

   var year = today.getFullYear();

   document.write (weekDay + " " + month + " " + dayOfMonth + " " + year);

}
