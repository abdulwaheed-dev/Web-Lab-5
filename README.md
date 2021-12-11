# Web-Lab-5
web engineering lab 5 all tasks;
1. Write a function called countdown that accepts a number as a parameter and
every 1000 milliseconds decrements the value and console.log it. Once the
value is 0 it should log "DONE!" and stop.
2. Write a function called isEven which takes in a number and returns true if the
number is even and returns false if it is not.
3. Write a function called isOdd which takes in a number and returns true if the
number is odd and returns false if it is not.
4. Write a function called isPrime which takes in a number and returns true if
the number is a prime number (is greater than 1 and can only be divided in
whole by itself and 1), otherwise returns false.
5. Write a function called numberFact which takes in a number and a callback
and returns the result of the callback with the number passed to it.
6. Write a function called find. It should take in an array and a callback and return
the first value found in the array that matches the condition.
7. Write a function called findIndex. It should take in an array and a callback
and return the index of first value found in the array that matches the condition.
8. Write a function called specialMultiply which accepts two parameters. If
the function is passed both parameters, it should return the product of the two.
If the function is only passed one parameter - it should return a function which
can later be passed another parameter to return the product. You will have to
use closure and arguments to solve this.
9. For this task you will be combining your knowledge of DOM access and events
to build a todo app!
As a user, you should be able to:
• Add a new todo (by submitting a form)
• Mark a todo as completed (cross out the text of the todo)
• Remove a todo
Using localStorage, try to store your todos so that if you refresh the page you
do not lose what you have added to the list! Try to also save todos that you
have marked as complete!
10. Write a function called printFirstAndLast which accepts an array (of
objects) and console.log a new string with the first character and the last
character of each value.
11. Write a function called addKeyAndValue which accepts three parameters, an
array (of objects), a key and a value. This function should return the array of
objects after each key and value have been added to each object in the array.
12. Write a function called valTimesIndex which accepts an array of numbers
and returns a new array with each value multiplied by the index it is at in the
array:
13. Write a function called extractKey which accepts two parameters, an array
of objects, and the name of a key and returns an array with just the values for
that key:
14. Write a function called filterLetters which accepts an array of letters and
returns the array of occurrences of a specific letter. This function should be
case insensitive.
15. Write a function called filterKey which accepts two parameters, an array of
objects, and the name of a key and returns an array with only those objects
which have truthy values for that key:
17. Use the following object for this set of questions:
let users = [
{
username: 'larry',
email: 'larry@foo.com',
yearsExperience: 22.1,
favoriteLanguages: ['Perl', 'Java', 'C++'],
favoriteEditor: 'Vim',
hobbies: ['Fishing', 'Sailing', 'Hiking'],
hometown: {
city: 'San Francisco',
state: 'CA'
}
},
{
username: 'jane',
email: 'jane@test.com',
yearsExperience: 33.9,
favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
favoriteEditor: 'Emacs',
hobbies: ['Swimming', 'Biking', 'Hiking'],
hometown: {
city: 'New York',
state: 'NY'
}
},
{
username: 'sam',
email: 'sam@test.com',
yearsExperience: 8.2,
favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
favoriteEditor: 'Atom',
hobbies: ['Golf', 'Cooking', 'Archery'],
hometown: {
city: 'Fargo',
state: 'SD'
}
},
{
username: 'anne',
email: 'anne@test.com',
yearsExperience: 4,
favoriteLanguages: ['C#', 'C++', 'F#'],
favoriteEditor: 'Visual Studio Code',
hobbies: ['Tennis', 'Biking', 'Archery'],
hometown: {
city: 'Albany',
state: 'NY'
}
},
{
username: 'david',
email: 'david@test.com',
yearsExperience: 12.5,
favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
favoriteEditor: 'VS Code',
hobbies: ['Volunteering', 'Biking', 'Coding'],
hometown: {
city: 'Los Angeles',
state: 'CA'
}
}
];
a. Write a function called printEmails which console.log's each email for
the users.
b. Write a function called printHobbies which console.log's each hobby for
each user.
c. Write a function called findHometownByState which returns the first
user which has a hometown of the state that is passed in
d. Write a function called allLanguages which returns an array of all of the
unique values
e. Write a function called hasFavoriteEditor which returns a boolean if any
of the users have the editor passed in
f. Write a function called findByUsername which takes in a string and
returns an object in the users array that has that username
18. Write a function called vowelCount that accepts a string and returns an object
with each key being the vowel and the value being the number of times the
vowel occurs in the string (the order of keys in the object does not matter).
19. Write a function called removeVowels that accepts a string and returns an array
of each character that is not a vowel (y should not count as a vowel for this
function).
20. Write a JavaScript function to get the values of First and Last name of the
following form.
21. Write a JavaScript program to set the background color of a paragraph.
22. Here is a sample html file with a submit button. Write a JavaScript function to
get the value of the href, hreflang, rel, target, and type attributes of the specified
link.
23. Here is a sample html file with a submit button. Now modify the style of the
paragraph text (such as fontSize, fontFamily, color, etc. )through javascript
code.
24. Write a JavaScript function to add rows to a table.
25. Given the following HTML:
Write the code necessary to do the following:
1. Select the section with an id of container without using querySelector.
2. Select the section with an id of container using querySelector.
3. Select all of the list items with a class of "second".
4. Select a list item with a class of third, but only the list item inside of
the ol tag.
5. Give the section with an id of container the text "Hello!".
6. Add the class main to the div with a class of footer.
7. Remove the class main on the div with a class of footer.
8. Create a new li element.
9. Give the li the text "four".
10. Append the li to the ul element.
11. Loop over all of the lis inside the ol tag and give them a background color
of "green".
12. Remove the div with a class of footer.
26. Given the following HTML, create a script.js file to complete the first two
parts.
1. Add the necessary code to wait for the DOM to load to make sure that
anything you manipulate in the DOM has loaded. You can do this either
using window.onload or adding an event listener for
DOMContentLoaded.
2. Replace the text "Change me" with "Hello World!".
3. When a user hovers over one of the colored boxes change the text to
display the color that is being hovered over.
4. Create a new div element.
5. Give your new div a class of purple and style it so that it has a
background color of purple.
6. Append your new div to the page to the section tag.
28. Create a Tic Tac Toe game with two players.
