DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS strengths_weakness;

CREATE TABLE students (
id SERIAL PRIMARY KEY,
name VARCHAR (255) UNIQUE,
description VARCHAR(255),
created_at TIMESTAMP NOT NULL DEFAULT NOW()
); 

CREATE TABLE strengths_weakness (
id SERIAL PRIMARY KEY,
content text,
created_at TIMESTAMP NOT NULL DEFAULT NOW()
); 
 

