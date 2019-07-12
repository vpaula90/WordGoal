/* Create and use the starwars db */
DROP DATABASE IF EXISTS wordgoal_db;
CREATE DATABASE wordgoal_db;
USE wordgoal_db;


/* Create a table for all teachers */
CREATE TABLE teachers (
	id INT( 11 ) AUTO_INCREMENT NOT NULL,
	last_name VARCHAR (255) NOT NULL,
    first_name VARCHAR (255) NOT NULL,
    homeroom_id VARCHAR ( 255) NOT NULL,
    username VARCHAR (255) NOT NULL,
    password VARCHAR (255) NOT NULL,
    grade_level INT (255) NOT NULL,
    createdAt DATETIME NOT NULL,    
    updatedAt DATETIME NOT NULL, 
	PRIMARY KEY ( id )
);


/* Create a table for all students */
CREATE TABLE students (
	id INT( 11 ) AUTO_INCREMENT NOT NULL,
	last_name VARCHAR( 255) NOT NULL,
    first_name VARCHAR( 255) NOT NULL,
    homeroom_id VARCHAR( 255) NOT NULL,
    grade_level INT (255) NOT NULL,
    word_goal INT (255) NOT NULL,
    word_count INT (255) NOT NULL,
    createdAt DATETIME NOT NULL,    
    updatedAt DATETIME NOT NULL, 

	PRIMARY KEY ( id )
);


 CREATE TABLE  Users (
    id INTEGER NOT NULL auto_increment,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL, 
    createdAt DATETIME NOT NULL,    
    updatedAt DATETIME NOT NULL, 
    PRIMARY KEY (id)

 );