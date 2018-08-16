## Install NodeJS
[Official Page](https://nodejs.org/en/download/)

## Install Angular CLI
[Official Page](https://cli.angular.io/)
- `npm install -g @angular/cli`

## Install Ionic 3 / Cordova
[Official Page](https://ionicframework.com/getting-started#cli)
- `npm install -g ionic`
- `npm install -g cordova`

## Install MongoDB: 
- Mongo Download - [Community Server](https://www.mongodb.com/download-center?jmp=nav#community)
- [Installation Instructions](https://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows?_ga=2.77080848.422571604.1534379806-151096025.1534211352)
- MongoDocs: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
- Mongo normally creates a folder called \data\db\ on the driver it was installed by default, for example: D:\data\db

# Steps after MSI installer
- Points all the paths on the drive you want to install: Main installation, Data, Logs
- Add the bin folder to the PATH variable: "D:\Arquivos de Programas\MongoDB\Server\4.0\bin";
- Enter the bin directory;
- Created a folder inside "D:\Arquivos de Programas\MongoDB\Server\4.0\realdata\db"
- Gave permission of Full Access Control to the directory created for all users of the computer;
- Run: ```D:\Arquivos de Programas\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="D:\Arquivos de Programas\MongoDB\Server\4.0\realdata\db"```
- Or simple run: ```mongod --dbpath="D:\Arquivos de Programas\MongoDB\Server\4.0\realdata\db"```
- Port 27017 is going to be ready and listening

## Links
- Ionic Creator: https://creator.ionic.io/app/dashboard/projects 
- Tutorials: https://ionicframework.com/docs/intro/tutorial/
