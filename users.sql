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
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_name` varchar(50) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `user_image_url` varchar(2083) DEFAULT NULL,
  `lf_date` tinyint DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'user1@gmail.com','$2b$10$zw52Et5ZWjotBAPQrhEw6uA8eP7/o29T9v9O2NX4jJY8ZalzxalUG','user1','Hi, I\'m \"user 1\".','man-with-large-dog.jpg',1,'2022-02-05 12:34:33'),(2,'user2@gmail.com','$2b$10$6iOQe.r2St1qHoEGE7cNvek6VvhJUTOSHLMxwLp9XT3GL6LMcCKCa','user2','Hi, I\'m \"user2\".','man-with-two-dogs.jpg',1,'2022-02-05 12:37:15'),(3,'user3@gmail.com','$2b$10$xhJJMsVEFkF4CjYwLiTbMuh11hUNx3DfWsb8qnIT9NPA3LCRcHvqO','user3','Hi, I\'m \"user 3\".','testimonial-one.jpg',1,'2022-02-05 12:43:41'),(4,'user4@gmail.com','$2b$10$32d88MTZQX0x7Ai3qA1HuOTfzfSN6YkT30CDQ9rl/EW6ONrRT0DMi','user4','Hi, I\'m user4','testimonial-three.jpg',0,'2022-02-05 12:48:10'),(5,'user5@gmail.com','$2b$10$0cJ4JzAdOEUo9nNFdzr4...mhMPYBIb.gCDincUfbIy.hulPuN8Ru','user5','Hi, i\'m user 5','testimonial-two.jpg',1,'2022-02-05 12:51:48');
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

-- Dump completed on 2022-02-05 15:55:32
