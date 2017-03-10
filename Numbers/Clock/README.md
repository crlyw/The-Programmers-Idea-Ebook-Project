#Title: Alarm Clock
####Difficulty: 3
####Description:
Create a program which shows the current time using a label. Allow the user to
select a given time and specify a message. When the clock reaches that time, have it pop up a
message to the user reminding them of their message and/or play a specific sound file.

####Tips:
You will need to be able to get the current time and display it to the user. You will also
need a mechanism for saving an “event” which has a specific time and an associated message.
Try creating a custom class to hold this information. On each tick of the clock, compare the time
to each of the saved scheduled events. If one matches, show the associated message. Be sure
to check for multiple events for a given time and possibly throw away any old events (expired) in
the system if they are not needed.

####Added Difficulty(Optional):
Make the clock display graphical using pictures for the numbers. You could
also integrate a database to keep track of multiple events much easier. Add an icon to your
messages and possibly specify which sound file is to played as the alarm. Remind the user if an
event is “overdue” and by how long.

####Technology Used
1. ReactJS
2. ECMAScript 6
3. HTML5/CSS3
