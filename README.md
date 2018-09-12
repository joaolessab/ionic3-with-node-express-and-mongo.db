# Install NodeJS
[Official Page](https://nodejs.org/en/download/)

# Install Angular CLI
[Official Page](https://cli.angular.io/)
- `npm install -g @angular/cli`

# Install Ionic 3 / Cordova
[Official Page](https://ionicframework.com/getting-started#cli)
- `npm install -g ionic`
- `npm install -g cordova`

# Install MongoDB: 
- Mongo Download - [Community Server](https://www.mongodb.com/download-center?jmp=nav#community)
- [Installation Instructions](https://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows?_ga=2.77080848.422571604.1534379806-151096025.1534211352)
- MongoDocs: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

# Steps after MongoDB MSI installer and Running MongoDB
- Points all the paths on the drive you want to install: Main installation, Data, Logs
- Add the bin folder to the PATH variable: "D:\Arquivos de Programas\MongoDB\Server\4.0\bin";
- Enter the bin directory;
- Created a folder inside "D:\Arquivos de Programas\MongoDB\Server\4.0\realdata\db"
- Gave permission of Full Access Control to the directory created for all users of the computer;
- Run: ```D:\Arquivos de Programas\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="D:\Arquivos de Programas\MongoDB\Server\4.0\realdata\db"```
- Or simple run: ```mongod --dbpath="D:\Arquivos de Programas\MongoDB\Server\4.0\realdata\db"```
- Port 27017 is going to be ready and listening

# Install VS CODE
[Official Page](https://code.visualstudio.com/download)

# Running Ionic
```ionic serve -l```
- Go to: http://localhost:8200/

# Links
- Ionic Creator: https://creator.ionic.io/app/dashboard/projects 
- Tutorials: https://ionicframework.com/docs/intro/tutorial/

# Configuring Server and Running Node Express
- On the package.json of the rateapi (Node Project), we need to change the "main" tag and point to the .js file with the configurations of the server;
- We create a new file called "server.js" on the rateapi project;
- Inside the folder rateapi, type: ```npm install express body-parser mongoose express-session cookie-parser connect-mongo --save```
- After filling the server.js, open the "rateapi" folder on another terminal and type ```node server``` to run the Express;
- An error might be thrown because we need the MongoDB Server to be running;
- Run ```npm i -g nodemon``` inside the rateapi folder;

# Installing CORS
- Enter the rateapi directory via command line;
- Type ```npm install cors --save```;
- Add on the server.js file some configs (check the commit called "CORS Setup");
 
# Run Everything
## Terminal 1:
1. Enter the Mongo Bin directory "D:\Arquivos de Programas\MongoDB\Server\4.0\bin";
2. Run: ```mongod --dbpath="D:\Arquivos de Programas\MongoDB\Server\4.0\realdata\db"```;

## Terminal 2:
1. Enter the rateapi directory;
2. Run: ```nodemon server```;

## Terminal 3:
1. Enter the rateme (app) directory;
2. Run: ```ionic serve -l```;
3. Go to: http://localhost:8200/
