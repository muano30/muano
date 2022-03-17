---
Layout: 
Title: "Creating table in SQL"
date: "2022-03-16"
---

# Introduction.

I watched a video about all the important thing in sql with tumisang, we didn't finish it yet it was a four hour video and we manage to watch it for Two hours, but on it i learn a lot of things, creating a table, and the most important thing creating a table. How to insert a records in a table but i will focus on how we create a table in sql.

# Body.

## Exaplanation.

This is how we insert table in sql:

CREATE TABLE person
(
    id INT,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    gender VARCHAR(255),
    date_of_birth TIMESTAMP,
   
);

This is how we create a table in sql,

Person is the name of the table that we have created with id INT stand for integer meaning the id will only be numbers, first name with VARCHAR(100) meaning the first name will take only 100 characters same as lastName and gender they will take character specified in the VARCHAR().

The date of bith with TIMESTAMP will have to change it to DATE because we loooking for DATE only not the time the person was born.

The table have to look like this: 


CREATE TABLE person
(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    gender VARCHAR(255) NOT NULL,
    date_of_birth DATE,
   
);


BIGSERIAL will generate new id eveytime we add a new person in our table meaning will do auto increament by themself, and null as we know it means the firstName, lastName, and gender must not be empty.


This are some of the command to use in the terminal i have learn while whatching the video:

1. To check all the data base we use this command:  \l

2. To clear the screen we use this command: Ctrl + l

3. For  describe we use this command: \d

4. To see the actual type we use this command: \d person


# Conclusion.

If you have time you can learn more about this by watching the video on this link. https://www.youtube.com/watch?v=5hzZtqCNQKk



