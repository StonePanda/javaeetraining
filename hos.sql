/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80013
Source Host           : localhost:3306
Source Database       : hos

Target Server Type    : MYSQL
Target Server Version : 80013
File Encoding         : 65001

Date: 2019-06-30 11:43:41
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `brand`
-- ----------------------------
DROP TABLE IF EXISTS `brand`;
CREATE TABLE `brand` (
  `brandid` int(11) NOT NULL AUTO_INCREMENT,
  `brandname` varchar(20) NOT NULL,
  `brandpicurl` varchar(50) NOT NULL,
  PRIMARY KEY (`brandid`),
  UNIQUE KEY `brandname` (`brandname`),
  UNIQUE KEY `brandpicurl` (`brandpicurl`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of brand
-- ----------------------------

-- ----------------------------
-- Table structure for `client`
-- ----------------------------
DROP TABLE IF EXISTS `client`;
CREATE TABLE `client` (
  `clientid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `phone` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `accountpw` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`clientid`),
  UNIQUE KEY `phone` (`phone`) USING BTREE,
  UNIQUE KEY `email` (`email`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of client
-- ----------------------------
INSERT INTO `client` VALUES ('1', '242352', '123456', 'shijing@qq.com');
INSERT INTO `client` VALUES ('3', '37612', '123456', 'zzz@qq.com');
INSERT INTO `client` VALUES ('4', '123', '123', 'haha@qq.com');
INSERT INTO `client` VALUES ('5', '1234', '1234', '1234@qq.com');
INSERT INTO `client` VALUES ('6', '12345', '12345', '12345@qq.com');
INSERT INTO `client` VALUES ('7', '123456', '123456', '123456@qq.com');
INSERT INTO `client` VALUES ('8', '1234567', '1234567', '1234567@qq.com');
INSERT INTO `client` VALUES ('9', '12345678', '1234567', '12345678@qq.com');
INSERT INTO `client` VALUES ('10', '22', '22', '22@qq.com');
INSERT INTO `client` VALUES ('11', '11', '11', '11@qq.com');
INSERT INTO `client` VALUES ('12', '55', '55', '55@qq.com');
INSERT INTO `client` VALUES ('13', '00', '00', '00@qq.com');

-- ----------------------------
-- Table structure for `hotel`
-- ----------------------------
DROP TABLE IF EXISTS `hotel`;
CREATE TABLE `hotel` (
  `hotelid` int(11) NOT NULL AUTO_INCREMENT,
  `hotelname` varchar(30) NOT NULL,
  `hotelphone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `hotelpw` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `positiontext` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `positionwei` double DEFAULT NULL,
  `positionjing` double DEFAULT NULL,
  `brandid` int(11) DEFAULT NULL,
  `overview` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `photourl` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `getstars` int(11) DEFAULT NULL,
  PRIMARY KEY (`hotelid`),
  UNIQUE KEY `hotelname` (`hotelname`) USING BTREE,
  UNIQUE KEY `hotelphone` (`hotelphone`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of hotel
-- ----------------------------
INSERT INTO `hotel` VALUES ('1', '莫酒店', '123', '123', null, null, null, null, null, null, null);
INSERT INTO `hotel` VALUES ('2', '同福客栈', '242352', 'tfkz', '人民中路一段15号', null, null, null, '成都天府丽都喜来登饭店是一家在口碑极佳的成都酒店，不管是深度游还是一日游，这家酒店都会是您的理想之选。 酒店内设施齐全，可为住客提供舒适的住宿条件。 酒店内设施繁多，免费房内无线网络, 娱乐场, 24小时前台, 24小时送餐服务, 无障碍设施等都已配备。 客房设计极其舒适，装饰优雅，此外还配备了众多便捷设施，部分客房还配有平板电视, 无线上网, 无线上网(免费), 禁烟房, 空调等。 酒店专门为住客准备了健身中心, 桑拿, 室内游泳池, 水疗中心, 按摩等，可大大提升您对酒店的满意度。 在 成都天府丽都喜来登饭店 住宿期间，你会发现酒店内气氛温馨，服务一流，带给您宾至如归的感受。', 'http://pix5.agoda.net/hotelimages/451/45147/45147_16052710480042787240.jpg?s=624x', null);
INSERT INTO `hotel` VALUES ('3', '同福客栈22', '22', 'tfkz', '人民中路一段15号', null, null, null, '成都天府丽都喜来登饭店是一家在口碑极佳的成都酒店，不管是深度游还是一日游，这家酒店都会是您的理想之选。 酒店内设施齐全，可为住客提供舒适的住宿条件。 酒店内设施繁多，免费房内无线网络, 娱乐场, 24小时前台, 24小时送餐服务, 无障碍设施等都已配备。 客房设计极其舒适，装饰优雅，此外还配备了众多便捷设施，部分客房还配有平板电视, 无线上网, 无线上网(免费), 禁烟房, 空调等。 酒店专门为住客准备了健身中心, 桑拿, 室内游泳池, 水疗中心, 按摩等，可大大提升您对酒店的满意度。 在 成都天府丽都喜来登饭店 住宿期间，你会发现酒店内气氛温馨，服务一流，带给您宾至如归的感受。', 'http://pix5.agoda.net/hotelimages/451/45147/45147_16052710480042787240.jpg?s=624x', null);
INSERT INTO `hotel` VALUES ('4', '33', '33', '33', null, null, null, null, null, null, null);
INSERT INTO `hotel` VALUES ('5', '11', '11', '11', null, null, null, null, null, null, null);
INSERT INTO `hotel` VALUES ('6', '66', '66', '66', null, null, null, null, null, null, null);
INSERT INTO `hotel` VALUES ('7', '77', '77', '77', null, null, null, null, null, null, null);
INSERT INTO `hotel` VALUES ('8', '88', '88', '88', null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for `hotelcity`
-- ----------------------------
DROP TABLE IF EXISTS `hotelcity`;
CREATE TABLE `hotelcity` (
  `cityid` int(11) NOT NULL AUTO_INCREMENT,
  `cityname` varchar(10) NOT NULL,
  `hotelid` int(11) DEFAULT NULL,
  PRIMARY KEY (`cityid`),
  UNIQUE KEY `cityname` (`cityname`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of hotelcity
-- ----------------------------

-- ----------------------------
-- Table structure for `order`
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `orderid` int(11) NOT NULL AUTO_INCREMENT,
  `clientid` int(11) NOT NULL,
  `hotelid` int(11) NOT NULL,
  `roomtype` varchar(10) NOT NULL,
  `timestart` int(11) NOT NULL,
  `timeend` int(11) NOT NULL,
  `price` double NOT NULL,
  `status` int(11) NOT NULL,
  `commentstar` int(11) DEFAULT NULL,
  `commentcontent` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`orderid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of order
-- ----------------------------

-- ----------------------------
-- Table structure for `roomtype`
-- ----------------------------
DROP TABLE IF EXISTS `roomtype`;
CREATE TABLE `roomtype` (
  `hotelid` int(11) NOT NULL,
  `roomtype` varchar(10) NOT NULL,
  `num` int(11) NOT NULL,
  `price` double NOT NULL,
  PRIMARY KEY (`hotelid`,`roomtype`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of roomtype
-- ----------------------------
