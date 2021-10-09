-- Publish Script
BEGIN TRANSACTION;
DROP TABLE IF EXISTS `data_log`;
CREATE TABLE IF NOT EXISTS data_log (
	dataLogId INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    FK_locationId INTEGER NOT NULL,
	secs INTEGER DEFAULT 0,
	dateCreated TEXT NOT NULL
);
COMMIT;

-- Enums
BEGIN TRANSACTION;
DROP TABLE IF EXISTS `enum_locations`;
CREATE TABLE IF NOT EXISTS enum_locations (
	locationId INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	FK_territoryId INTEGER,
	locationName TEXT,
	recommendedLevel TEXT DEFAULT '',
	recommendedAP TEXT DEFAULT '',
	afuaruSpawnable INTEGER DEFAULT 0
);
COMMIT;

BEGIN TRANSACTION;
DROP TABLE IF EXISTS `enum_territory`;
CREATE TABLE IF NOT EXISTS enum_territory (
	territoryId INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	territoryName TEXT
);
COMMIT;


-- enum_territory
INSERT INTO enum_territory (territoryName) VALUES ('-');
INSERT INTO enum_territory (territoryName) VALUES ('Balenos');
INSERT INTO enum_territory (territoryName) VALUES ('Calpheon');
INSERT INTO enum_territory (territoryName) VALUES ('Dreighan');
INSERT INTO enum_territory (territoryName) VALUES ('Kamasylvia');
INSERT INTO enum_territory (territoryName) VALUES ('Mediah');
INSERT INTO enum_territory (territoryName) VALUES ('O''dyllita');
INSERT INTO enum_territory (territoryName) VALUES ('Serendia');
INSERT INTO enum_territory (territoryName) VALUES ('Valencia');

-- enum_locations
-- Balenos
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Cron Castle', 2, '14-17');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Goblin', 2, '12-15');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Padix Island', 2, '270');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Pirate Island', 2, '55-56');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Protty Cave', 2, '170');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Sycraia Underwater Ruins', 2, '230');
-- Serendia
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Altar Imp', 8, '16-18');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Biraghi Den', 8, '24-27');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Bloody Monastery', 8, '23-26');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Castle Ruins', 8, '18-21');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Orc Camp', 8, '23-26');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Swamp Fogan', 8, '21-24');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Swamp Naga', 8, '19-22');
-- Calpheon
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Bree Tree Ruins', 3, '32-34');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Catfishman Camp', 3, '49-51');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Hexe Sanctuary', 3, '50-52');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Karanda Ridge', 3, '26-29');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Keplan Mine', 3, '35-38');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Khuruto', 3, '27-31');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Marni''s Lab', 3, '40-43');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Mask Owl''s Forest', 3, '34-37');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Primal Giant Post', 3, '42-45');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Refugee Camp', 3, '30-32');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Rhutum Outstation', 3, '48-50');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Star''s End', 3, '260');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Treant Forest', 3, '49-51');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Troll', 3, '39-42');
-- Mediah
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Abandoned Iron Mine', 6, '70-90');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Elric Shrine', 6, '95-150');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Hasrah Ancient Ruins', 6, '55-56');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Helms Post', 6, '90-110');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Manes Hideout', 6, '80-100');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Sausan Garrison', 6, '100-180');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Shultz Guard', 6, '240');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Soldier''s Cemetery', 6, '100-180');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Wandering Rogue Den', 6, '80-100');
-- Valencia
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Bashim Base', 9, '100');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Basilisk Den', 9, '190');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Cadry', 9, '140');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Centaurus Herd', 9, '190');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Crescent Shrine', 9, '140');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Desert Naga Temple', 9, '100');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Gahaz Bandit Lair', 9, '140');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP, afuaruSpawnable) VALUES ('Pila Ku Jail', 9, '210', 1);
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP, afuaruSpawnable) VALUES ('Roud Sulfer Mine', 9, '210', 1);
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Titium Valley (Fogan)', 9, '100');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Waragon Nest', 9, '165');
-- Kamasylvia
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Ash Forest', 5, '300');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Fadus Habitat', 5, '120-190');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP, afuaruSpawnable) VALUES ('Forest Ronaros Area', 5, '240', 1);
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Gyfin Rhasia Temple', 5, '270');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Manshaum Forest', 5, '240');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Mirumok Ruins', 5, '240');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Navarn Steppe', 5, '210');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Polly''s Forest', 5, '160');
-- Dreighan
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP, afuaruSpawnable) VALUES ('Blood Wolf Settlement', 4, '190', 1);
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP, afuaruSpawnable) VALUES ('Sherekhan Necropolis', 4, '210', 1);
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP, afuaruSpawnable) VALUES ('Tshira Ruins', 4, '140', 1);
-- O'dyllita
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Crypt of Resting Thoughts', 7, '310');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Olun''s Valley', 7, '300');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Thornwood Forest', 7, '250');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Tunkuta (Turo''s)', 7, '270');
