CREATE DATABASE  IF NOT EXISTS `quizzapp` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `quizzapp`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: quizzapp
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question` (
  `questionid` int NOT NULL,
  `question_q` text,
  `option1` text,
  `option2` text,
  `option3` text,
  `option4` text,
  `quizid` int DEFAULT NULL,
  `answer` text,
  `choice` text,
  PRIMARY KEY (`questionid`),
  KEY `quizid` (`quizid`),
  CONSTRAINT `question_ibfk_1` FOREIGN KEY (`quizid`) REFERENCES `quiz` (`quizid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` VALUES (100,'Which of the follwing options leads to the portability and security of java?','Bytecode is executed by JVM','The applet makes the java code secure and portable','Use of exception handling','Dynamic binding between objects',1004,'Dynamic binding between objects',NULL),(101,'Which of the following is not a java feature?','Dynamic','Architecture neutral','Use of pointers','Object oriented',1004,'Architecture neutral',NULL),(102,'What is a correct syntax to output (Hello World) in Java?','echo(\'hello world\')','System.out.println(\'Hello World\')','Console.log(\'hello world\')','print(\'hello world\')',1004,'print(\'hello world\')',NULL),(103,'static functions can be accessed using null reference.','True','False','None','both',1004,'True',NULL),(104,' What is the size of double variable?','8 bit','16 bit','32 bit','64 bit',1004,'64 bit',NULL),(105,'Dynamic binding uses which information for binding?',' type.','object.','Both of the above.',' None of the above.',1004,'object.',NULL),(106,'Which arithmetic operations can result in the throwing of an ArithmeticException?','- / , %',' - * , +',' - ! , -','- >>, <<',1004,'- / , %',NULL),(107,'This is the parent of Error and Exception classes.','Throwable','Catchable','MainError','MainException',1004,'Throwable',NULL),(108,'Which of the below is valid way to instantiate an array in java?','int myArray [] = {1, 3, 5};','int myArray [] [] = {1,2,3,4};','int [] myArray = (5, 4, 3);',' int [] myArray = {“1”, “2”, “3”};',1004,'int myArray [] = {1, 3, 5};',NULL),(109,'Which of the below are reserved keyword in Java?','array','goto','goto-into','into',1004,'goto-int',NULL),(111,'Which of the follwing options leads to the portability and security of java?','Bytecode is executed by JVM','The applet makes the java code secure and portable','Use of exception handling','Dynamic binding between objects',1002,'Dynamic binding between objects',NULL),(112,'Which of the following is not a java feature?','Dynamic','Architecture neutral','Use of pointers','Object oriented',1002,'Architecture neutral',NULL),(113,'What is a correct syntax to output (Hello World) in Java?','echo(\'hello world\')','System.out.println(\'Hello World\')','Console.log(\'hello world\')','print(\'hello world\')',1002,'System.out.println(\'Hello World\')',NULL),(114,'static functions can be accessed using null reference.','True','False','None','both',1002,'True',NULL),(115,' What is the size of double variable?','8 bit','16 bit','32 bit','64 bit',1002,'8 bit',NULL),(116,'Dynamic binding uses which information for binding?',' type.','object.','Both of the above.',' None of the above.',1002,'object.',NULL),(117,'Which arithmetic operations can result in the throwing of an ArithmeticException?','- / , %',' - * , +',' - ! , -','- >>, <<',1002,'- / , %',NULL),(118,'This is the parent of Error and Exception classes.','Throwable','Catchable','MainError','MainException',1002,'Throwable',NULL),(119,'Which of the below is valid way to instantiate an array in java?','int myArray [] = {1, 3, 5};','int myArray [] [] = {1,2,3,4};','int [] myArray = (5, 4, 3);',' int [] myArray = {“1”, “2”, “3”};',1002,'int myArray [] = {1, 3, 5};',NULL),(120,'Which of the below are reserved keyword in Java?','array','goto','goto-into','into',1002,'goto-into',NULL);
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quiz`
--

DROP TABLE IF EXISTS `quiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quiz` (
  `quizid` int NOT NULL,
  `category` varchar(40) DEFAULT NULL,
  `quizname` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`quizid`),
  KEY `category` (`category`),
  CONSTRAINT `quiz_ibfk_1` FOREIGN KEY (`category`) REFERENCES `quizcategory` (`category`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quiz`
--

LOCK TABLES `quiz` WRITE;
/*!40000 ALTER TABLE `quiz` DISABLE KEYS */;
INSERT INTO `quiz` VALUES (1001,'Python','Python-quiz-1'),(1002,'java','Java-quiz-1'),(1003,'linux','linux-quiz-1'),(1004,'java','Java-quiz-2'),(1005,'sql','sql-quiz-1'),(1006,'linux','linux-quiz-2'),(2001,'aptitude','Apt-quiz-1'),(10007,'sql','sql-quiz2'),(10009,'python','python-quiz-2');
/*!40000 ALTER TABLE `quiz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quizcategory`
--

DROP TABLE IF EXISTS `quizcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quizcategory` (
  `category` varchar(40) NOT NULL,
  PRIMARY KEY (`category`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quizcategory`
--

LOCK TABLES `quizcategory` WRITE;
/*!40000 ALTER TABLE `quizcategory` DISABLE KEYS */;
INSERT INTO `quizcategory` VALUES ('aptitude'),('java'),('linux'),('python'),('sql');
/*!40000 ALTER TABLE `quizcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `result`
--

DROP TABLE IF EXISTS `result`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `result` (
  `resultid` int NOT NULL AUTO_INCREMENT,
  `userid` varchar(10) NOT NULL,
  `quizid` int NOT NULL,
  `totalcorrect` int DEFAULT NULL,
  `quizname` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`resultid`),
  KEY `userid` (`userid`),
  KEY `quizid` (`quizid`),
  CONSTRAINT `result_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `userlogin` (`userid`),
  CONSTRAINT `result_ibfk_2` FOREIGN KEY (`quizid`) REFERENCES `quiz` (`quizid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `result`
--

LOCK TABLES `result` WRITE;
/*!40000 ALTER TABLE `result` DISABLE KEYS */;
INSERT INTO `result` VALUES (2,'STU0001',1002,8,'Java-quiz-1'),(3,'STU0001',1004,7,'Java-quiz-2'),(4,'STU0001',1004,2,'Java-quiz-2'),(5,'STU0001',1004,2,'Java-quiz-2');
/*!40000 ALTER TABLE `result` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userlogin`
--

DROP TABLE IF EXISTS `userlogin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userlogin` (
  `userid` varchar(10) NOT NULL,
  `username` varchar(40) DEFAULT NULL,
  `password` varchar(15) DEFAULT NULL,
  `role` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userlogin`
--

LOCK TABLES `userlogin` WRITE;
/*!40000 ALTER TABLE `userlogin` DISABLE KEYS */;
INSERT INTO `userlogin` VALUES ('ADM0001','Sunitha','sunith15','admin'),('ADM0002','Ravi Kumar','Ravi@5','admin'),('STU0001','Udayasri','udaya@55','student'),('STU0002','Shamili','Shamili125','student'),('STU0004','Anagha','anagha@14','student'),('STU0005','Anadya shetty','anadhay@66','student'),('STU0006','Teena Pawar','teena@123','student'),('STU0007','Rafi Shaik','Rafi@667','student'),('STU0008','Sumanth','Sumanth@125','student'),('STU0009','Rajeswari','Raji55@123','student'),('STU0010','Pooja','Pooja&123','student');
/*!40000 ALTER TABLE `userlogin` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-08  8:55:00
