-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: pettinder
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(25) NOT NULL,
  `password` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `description` varchar(200) NOT NULL,
  `userPic` varchar(250) NOT NULL,
  `street` varchar(25) DEFAULT NULL,
  `city` varchar(25) NOT NULL,
  `state` varchar(25) DEFAULT NULL,
  `country` varchar(25) NOT NULL,
  `code` varchar(10) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `owner` tinyint(1) DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL,
  `petname` varchar(20) DEFAULT NULL,
  `petPic` varchar(250) DEFAULT NULL,
  `playdate` tinyint(1) DEFAULT NULL,
  `adoption` tinyint(1) DEFAULT NULL,
  `date` tinyint(1) DEFAULT NULL,
  `services` tinyint(1) DEFAULT NULL,
  `groomer` tinyint(1) DEFAULT NULL,
  `walker` tinyint(1) DEFAULT NULL,
  `trainer` tinyint(1) DEFAULT NULL,
  `sitter` tinyint(1) DEFAULT NULL,
  `daycare` tinyint(1) DEFAULT NULL,
  `foods` tinyint(1) DEFAULT NULL,
  `products` tinyint(1) DEFAULT NULL,
  `mobileClinic` tinyint(1) DEFAULT NULL,
  `veterinarian` tinyint(1) DEFAULT NULL,
  `radioShow` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'user1@gmail.com','pass1','user1','hi, i\'m user1','man-with-large-dog.jpg','barrington street','halifax','nova scotia','canada','b3h4r4','9021234567',1,'dog','dogone','pet-1.jpg',1,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2,'user2@gmail.com','pass2','user2','Hi, I\'m user2','man-with-two-dogs.jpg','spring garden road','halifax','nova scotia','canada','b3h1y3','9022345678',1,'dog','dogtwo','pet-2.jpg',1,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,'user3@gmail.com','pass3','user3','Hi, I\'m user3','woman-walking-two-dogs.jpg','quinpool road','halifax','nova scotia','canada','','9023456789',1,'cat','catone','pet-3.jpg',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(4,'user4@gmail.com','pass4','user4','Hi, I\'m user4','testimonial-one.jpg','rue pierre corneille','laval','quebec','canada','','5141234567',NULL,NULL,NULL,NULL,NULL,NULL,1,1,NULL,1,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL),(5,'user5@gmail.com','pass5','user5','Hi, I\'m user5','testimonial-two.jpg','rue st-catherine','montreal','quebec','canada','','5142345678',1,'cat','cattwo','shiba-inu-1.jpg',1,NULL,1,1,1,NULL,1,NULL,1,NULL,NULL,NULL,NULL,NULL),(6,'user6@gmail.com','pass6','user6','Hi, I\'m user6','testimonial-three.jpg','avenue de vimy','outremont','quebec','canada','','5144567890',NULL,NULL,NULL,NULL,NULL,NULL,1,1,NULL,NULL,NULL,NULL,NULL,1,1,1,1,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-02 23:00:30
