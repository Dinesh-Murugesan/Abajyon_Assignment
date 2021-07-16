CREATE SCHEMA Abajyon;

create table Abajyon.Questions (questionId int primary key Identity(1,1) not null, question varchar(MAX) not null,
answer varchar(30) not null, difficulty int null, language varchar(15) null)

create table Abajyon.Choices (questionId int FOREIGN KEY REFERENCES Abajyon.Questions(questionId) not null, choice varchar(30) not null)
