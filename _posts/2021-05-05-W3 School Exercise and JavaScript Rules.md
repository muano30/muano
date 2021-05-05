---
Layout:
Title: "W3 School JavaScript Exercise and JavaScript Rules"
date: "2021-05-04"
---

# Introduction.

After finishing Basic Algorithm Scripting, i went to W3school exercise to apply the knowledge i have gained, and i did learn new other things that i was not aware about. I will also share with you some of the rules to be applied on JavaScript.

# Body

# RULE 1 - FOCUS.

A programmer has to stay focused. Focus on the task at hand. If you need to type in some comments of things to to later but focus on the one thing you are doing.

// TO-DO:   Put your reminder in a to-do comment
//          so you don't forget something that will need coding later

When doing a web search don't get side tracked. Get the answer and go back to the code to try it.

# RULE 2 - Make Sure the XHTML Code of the Web Page is Valid.

HTML Validator Add on for FireFoxUse the HTML Validator in FireFox to make certain the XHTML code has 0 errors/0 warnings.
 
Use FireBug and check the Console to make certain there are no JavaScript errors. After you click on the Console tab you have to refresh the page  (CTRL r) so FireBug can recheck the page for JavaScript errors.
 
Use the FireBug breakpoints and stepping tools to walk through the code a line at a time. Before you step ask yourself, "What will happen next?"  And then, force your brain to come up with an answer before you step through that line of code.

You can't set breakpoints and step through the code unless the code is correct. No syntax errors. So, you have to pass step #2 before you can do step #3.

# RULE 3 - Spelling Matters!

Spelling matters.  UPPER/lower case matters. Punctuation matters.

Use naming conventions to make sure you are always spelling folder names, file names, function names, and variable names the same throughout the code.

Follow these rules to prevent most errors that programmers make when they first learn how to program:

Always start with a lower case letter.
useCamelCaseToMakeNamesEasierToRead (the first letter of each word is capitalized.)
Don't use spaces.
Don't use plural names. For example: Use graphic instead of graphics. This helps you remember what you named something and you don't have to spend time to look it up. "Did I name it graphic or graphics????"
Keep all extensions lower case  .txt .html  .jpg  .gif
Be consistent. Follow the same naming rules all of the time.
For example: If you name a function showDisplay( ) then you must use the same name later in the code when you call that function.  

CORRECT:  
onclick = "showDisplay( );"

BROKEN:  
onclick  = "showdisplay( );"     // UPPER/lower case matter
onclick  = "ShowDisplay( );"     // UPPER/lower case still matter
onclick  = "showDsplay( );"      // Spelling matters too.
on click = "showDisplay( );"     // on click is not a valid name (no spaces)
onclick  = "show Display( );"    // show Display( ) is not a valid name (no spaces)
 

If you get an error message telling you that an object cannot be found, most likely it is misspelled somewhere in the code.

Why is the semi-colon inside the quotation marks? These examples would be used as part of XHTML code for a button.

Here is the complete code:
<button value="Click to View the Display" onclick = "showDisplay( );" />

The onclick = " " is an attribute that adds information to the <button> tag. When using an attribute like this you can list JavaScript code directly and you don't have to enclose the JavaScript with a <script> tag. The browser knows automatically that if the JavaScript is inside an onclick = " " attribute that it is JavaScript.

The quotes in this case are enclosing the entire value of the attribute onclick = " ".
The semi-colon ";" is telling the browser that that is the end of the actual JavaScript code.

# RULE 4 - No HTML code inside of the <script> element.

You can't put HTML/XHTML commands or HTML comment markers inside of the <script></script> element.

This is an HTML comment:
   <!-- This is the comment marker for XHTML -->

These are the only comment markers you can use inside of the <script> element:
   // This is the comment marker for single line JavaScript code

   /* This is the comment marker for
                  multi-line JavaScript code (and CSS) */

# RULE 5 - External JavaScript files can only contain JavaScript.

If you see a < inside an external JavaScript file major alarms and explosions should instantly occur inside your brain.

JavaScript does not like HTML code! If you are going to include HTML code inside your JavaScript you have to "hide" it by putting it inside a string - by putting double quotes around it.

Here is an example of valid JavaScript code:

document.write("This will output a horizontal rule." + "<hr />");

Notice that the text and the HTML code are all inside double quotes.

# RULE 6 - You can't write JavaScript code outside of the <script> element.

 You can't use JavaScript code outside of a <script></script> element.

You tell the browser to put its "JavaScript" hat on by using the <script> element. Until you do that the browser is going to be thinking (and dreaming) in HTML or XHTML.

The only exception to this is when you have an event such as the click event on a button. The browser knows when it sees an event to put its JavaScript hat on whenever that even happens.

For example:

<button onClick = "alert("You clicked the button");"  value = "Click the button for a message" />

The code inside of the onClick = "  " attribute will run as if it was inside a <script> element.

SOURCE: HTTP://WWW.W3SCHOOLS.COM/JSREF/EVENT_ONCLICK.ASP

# RULE 7 - "Strings have Quotes" - Variables Don't.

"Strings have quotation marks" around them, variables don't.

For example: “myVariable=5+7” is a string of characters,
while myVariable =5+7 will put the value of 12 into the variable called myVariable.

A string is hard-coded into the program. It will always display on the web page showing the exact same characters that appear inside the quotes.

A variable changes. It doesn't display on the web page, only it's contents. If you think of a variable as a bucket or pail, then you can imagine the contents of the variable being poured onto the web page displaying the value of whatever is inside the bucket.

# RULE 8 - If You Start Something You Have To Finish It.

Every open curly brace  { needs a matching closing curly brace }.

Every open parenthesis ( needs a matching closing parenthesis ).

Every quotation mark " needs a matching closing quotation mark ".

## Examples: 

CORRECT:  document.write("The " + counter + "name entered is: " + userInputVariable + "<br />");
BROKEN:     document.write("The     counter + " name entered is: " + userInputVariable "<br />)";
BROKEN:     document.write("The + counter + "name entered is: " + userInputVariable "<br />");     

HINT: Look for the pattern:  start quote/end quote/glue/variable/glue/start quote/end quote etc.
                                          "  " + var + " " + var + " " + var + " ";
Solutions to the broken lines:
The first broken line is missing a closing quotation after "The " and a concatenation + operator. The closing quotation at the end of the line should be inside of the parenthesis:  "<br />");  Notice how the quotations have to be inside the pair of parenthesis. They can't overlap.

The second broken line is missing a closing quote after "The " and a concatenation + operator after the variable userInputVariable.

# RULE 9 - Use White Space as Needed.

Use white space as needed.

JavaScript ignores extra white space (unless it is inside of a string). 

You can add extra space to make the code easier to read. 

For example, the first is easier for human programmers to read:
  myCityZip = mankato + 56001;

  myCityZip=mankato+56001;

# Conclusion.

I know this rules but i think is best to keep them in mind as a begginer in programming. 





