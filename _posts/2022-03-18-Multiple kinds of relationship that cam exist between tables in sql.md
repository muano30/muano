---
Layout: 
Title: "Multiple kinds of relationship that cam exist between tables in sql."
date: "2022-03-18"
---

# Introduction.

What i have learned in sql is that it allows us to have a relationship between tables, but what are those kinds of relationship that sql allows us to have in our tables, which is what i will share in this block post today.

# Body.

## Explanation.

### ONE TO ONE TABLE.

Two tables have one-to-one relationship if rows in the parent table are related to one and only one row in the child table.


How to write a one-to-one relationship in SQL?

students table

students id = 12345     
last name = Chicago
first name = Kevin

contact info table

student id = 12345
city = Pretoria
phonenumber = +2772 5540 538


In a one-to-one relationship, one record in a table is associated with one and only one record in another table. For example, in a school database, each student has only one student ID, and each student ID is assigned to only one person.

### ONE TO MANY TABLE.

In a many-to-many table relationship, a row in the parent table can relate to multiple rows in the child table, but each row in the child table can only relate to one row in the parent.

To establish a one-to-many relationship, the primary key of table A (the "one" table) must be the secondary key of table B (the "many" table).

please use the following link to learn more: https://fmhelp.filemaker.com/help/18/fmp/en/index.html#page/FMP_Help/one-to-many-relationships.html


### MANY TO MANY TABLE.

If rows in the parent table can relate to multiple rows in the child table, and vice versa, the two are said to have many-to-many relationship.

#### How to write a SQL query for many-to-many relationships?

Insert Into syntax:

Specifies both the column names and the values to be inserted. INSERT INTO table_name (column1, column2, column3, ...) VALUES (value1, value2, value3, ...);

If you are adding values for all the columns of the table, you do not need to specify the column names in the SQL query.


Use this link to learn more: https://fmhelp.filemaker.com/help/18/fmp/en/index.html#page/FMP_Help/many-to-many-relationships.html

# Conclusion.

The learning key in this blog post is about knowing how to have a relationship in tables with sql. I think the most important thing to know is how many tables or how many tables relationship with want to have. What i have also learn is that is best to design the database to see how the data will flow.