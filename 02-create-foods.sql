-- -----------------------------------------------------
-- Schema foodbox
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `foodbox`;

CREATE SCHEMA `foodbox`;
USE `foodbox` ;

-- -----------------------------------------------------
-- Table `foodbox`.`food_cuisine`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `foodbox`.`food_cuisine` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `cuisine_name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE=InnoDB
AUTO_INCREMENT = 1;

-- -----------------------------------------------------
-- Table `foodbox`.`food`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `foodbox`.`food` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) DEFAULT NULL,
  `description` VARCHAR(255) DEFAULT NULL,
  `unit_price` DECIMAL(13,2) DEFAULT NULL,
  `image_url` VARCHAR(255) DEFAULT NULL,
  `active` BIT DEFAULT 1,
  `units_in_stock` INT(11) DEFAULT NULL,
   `date_created` DATETIME(6) DEFAULT NULL,
  `last_updated` DATETIME(6) DEFAULT NULL,
  `cuisine_id` BIGINT(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cuisine` (`cuisine_id`),
  CONSTRAINT `fk_cuisine` FOREIGN KEY (`cuisine_id`) REFERENCES `food_cuisine` (`id`)
) 
ENGINE=InnoDB
AUTO_INCREMENT = 1;


-- -----------------------------------------------------
-- Add sample data
-- -----------------------------------------------------

INSERT INTO food_cuisine(cuisine_name) VALUES ('North Indian');
INSERT INTO food_cuisine(cuisine_name) VALUES ('South Indian');
INSERT INTO food_cuisine(cuisine_name) VALUES ('Chinese');
INSERT INTO food_cuisine(cuisine_name) VALUES ('Italian');

INSERT INTO food ( name, description, image_url, active, units_in_stock,
unit_price, cuisine_id, date_created)
VALUES ( 'Aloo paratha', 'delicious paratha',
'assets/images/foods/north-indian/aloo-paratha.jpg'
,1,100,20,1, NOW());

INSERT INTO food ( name, description, image_url, active, units_in_stock,
unit_price, cuisine_id, date_created)
VALUES ( 'Papdi chaat', 'Lovely indian chaat',
'assets/images/foods/north-indian/papdi-chat.jpg'
,1,100,30,1, NOW());

INSERT INTO food ( name, description, image_url, active, units_in_stock,
unit_price, cuisine_id, date_created)
VALUES ( 'kadai paneer', 'Paneer that taste wonderful',
'assets/images/foods/north-indian/kadai-paneer.jpg'
,1,100,70,1, NOW());



INSERT INTO food ( name, description, image_url, active, units_in_stock,
unit_price, cuisine_id, date_created)
VALUES ( 'tawa roti', 'Healthy food',
'assets/images/foods/north-indian/tawa-roti.jpg'
,1,100,6,1, NOW());

INSERT INTO food ( name, description, image_url, active, units_in_stock,
unit_price, cuisine_id, date_created)
VALUES ( 'Pindi chole', 'Spicy mixer',
'assets/images/foods/north-indian/pindi-chole.jpg'
,1,100,50,1, NOW());

-- --------------------------------------------------------------------------------
INSERT INTO food ( name, description, image_url, active, units_in_stock,
unit_price, cuisine_id, date_created)
VALUES ( 'Idli', 'Idli that taste wonderful',
'assets/images/foods/south-indian/idli.jpg'
,1,100,20,2, NOW());

INSERT INTO food ( name, description, image_url, active, units_in_stock,
unit_price, cuisine_id, date_created)
VALUES ( 'Dosa', 'Dosa that taste wonderful',
'assets/images/foods/south-indian/dosa.jpg'
,1,100,70,2, NOW());

INSERT INTO food ( name, description, image_url, active, units_in_stock,
unit_price, cuisine_id, date_created)
VALUES ( 'Sambhar', 'Sambhar that taste wonderful',
'assets/images/foods/south-indian/sambhar.jpg'
,1,100,50,2, NOW());

INSERT INTO food ( name, description, image_url, active, units_in_stock,
unit_price, cuisine_id, date_created)
VALUES ( 'Rasam', 'Rasam that taste wonderful',
'assets/images/foods/south-indian/rasam.jpg'
,1,100,40,2, NOW());


INSERT INTO food ( name, description, image_url, active, units_in_stock,
unit_price, cuisine_id, date_created)
VALUES ( 'Payasam', 'Payasam that taste wonderful',
'assets/images/foods/south-indian/payasam.jpg'
,1,100,30,2, NOW());

-- ----------------------------------------------------------------------------------
INSERT INTO food ( name, description, image_url, active, units_in_stock,
unit_price, cuisine_id, date_created)
VALUES ( 'Chowmein', 'Chowmein that taste wonderful',
'assets/images/foods/Chinese/chowein.jpg'
,1,100,25,3, NOW());

INSERT INTO food ( name, description, image_url, active, units_in_stock,
unit_price, cuisine_id, date_created)
VALUES ( 'Noodles', 'Noodles that taste wonderful',
'assets/images/foods/Chinese/noodles.jpg'
,1,100,20,3, NOW());

INSERT INTO food ( name, description, image_url, active, units_in_stock,
unit_price, cuisine_id, date_created)
VALUES ( 'Momos', 'Momos that taste wonderful',
'assets/images/foods/Chinese/momos.jpg'
,1,100,40,3, NOW());

INSERT INTO food ( name, description, image_url, active, units_in_stock,
unit_price, cuisine_id, date_created)
VALUES ( 'Chilli Potato', 'Chilli Potato that taste wonderful',
'assets/images/foods/Chinese/chilli-potato.jpg'
,1,100,60,3, NOW());

INSERT INTO food ( name, description, image_url, active, units_in_stock,
unit_price, cuisine_id, date_created)
VALUES ( 'Chilli Paneer', 'Chilli Paneer that taste wonderful',
'assets/images/foods/Chinese/Chilli-Paneer.jpg'
,1,100,80,3, NOW());

-- --------------------------------------------------------------------------------------

INSERT INTO food ( name, description, image_url, active, units_in_stock,
unit_price, cuisine_id, date_created)
VALUES ( 'Pasta', 'Pasta that taste wonderful',
'assets/images/foods/italian/pasta.jpg'
,1,100,60,4, NOW());

INSERT INTO food ( name, description, image_url, active, units_in_stock,
unit_price, cuisine_id, date_created)
VALUES ( 'Macroni', 'Macroni that taste wonderful',
'assets/images/foods/italian/macroni.jpg'
,1,100,50,4, NOW());


INSERT INTO food ( name, description, image_url, active, units_in_stock,
unit_price, cuisine_id, date_created)
VALUES ( 'Pizza', 'Pizza that taste wonderful',
'assets/images/foods/italian/pizza.jpg'
,1,100,100,4, NOW());


INSERT INTO food ( name, description, image_url, active, units_in_stock,
unit_price, cuisine_id, date_created)
VALUES ( 'Choco-lava', 'Choco-lava that taste wonderful',
'assets/images/foods/italian/choco-lava.jpg'
,1,100,60,4, NOW());


INSERT INTO food ( name, description, image_url, active, units_in_stock,
unit_price, cuisine_id, date_created)
VALUES ( 'Sandwich', 'Sandwich that taste wonderful',
'assets/images/foods/italian/sandwich.jpg'
,1,100,35,4, NOW());



