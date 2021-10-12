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
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Cron Castle', 1, '14-17');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Goblin', 1, '12-15');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Padix Island', 1, '270');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Pirate Island', 1, '55-56');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Protty Cave', 1, '170');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Sycraia Underwater Ruins', 1, '230');
-- Serendia
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Altar Imp', 7, '16-18');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Biraghi Den', 7, '24-27');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Bloody Monastery', 7, '23-26');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Castle Ruins', 7, '18-21');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Orc Camp', 7, '23-26');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Swamp Fogan', 7, '21-24');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Swamp Naga', 7, '19-22');
-- Calpheon
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Bree Tree Ruins', 2, '32-34');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Catfishman Camp', 2, '49-51');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Hexe Sanctuary', 2, '50-52');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Karanda Ridge', 2, '26-29');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Keplan Mine', 2, '35-38');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Khuruto', 2, '27-31');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Marni''s Lab', 2, '40-43');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Mask Owl''s Forest', 2, '34-37');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Primal Giant Post', 2, '42-45');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Refugee Camp', 2, '30-32');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Rhutum Outstation', 2, '48-50');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Star''s End', 2, '260');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Treant Forest', 2, '49-51');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Troll', 2, '39-42');
-- Mediah
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Abandoned Iron Mine', 5, '70-90');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Elric Shrine', 5, '95-150');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedLevel) VALUES ('Hasrah Ancient Ruins', 5, '55-56');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Helms Post', 5, '90-110');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Manes Hideout', 5, '80-100');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Sausan Garrison', 5, '100-180');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Shultz Guard', 5, '240');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Soldier''s Cemetery', 5, '100-180');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Wandering Rogue Den', 5, '80-100');
-- Valencia
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Bashim Base', 8, '100');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Basilisk Den', 8, '190');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Cadry', 8, '140');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Centaurus Herd', 8, '190');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Crescent Shrine', 8, '140');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Desert Naga Temple', 8, '100');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Gahaz Bandit Lair', 8, '140');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP, afuaruSpawnable) VALUES ('Pila Ku Jail', 8, '210', 1);
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP, afuaruSpawnable) VALUES ('Roud Sulfer Mine', 8, '210', 1);
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Titium Valley (Fogan)', 8, '100');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Waragon Nest', 8, '165');
-- Kamasylvia
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Ash Forest', 4, '300');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Fadus Habitat', 4, '120-190');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP, afuaruSpawnable) VALUES ('Forest Ronaros Area', 4, '240', 1);
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Gyfin Rhasia Temple', 4, '270');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Manshaum Forest', 4, '240');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Mirumok Ruins', 4, '240');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Navarn Steppe', 4, '210');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Polly''s Forest', 4, '160');
-- Dreighan
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP, afuaruSpawnable) VALUES ('Blood Wolf Settlement', 3, '190', 1);
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP, afuaruSpawnable) VALUES ('Sherekhan Necropolis', 3, '210', 1);
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP, afuaruSpawnable) VALUES ('Tshira Ruins', 3, '140', 1);
-- O'dyllita
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Crypt of Resting Thoughts', 6, '310');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Olun''s Valley', 6, '300');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Thornwood Forest', 6, '250');
INSERT INTO enum_locations (locationName, FK_territoryId, recommendedAP) VALUES ('Tunkuta (Turo''s)', 6, '270');

-- TODO: Add Abanded Monestary (through update maybe?)
