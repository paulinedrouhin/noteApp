**Notes Application using NodeJs**
======
This project aims to develop an API running using NodeJS for a Notes application(like Evernote).<br />
The API must provide a way to manipulate authors and associate notes to them.

**Database Installation** 
----------
_This project uses a MySQL database. To initialize it, I suggest you use a docker container._<br />
_If you'd rather use your local MySQL, jump to "MySQL Database initialization"_

**Docker Installation** 
https://docs.docker.com/install/linux/docker-ce/ubuntu/

**MySQL Docker Image Installation** 
```
docker run --name mysqldb -e MYSQL_ROOT_PASSWORD=<yourPassword>, -d -p 3306:3306 mysql:5.7  
docker start mysqldb
```

_**Note**: If MySQL's already installed and running on your machine, you might want to stop it by using :_
```
sudo service mysql stop
```
_or use a different port than 3306 for your MySQL image_

**MySQL Database initialization** 
To create our database in MySQL, run the following commands : 

```
CREATE DATABASE alsid;
```

```
USE alsid;
```

```
CREATE TABLE author(id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, name VARCHAR(100));
```

```
CREATE TABLE note(id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, title VARCHAR(100), content VARCHAR(1000), author_id int, FOREIGN KEY(author_id) REFERENCES author(id));
```


**Project Installation**
--------
**Installation**
```
git clone https://github.com/paulinedrouhin/noteApp.git
npm install
```

**Project connexion to database**
To connect the project to our database, you need to create a .env file at the root of the project that contains:
```
DB_HOST=localhost
DB_USER=root
DB_PWD=<yourPassword>,
DB_DB=alsid
```

**Development**
```
npm run dev
```

**Production**
```
npm run build
```

**Documentation**
----------
**Swagger/OpenAPI** 
A swagger documentation is provided to list the different endpoints of this project. <br />
You can access it using the http://localhost:4000/api-docs url. 

