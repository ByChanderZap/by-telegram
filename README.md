# by-Telegram

by-Telegram is my basic "telegram" 

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install.

```bash
npm install
```


## PRE CONFIGURATION
Im using mongoose on [mongodb atlas](https://cloud.mongodb.com/).

Steps to configurate mongodb atlas and get your db and connection: 
  - Create a project
  - Create a cluster
  - Create a new user
  - Clic on 'conect' option on your clusters view
  - Select 'connect your aplication'
  - You will see something like: "mongodb+srv://alexander-db-user:PASSWORD@cluster0.aewfe.mongodb.net/DBNAME?retryWrites=true&w=majority"
  - replace PASSWORD with the password for the db-user
  - Replace DBNAME with the name of the database that connections will use by default
  
### Now on the root of the project create a file with the name: 'dbkeys.js' and export that: 

```javascript
const dbURL = 'YOUR_URL_SHOULD_BE_HERE'

module.exports = {
    dbURL: dbURL
};
```
i recommend you hide this file on your .gitignore =D 


## Usage devMode

```bash
npm run dev
```

## Contributing
Pull requests are welcome!. And if you have an idea for a feature and dont have time to do this, feel free to open a issue!

## License
[MIT](https://choosealicense.com/licenses/mit/)
