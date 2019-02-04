# simple-app-nodejs-mysql-ejs

###This is a simple Node JS. It displays data from your local mySQL database on to the web page

##How to run this app
1. Run 'npm install'. 
2. Put your MySQL root password in the 'connectionString' in app.js file.
3. Create a database and table using mysql commands. Change the corresponding names of table, db, columns etc according to your db.
4. The table structure that this project is using is as follows:

```$xslt
database name - sampleDB
table name - sample_table
structure -
+------+--------+-----------+------------+
| s_no | name   | country   | birth_date |
+------+--------+-----------+------------+
```

5. Now you can change the columns you want to display on the webpage. This project displays 'name' and 'country'. You can change accordingly in the file 'view.ejs'
4. Run 'npm app.js'.

##Open any internet browser and type the url 'localhost:3000' you can now see the data from your local db!
