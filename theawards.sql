-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: dbms
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins` (
  `admin_id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES (1,'chanchala','12345'),(2,'nitya','12345');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `creators`
--

DROP TABLE IF EXISTS `creators`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `creators` (
  `creator_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `channel_name` varchar(100) DEFAULT NULL,
  `subscriber_count` int DEFAULT NULL,
  `photo_path` varchar(255) DEFAULT NULL,
  `field_id` int DEFAULT NULL,
  `description` varchar(455) DEFAULT NULL,
  `file` varchar(455) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `status` enum('approved','disapproved') DEFAULT 'approved',
  `password` varchar(255) DEFAULT '12345',
  PRIMARY KEY (`creator_id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `field_id` (`field_id`),
  CONSTRAINT `creators_ibfk_1` FOREIGN KEY (`field_id`) REFERENCES `fields` (`field_id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `creators`
--

LOCK TABLES `creators` WRITE;
/*!40000 ALTER TABLE `creators` DISABLE KEYS */;
INSERT INTO `creators` VALUES (27,'samapti banarjee','skincarewithsam',100000,'/uploads/image/1746218926244-426013549.jpg',1,'hii i am a beauty influencer please subscribe to my channel.','/uploads/pdf/1746218926248-812413745.pdf','sam@k','disapproved','$2b$10$FoT5yqrxK4RP/lazAn43yeAVAWxdvevmWLACh90MhSP4TFGvmAZS.'),(28,'rekha singh','be natural',1000000,'/uploads/image/1746219009271-20372588.jpg',1,'hii i am a beauty influencer please subscribe to my channel.',NULL,'rekha@k','approved','$2b$10$X2lfkSoWqo5znL0N8e2riekNdFHUA1YGuz.62YGLrJiwTjK7iZjJ.'),(29,'khushi mehla','skincare with khushi',30000,'/uploads/image/1746219086988-410866337.jpg',1,'hii i am a beauty influencer please subscribe to my channel.',NULL,'khushi@k','approved','$2b$10$/flw2UC.IqJCf2I4tRgMFO2BULNrh4p3Ua0kTKxayXVV21WIinc/K'),(30,'pew_die_pie','pew_die_pie',70000000,'/uploads/image/1746219646389-193325921.jpg',2,'hii i am a gamer and please subscribe to my channel if you are interested in gaming.',NULL,'pew@k','approved','$2b$10$xFhq54qEjy4RUGlmD.Zs0.hIp0E4hpz0LOQO/XMZ3KAlaX0HEF0AG'),(31,'triggered insaan','trigerred_insaan',7000000,'/uploads/image/1746219694851-841943808.jpg',2,'hii i am a gamer and please subscribe to my channel if you are interested in gaming.',NULL,'t@k','approved','$2b$10$SV3teckDjJhuNRV8LaLwNuLiBCNjmR620ScbjfKWVkKOVfE4TasOS'),(32,'payal sharma','payal gaming',300000,'/uploads/image/1746219740612-882034901.jpg',2,'hii i am a gamer and please subscribe to my channel if you are interested in gaming.',NULL,'payal@k','approved','$2b$10$ll01RjX2zWJRtkYOK3UTaus2f8r0hv0/jkke.vwPgWO5xXWGKjVde'),(33,'apna college','apna college',20000000,'/uploads/image/1746219810760-996396039.jpg',3,'hii i am teacher and please subscribe to my channel if you are interested in learning for free.',NULL,'apna@k','approved','$2b$10$ErV4XW60ZXK8v/lrFyQ.IOy4jW5J6DaKRN0Fq5mai9FNOiPo3WxjS'),(34,'neso academy','neso academy',5000000,'/uploads/image/1746219871716-690229974.jpg',3,'hii i am a teacher and please subscribe to my channel if you are interested in learning for free.',NULL,'neso@k','approved','$2b$10$SzecTs8WIj.T6j4.0IPH.OtOO/wRlV95onoZxMk0j6TlDLLIx55ze'),(35,'technical gyan','technical baba',4000000,'/uploads/image/1746219959774-111832419.jpg',4,'hii please subscribe to my channel.',NULL,'baba@k','approved','$2b$10$GXPGZsdUyDL2JlczEz7kJe6cbJdufOF5QwROFw/EfD0opfkTDHBgy'),(36,'tech','tech',5000000,'/uploads/image/1746220016208-106994714.jpg',4,'hii please subscribe to my channel.',NULL,'tech@k','approved','$2b$10$t9BM7qzPcJLdVReVjSx1GOWvoe42a.PdNkgsjFtqvpyJlFgOaxdM.'),(37,'kabita','kabita\'s kitchen',4000000,'/uploads/image/1746310160679-182390984.jpg',6,'hii this is kabita. i am a housewife and this is my channel where i upload my recepies.',NULL,'kabita@k','approved','$2b$10$n0JENK/hoeQ/rMcGByToa.9W61VZMsBR9IIOLSz05wfG4CMeDYOJC'),(38,'Aanchal Sharma','Dr. Aanchal',500000,'/uploads/image/1746465050472-724579058.jpg',1,'i am a dermetlogist and i am here to fix your skin problems.',NULL,'aanchal@k','disapproved','$2b$10$DDG.lfF3fu45xfftYz9N2ukUXiCvmNCf7iUJNc5Y6xphwIPumHFGG'),(39,'ramesh kumar','cookwithramesh',50000,'/uploads/image/1746896439297-682188273.jpg',6,'i am ramesh and i upload video about cooking and recepies. please subscribe to my channel.',NULL,'ramesh@k','approved','$2b$10$MfT2spU0jav8QZhktFWUoum78Y.EbBrIPYrHBk42EAzzt7QF/GHuq'),(40,'rachna singh','ldance with rachna',600000,'/uploads/image/1746897477677-752822985.jpg',8,'i am a dancer and i make dancing videos.','/uploads/pdf/1746897477721-519021024.pdf','rachna@k','approved','$2b$10$ghUlhWYswPUm.hvANaqa2uGREJt8KBf5m1am2zjqMDu2oHzG7Sk7.'),(41,'chandani','dance with chandani',4000000,'/uploads/image/1747941099141-983678234.jpg',8,'i am a dancer and paste content releated to the dance...','/uploads/pdf/1747941099149-786717069.pdf','chand@k','approved','$2b$10$6QXNWcIbaQOZATWE0Cg9Iu8cpECQ4JxGKAVN7J9dKuN4JXcaw0Tgm'),(42,'namneet','namneet',5000000,'/uploads/image/1747988007700-529279952.jpg',5,'ihsjshjzm','/uploads/pdf/1747988007719-327798433.pdf','namneet@k','approved','$2b$10$l0UQipaOz.uOXy3H24KB1.za5e1iNuNvOrEKX/xte6S81Os7usT8u');
/*!40000 ALTER TABLE `creators` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fields`
--

DROP TABLE IF EXISTS `fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fields` (
  `field_id` int NOT NULL AUTO_INCREMENT,
  `field_name` varchar(100) NOT NULL,
  PRIMARY KEY (`field_id`),
  UNIQUE KEY `field_name` (`field_name`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fields`
--

LOCK TABLES `fields` WRITE;
/*!40000 ALTER TABLE `fields` DISABLE KEYS */;
INSERT INTO `fields` VALUES (1,'bestbeautyaward'),(12,'comedy'),(6,'Cooking'),(8,'Dance'),(3,'Education'),(2,'Gaming'),(5,'Health'),(11,'news'),(7,'Singing'),(4,'Tech'),(10,'Travel'),(9,'vlogging');
/*!40000 ALTER TABLE `fields` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `past_winners`
--

DROP TABLE IF EXISTS `past_winners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `past_winners` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `field` varchar(100) NOT NULL,
  `year` int NOT NULL,
  `image_path` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `past_winners`
--

LOCK TABLES `past_winners` WRITE;
/*!40000 ALTER TABLE `past_winners` DISABLE KEYS */;
INSERT INTO `past_winners` VALUES (1,'ram','Gaming',2024,'/past/gaming24.jpg'),(2,'ram','Gaming',2023,'/past/gaming23.jpg'),(3,'shyam','Tech',2024,'/past/tech24.jpg'),(4,'shyam','Tech',2023,'/past/tech23.jpg'),(5,'sita','Art',2024,'/past/beauty24.jpg'),(6,'sita','Art',2023,'/past/beauty23.jpg'),(7,'gita','Music',2024,'/past/sing24.jpg'),(8,'gita','Music',2023,'/past/sing23.jpg'),(9,'rita','Food',2024,'/past/cook24.jpg'),(10,'rita','Food',2023,'/past/cook23.jpg'),(11,'rohan','Vlog',2024,'/past/vlog24.jpg'),(12,'mohan','Vlog',2023,'/past/vlog23.jpg'),(13,'sohan','Education',2024,'/past/edu24.jpg'),(14,'sunita','Education',2023,'/past/edu23.jpg'),(15,'babita','Travel',2024,'/past/travel24.jpg'),(16,'sita','Travel',2023,'/past/travel23.jpg'),(17,'radha','Dance',2024,'/past/dance24.jpg'),(18,'she','Dance',2023,'/past/dance23.jpg'),(19,'her','News',2024,'/past/news23.jpg'),(20,'hers','News',2023,'/past/news24.jpg');
/*!40000 ALTER TABLE `past_winners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `result_status`
--

DROP TABLE IF EXISTS `result_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `result_status` (
  `id` int NOT NULL DEFAULT '1',
  `is_result_out` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `result_status`
--

LOCK TABLES `result_status` WRITE;
/*!40000 ALTER TABLE `result_status` DISABLE KEYS */;
INSERT INTO `result_status` VALUES (1,0);
/*!40000 ALTER TABLE `result_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (40,'chanchala','c@k','1234'),(41,'asin m s','a@k','1234'),(42,'nitya','n@k','1234'),(43,'rachel','r@k','1234'),(45,'rekhs','r@kk','1234'),(46,'kristin','kris@k','1234'),(47,'rachna','ra@k','1234'),(48,'nitya singh','nityasingh@gmail.com','1234'),(49,'namneetggh','namneeta@k','1234');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `votes`
--

DROP TABLE IF EXISTS `votes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `votes` (
  `vote_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `creator_id` int DEFAULT NULL,
  `field_id` int DEFAULT '1',
  PRIMARY KEY (`vote_id`),
  UNIQUE KEY `user_id` (`user_id`,`creator_id`),
  UNIQUE KEY `user_field_unique` (`user_id`,`field_id`),
  KEY `creator_id` (`creator_id`),
  KEY `fk_votes_field` (`field_id`),
  CONSTRAINT `fk_votes_field` FOREIGN KEY (`field_id`) REFERENCES `fields` (`field_id`),
  CONSTRAINT `votes_ibfk_2` FOREIGN KEY (`creator_id`) REFERENCES `creators` (`creator_id`)
) ENGINE=InnoDB AUTO_INCREMENT=96 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `votes`
--

LOCK TABLES `votes` WRITE;
/*!40000 ALTER TABLE `votes` DISABLE KEYS */;
INSERT INTO `votes` VALUES (55,40,27,1),(56,46,28,1),(57,40,33,3),(58,40,37,6),(59,41,29,1),(62,41,33,3),(66,40,36,4),(69,48,29,1),(72,48,34,3),(82,48,35,4),(89,49,31,1),(93,49,33,3),(95,40,30,2);
/*!40000 ALTER TABLE `votes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-02 22:33:54
