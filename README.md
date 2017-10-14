![Imgur](https://i.imgur.com/6UtwWyX.png)

# Work Tracking System

## Background

At my former office, we tracked all work assignments via an Access database that was woefully inefficient. We called it the Work Tracking System.  As my first project at web development bootcamp, I endeavored to build a better version of that application. 

Bootcamp credit:  **The Redwood Code Academy**  [Redwood Code Academy](https://redwoodcodeacademy.com/) 

## Note

This version of the Work Tracking System is a primitive version with only enough usability to prove the concept viable. 

This code is simply for reference.  API addresses and connection strings have been removed, so the code, if implemented, has little functionality.  

## Screenshots

![Imgur](https://i.imgur.com/4qAdkTG.jpg)
![Imgur](https://i.imgur.com/1LoOQox.jpg)
![Imgur](https://i.imgur.com/XxSLlgy.jpg)
![Imgur](https://i.imgur.com/AKDef9x.jpg)
![Imgur](https://i.imgur.com/5ZP7PI5.jpg)

## Technologies

+ HTML
+ CSS
+ JavaScript
+ AngularJS
+ C#
+ .NET
+ SQL Server

## Definitions

+ "Correspondence Type": This is a legacy term from my office's original Work Tracking System and it is the term they used to describe what, in other words, are "work assignments". 

+ "Records": Every Correspondence Type when assigned, given a due date, etc is saved as a Record in the database. 

+ "Branches": My former office had several branches with nomenlature (i.e., "120L") and names (i.e. "Airframe Branch").

+ "Administrative and Technical Support": The only members of the staff, along with management with authority to update records in the Work Tracking System.  Note: Currently, the sections of the app for the Administrative / Technical Support Staff and Management are the same.

+ "Flowtime": Every Correspondence Type has its own specific Flowtime.  The Flowtime is the amount of time allowed for the employee to complete the assignment.  The Flowtime is added to the date that the Record is entered into the Work Tracking System to populate the deadline.  

+ "WTS Number": Every record in the database has a unique identifier (known to the users, and different from the Record index in the database).  This is the WTS Number.  The WTS Number is formatted as BRANCH/SEQUENTIAL NUMBER/YEAR.  Note: The year is not currently designed to update programmatically.  Users can search for Records via the WTS Number. 

## Use Case

Employees can be assigned tasks with deadlines and all staff can search for assigned tasks.
Next update will include: 
+ User Authentication
+ Reports   

## Credit

All code, and everything associated with the code, created by Steve Bogucki. sbogucki AT mail DOT usf DOT edu. 
