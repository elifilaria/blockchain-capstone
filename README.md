# CSCI 390 Senior Capstone Seminar
Mazen Abusharkh, Syver Johansen, Deepak Shah, Elif Yurtseven

## Block Chain Implementation for Online Voting
Spring 2018

## To run the app:


### Step 1:

Softwares that need to be pre-installed to start the application:
Ganache: A Personal Blockchain for Ethereum Development which can be downloaded from http://truffleframework.com/ganache/ and here is the source code for Ganache on github. 
Node and npm: Download and install latest version of Node from https://nodejs.org/en/. Node comes with npm so installing Node automatically installs npm. You can check by typing:
```
node -v
npm -v
```

### Step 2:

Clone the DApp at https://stogit.cs.stolaf.edu/cap-s18/bc and download the entire bc folder to your computer. This can be done by typing
```
git clone https://stogit.cs.stolaf.edu/cap-s18/bc.git
```

Then run the following commands in the bc directory one after another
```
npm install -g truffle 
npm install 
truffle migrate --reset
truffle compile
npm build
npm run dev
```
If everything above correctly worked, you will see a webpack compiled successfully message (as below) and the DApp can then be launched by visiting localhost:8080
<img src="/app/images/terminal.PNG " width="40%">

Below is the screenshot of the application accessed at localhost:8080:

![alt text](/app/images/voting_demo.PNG "Screenshot2")

If you can see this page, congratulations! You can now vote for the candidates by clicking on “Vote.”

