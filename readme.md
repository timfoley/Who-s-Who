# How it Came to Be
I started this project when a coworker, [Jon Rojas](https://github.com/jonrojas), asked if I could help him style a back-end app he created for GA's [Back-End Web Development Course](https://generalassemb.ly/education/back-end-web-development). His goal was to automate the process of creating a student orientation guide. In the past, he had put them all together manually using Keynote. Here's the comp he gave me to work with:

![student profile page made in keynote](https://github.com/timfoley/whoswho/blob/master/misc/compOriginal.png?raw=true)

Here's the [Sample Student Page](https://timfoley.github.io/samplestudent.html) I made based on this layout. Check it out! I still need to add that footer, but that'll be pretty simple.

After that, I created a [Gallery View](https://timfoley.github.io/gallery.html), but it's still not actually connected to anything just yet. I'm really proud of the fact that I was able to get the profile-cards to grow and snap with flex, but keep the "spillover" cards from growing to fill all the space. I didn't want to set a static width, so instead I used some javascript to keep the profile card width equal to the first card:

```javascript
$(document).ready(resizeCard);

$(window).resize(resizeCard);


function resizeCard() {
  $('.profile-card + .profile-card').css({
    'max-width': $('.profile-card:first-child').width()
    });
}
```
It's still kinda janky, but it does the trick! Not to mention I felt super clever for solving my own problem using just a little javascript. 

#Libraries/Plugins Used
* [jquery](https://jquery.com/) - obviously
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
