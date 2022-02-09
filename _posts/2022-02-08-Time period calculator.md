---
Layout: 
Title: "Time period calculator app."
date: "2022-02-08"
---

# Introduction.

I was building the app that have to get the difference between two date and time, also if the user submit one date it will be calculated base on the current date and time. On this blog post i will share the biggest challenge i have faced when building this app and what i have learned building this app.

# Body.

## Explaination. 

Today i presented my app to other students, and i'm happy with the feedback that i got from other student cause they have shared whith me where i should improve when it comes to UI (User Interface) and EX (User Experience), i think this is one of the app that i have build focussing more on its functionality than UI and UX.

The biggest challenge i have faced is working with time convention after getting the time period difference, converting the number that i got to real time was not an easy thing to do. 

What i have learned is how to make the app know about the leap year in february which happens every four years but we have century which is one hundred year and is divisible by four, that means i have to also make sure that my app knows about the four hundred years, this is what i have done: var february = (endYears % 4 == 0 && endYear % 100 != 0 or endYear % 400 === 0 ? 29 : 28).


# Conclusion.

I enjoyed doing the presentation today, i have made some mistakes while presenting but one can only learn and grow from their mistakes.


