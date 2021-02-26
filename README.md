### How to launch Badger Bytes Admin for the first time

First, clone this repository ```git clone https://aidank1234/BadgerBytesClient.git```

Next, ```cd``` into the directory ```BadgerBytesClient``` wherever you cloned it

Once you do that, run ```npm install``` to install needed dependencies

Run ```npm start``` to start the application on port 3000

If you try to compile and run into issues with DatePicker dependencies, run the command ```npm install date-fns --save``` and try to compile again

Go to ```http://localhost:3000/signupadmin``` to get to the first page of the application for admins

Go to ```http://localhost:3000/signupstaff``` to get to the first page of the application for staff

Since we don't want admins or staff making their own accounts, I have set up some users for us to use in the database:  <br />
  &nbsp;Admin:  <br />
    &nbsp;&nbsp;Username: admin  <br />
    &nbsp;&nbsp;Password: password  <br />
  &nbsp;Staff:  <br />
    &nbsp;&nbsp;Username: staff  <br />
    &nbsp;&nbsp;Password: password  <br />
