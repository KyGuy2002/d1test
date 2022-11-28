DROP TABLE IF EXISTS Shops;
DROP TABLE IF EXISTS Users;

CREATE TABLE Users
(
    UserId INTEGER NOT NULL,
    Username VARCHAR(30) NOT NULL UNIQUE,
    Email VARCHAR(60) NOT NULL UNIQUE,
    Coins INTEGER NOT NULL DEFAULT 100,

    PRIMARY KEY (UserId)
);

CREATE TABLE Shops
(
    ShopId INTEGER NOT NULL,
    UserId INTEGER NOT NULL,
    ShopName VARCHAR(30) NOT NULL UNIQUE,

    PRIMARY KEY (ShopId),
    FOREIGN KEY (UserId) REFERENCES Users(UserId)
);

INSERT INTO Users (Username, Email) VALUES ('Bob', 'bob@bobsfurniture.net');
INSERT INTO Users (Username, Email) VALUES ('Joe', 'joe@joemama.edu');
INSERT INTO Users (Username, Email) VALUES ('Jeff', 'jeff@gmail.com');

INSERT INTO Shops (UserId, ShopName) VALUES (1, 'Bobs Discount Furniture');
INSERT INTO Shops (UserId, ShopName) VALUES (2, 'Joes Diner');
INSERT INTO Shops (UserId, ShopName) VALUES (2, 'Joeys office supplies');