#Libraries/Plugins Used
* [jquery](https://jquery.com/) - obvious
* [underscore.js](http://underscorejs.org/) - so I could shuffle my arrays
* [TinySort](http://tinysort.sjeiti.com/) - to shuffle the `.profile-card`s
* [Animate.css](http://daneden.github.io/animate.css/) - for the score pop-up alert (thanks Darrius!)

#Javascript Pseudocode

**DOM**
* divs with ID='student-name' for each student
* start button
* reset button
* (skip button)
* score panel

**Setup**

1. Instantiate an array with names of all students

**Start Game**

2. When user clicks 'start', reset score to 0
3. Shuffle name array

**First student**

4. pop a student name off array
5. display student name to user
6. prompt user to click on the right student
7. if correct, add name under profile pic, move to bottom, and add 10 points
  * if incorrect, subtract 5 points
  * if skipped, subtract 1 point and move to next name

**Next students**

8. While there are more students, repeat steps 4-7

**Out of students**

9. When there are no more students, switch to End Game function
