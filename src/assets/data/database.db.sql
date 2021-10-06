-- Publish Script
BEGIN TRANSACTION;
DROP TABLE IF EXISTS `data_log`;
CREATE TABLE IF NOT EXISTS data_log (
	dataLogId INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    FK_categoryId INTEGER NOT NULL,
	secs INTEGER DEFAULT 0,
	dateCreated TEXT NOT NULL
);
COMMIT;

BEGIN TRANSACTION;
DROP TABLE IF EXISTS `enum_category`;
CREATE TABLE IF NOT EXISTS enum_category (
	categoryId INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	categoryName TEXT NOT NULL,
    questingCompatible INTEGER DEFAULT 0
);
COMMIT;

INSERT INTO enum_category (categoryName, questingCompatible) VALUES ('Grinding', 1);
INSERT INTO enum_category (categoryName) VALUES ('Node War');
INSERT INTO enum_category (categoryName, questingCompatible) VALUES ('Gathering', 1);
INSERT INTO enum_category (categoryName, questingCompatible) VALUES ('Hunting', 1);
INSERT INTO enum_category (categoryName) VALUES ('Horse Training');
INSERT INTO enum_category (categoryName, questingCompatible) VALUES ('Bartering', 1);
INSERT INTO enum_category (categoryName) VALUES ('Questing');
INSERT INTO enum_category (categoryName, questingCompatible) VALUES ('RBF', 1);
INSERT INTO enum_category (categoryName) VALUES ('Scrolls');
INSERT INTO enum_category (categoryName, questingCompatible) VALUES ('Fishing', 1);