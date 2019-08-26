# art-gallery
The gallery page for ArtCollectionWebsite, we are using React here!

### login to mysql
```$ cd /usr/local/mysql/bin```

```$ ./mysql -u root -p```

### start mysql
```$ cd /usr/local/mysql/support-files```

```$ ./mysql.server start```

### run spring server:
```$ cd server```
```$ mvn spring-boot:run```

### run nodejs server:
```$ npm start server```

### run nodejs server along with react:
```$ npm install && npm run dev```

### start react client solely:
```$ cd client```
```$ npm install && npm start```

#### when deploying on web, using HashRouter instead of BrowserRouter


#### when using remote IP to connect to server
- need to update IP address in constants.js & redeploy
- start client: ```$ npm install && npm start```
- to start server on aws: firstly start mysql: ```sudo service mysqld start```
- ```java -jar AuthServer.jar```
