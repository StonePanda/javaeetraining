/*
 Navicat MySQL Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 50644
 Source Host           : localhost:3306
 Source Schema         : hos

 Target Server Type    : MySQL
 Target Server Version : 50644
 File Encoding         : 65001

 Date: 02/07/2019 17:47:34
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for cityhotel
-- ----------------------------
DROP TABLE IF EXISTS `cityhotel`;
CREATE TABLE `cityhotel`  (
  `hotelid` int(11) NOT NULL,
  `cityid` int(11) NOT NULL,
  `cityname` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`hotelid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of cityhotel
-- ----------------------------
INSERT INTO `cityhotel` VALUES (1, 1, '成都');
INSERT INTO `cityhotel` VALUES (2, 1, '成都');
INSERT INTO `cityhotel` VALUES (3, 1, '成都');
INSERT INTO `cityhotel` VALUES (4, 1, '成都');
INSERT INTO `cityhotel` VALUES (5, 1, '成都');
INSERT INTO `cityhotel` VALUES (6, 1, '成都');
INSERT INTO `cityhotel` VALUES (7, 1, '成都');
INSERT INTO `cityhotel` VALUES (8, 1, '成都');
INSERT INTO `cityhotel` VALUES (9, 1, '成都');
INSERT INTO `cityhotel` VALUES (10, 1, '成都');
INSERT INTO `cityhotel` VALUES (11, 1, '成都');
INSERT INTO `cityhotel` VALUES (12, 1, '成都');
INSERT INTO `cityhotel` VALUES (13, 1, '成都');
INSERT INTO `cityhotel` VALUES (14, 1, '成都');
INSERT INTO `cityhotel` VALUES (15, 1, '成都');
INSERT INTO `cityhotel` VALUES (16, 1, '成都');
INSERT INTO `cityhotel` VALUES (17, 1, '成都');
INSERT INTO `cityhotel` VALUES (18, 1, '成都');
INSERT INTO `cityhotel` VALUES (19, 1, '成都');
INSERT INTO `cityhotel` VALUES (20, 1, '成都');
INSERT INTO `cityhotel` VALUES (21, 1, '成都');
INSERT INTO `cityhotel` VALUES (22, 1, '成都');
INSERT INTO `cityhotel` VALUES (23, 1, '成都');
INSERT INTO `cityhotel` VALUES (24, 1, '成都');
INSERT INTO `cityhotel` VALUES (25, 1, '成都');
INSERT INTO `cityhotel` VALUES (26, 1, '成都');
INSERT INTO `cityhotel` VALUES (27, 1, '成都');
INSERT INTO `cityhotel` VALUES (28, 1, '成都');
INSERT INTO `cityhotel` VALUES (29, 1, '成都');
INSERT INTO `cityhotel` VALUES (30, 1, '成都');
INSERT INTO `cityhotel` VALUES (32, 1, '成都');

-- ----------------------------
-- Table structure for client
-- ----------------------------
DROP TABLE IF EXISTS `client`;
CREATE TABLE `client`  (
  `clientid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `phone` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `accountpw` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`clientid`) USING BTREE,
  UNIQUE INDEX `phone`(`phone`) USING BTREE,
  UNIQUE INDEX `email`(`email`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of client
-- ----------------------------
INSERT INTO `client` VALUES (1, '242352', '123456', 'shijing@qq.com');
INSERT INTO `client` VALUES (3, '37612', '123456', 'zzz@qq.com');
INSERT INTO `client` VALUES (4, '123', '123', 'haha@qq.com');
INSERT INTO `client` VALUES (5, '1234', '1234', '1234@qq.com');
INSERT INTO `client` VALUES (6, '12345', '12345', '12345@qq.com');
INSERT INTO `client` VALUES (7, '123456', '123456', '123456@qq.com');
INSERT INTO `client` VALUES (8, '1234567', '1234567', '1234567@qq.com');
INSERT INTO `client` VALUES (9, '12345678', '1234567', '12345678@qq.com');
INSERT INTO `client` VALUES (10, '22', '22', '22@qq.com');
INSERT INTO `client` VALUES (11, '11', '11', '11@qq.com');
INSERT INTO `client` VALUES (12, '55', '55', '55@qq.com');
INSERT INTO `client` VALUES (13, '00', '00', '00@qq.com');

-- ----------------------------
-- Table structure for hotel
-- ----------------------------
DROP TABLE IF EXISTS `hotel`;
CREATE TABLE `hotel`  (
  `hotelid` int(11) NOT NULL AUTO_INCREMENT,
  `hotelname` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `hotelphone` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `positiontext` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `positionwei` double NULL DEFAULT NULL,
  `positionjing` double NULL DEFAULT NULL,
  `brandid` int(11) NULL DEFAULT NULL,
  `overview` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `photourl` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `getstars` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`hotelid`) USING BTREE,
  UNIQUE INDEX `hotelname`(`hotelname`) USING BTREE,
  UNIQUE INDEX `hotelphone`(`hotelphone`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 33 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of hotel
-- ----------------------------
INSERT INTO `hotel` VALUES (1, '成都保利公园皇冠假日酒店', '0504', '新都区寿龙大道1980号保利公园198', 30.752642, 104.147346, 8, '无论深度游还是一日游，成都保利公园皇冠假日酒店都是出行成都的热门之选。 酒店为顾客配备了一系列的设施和服务，旨在让各位住客能够享受更多舒适与便捷。 一切生活必需品，例如免费房内无线网络, 24小时前台, 无障碍设施, 快速入住/退房登记, 行李存放服务等都已为您准备就绪。 客房装饰精美，部分还内设 平板电视, 无线上网, 禁烟房, 空调, 唤醒服务等设施。 为了让游客有更完美的住宿体验，酒店提供健身中心, 桑拿, 高尔夫球场(3公里范围内), 室外游泳池, 室内游泳池等多种休闲设施。 不论您出行成都的原因为何，成都保利公园皇冠假日酒店都可让您感受到家的温馨与舒适。', 'http://pix3.agoda.net/hotelimages/290/290994/290994_14040915420019018238.jpg?s=624x', 5);
INSERT INTO `hotel` VALUES (2, '成都东方广场假日酒店', '0679', '东大街志全段231号', 30.647877, 104.088364, 5, '成都东方广场假日酒店位于著名的春熙路商业区区，地理位置便捷。 酒店想您所想，能为您提供住宿期间的一切必需品。 秉承“顾客至上”的服务理念，成都东方广场假日酒店的工作人员将为您提供体贴入微的服务。 部分客房内设有平板电视, 无线上网, 禁烟房, 空调, 书桌。 酒店内设多种娱乐设施。 不论您是带着何种目的前往成都，成都东方广场假日酒店都可让您感受到家的温馨与舒适。', 'http://pix1.agoda.net/hotelimages/293/293574/293574_17082415580055688671.jpg?s=624x', 4);
INSERT INTO `hotel` VALUES (3, '成都新都假日酒店', '0815', '新都区马超东路280号', 30.809074, 104.182434, 5, '位于新都区，成都新都假日酒店是游览成都的完美住宿选择。 酒店拥有高品质的服务以及完善的设施，以求满足住客们的各类需求。 成都新都假日酒店的工作人员秉承顾客至上的服务理念，为您提供宾至如归的入住感受。 部分客房内设有无线上网(免费), 按摩浴缸, 空调, 暖气, 唤醒服务。 酒店内设多种休闲娱乐设施。 成都新都假日酒店位置便利且舒适，是游览成都时的理想住宿选择。', 'http://pix4.agoda.net/hotelimages/339/339643/339643_14041809010019119236.jpg?s=624x', 4);
INSERT INTO `hotel` VALUES (4, '四川岷山拉萨大酒店', '0713', '邻近中心北街88号肖家河二轮南一环路4号', 30.634349, 104.041978, 3, '位于锦里商业街，四川岷山拉萨大酒店是游览成都时的完美住宿选择。 酒店设施一应俱全，可让您的住宿体验变得回味无穷。 在酒店内，您会发现内设24小时送餐服务, 无障碍设施, 无线网络(公共区域), 停车场, 送餐服务等设施。 客房内饰优雅，便捷设施齐全。 酒店专门为住客准备了健身中心, 桑拿, 水疗中心, 按摩等，可大大提升您对酒店的满意度。 在 四川岷山拉萨大酒店 住宿期间，你会发现酒店内气氛温馨，服务一流，带给您宾至如归的感受。', 'http://pix5.agoda.net/hotelimages/615/61530/61530_13021911230010374206.jpg?s=624x', 4);
INSERT INTO `hotel` VALUES (5, '成都泰逸酒店', '0156', '蜀汉路209号', 30.684719, 104.026435, 2, '成都泰逸酒店是商务人士和观光游客前往成都的理想下榻之处。 酒店内设施齐全，可为住客提供舒适的住宿条件。 酒店内设施繁多，所有房间设有免费无线网络, 24小时前台, 24小时送餐服务, 快速入住/退房登记, 行李存放服务等都已配备。 客房装饰精美，部分还内设 空调, 书桌, 电话, 电视, 液晶电视/等离子电视等。 住客可享受酒店内的休闲设施，包括桑拿, 室外游泳池, 室内游泳池, 按摩等。 成都泰逸酒店地理位置便捷，内部装饰令人倍感舒适，是游览成都时的理想住宿选择。', 'http://pix1.agoda.net/hotelimages/615/61544/61544_14090411030021846305.jpg?s=624x', 4);
INSERT INTO `hotel` VALUES (6, '成都世代锦江国际酒店', '0377', '仙南大街59号', 30.648082, 104.061504, 7, '成都世代锦江国际酒店是一家在口碑极佳的成都酒店，不管是深度游还是一日游，这家酒店都会是您的理想之选。 酒店内设多种设施和服务，可让您尽受舒适与酣睡。 一切生活必需品，例如24小时前台, 无线网络(公共区域), 代客泊车, 停车场, 送餐服务等都已为您准备就绪。 部分客房内设有禁烟房, 空调, 书桌, 遮光布, LAN宽带上网(免费)。 酒店专门为住客准备了健身中心, 桑拿, 温泉 , 水疗中心, 按摩等，可大大提升您对酒店的满意度。 热情友好的工作人员、完善的设施、优越的地理位置、便于游客前往成都的各大景点，这些都是众多游客选择成都世代锦江国际酒店的原因。', 'http://pix1.agoda.net/hotelimages/237/237499/237499_120920102658.jpg?s=624x', 4);
INSERT INTO `hotel` VALUES (7, '成都马瑞卡都市酒店', '0296', '新时代广场纬五路42号', 30.672763, 104.070225, 3, '下榻成都马瑞卡都市酒店，感受成都的独特魅力。 酒店拥有高品质的服务以及完善的设施，可满足游客们的所有需求。 享受酒店内设的免费房内无线网络, 24小时前台, 24小时送餐服务, 快速入住/退房登记, 行李存放服务等设施。 客房舒适温馨，部分客房内设免费茶水, 储物柜, 毛巾, 平板电视, 镜子等设施。 酒店内设多种娱乐设施。 不论您是带着何种目的前往成都，成都马瑞卡都市酒店都可让您感受到家的温馨与舒适。', 'http://pix4.agoda.net/hotelimages/615/61534/61534_15062618000031020550.jpg?s=624x', 3);
INSERT INTO `hotel` VALUES (8, '成都鼓楼智选假日酒店', '0855', '大强西路72号', 30.663635, 104.072418, 5, '成都鼓楼智选假日酒店是一家3星级酒店，可让您的 成都之行舒适无忧。 酒店拥有高品质的服务以及完善的设施，以求满足住客们的各类需求。 成都鼓楼智选假日酒店的工作人员秉承顾客至上的服务理念，为您提供宾至如归的入住感受。 客房舒适温馨，部分客房内设平板电视, 无线上网, 禁烟房, 空调, 唤醒服务等设施。 酒店内设多种休闲娱乐设施。 不论您出行成都的原因为何，成都鼓楼智选假日酒店都可让您感受到家的温馨与舒适。', 'http://pix4.agoda.net/hotelimages/108736/0/b207a26de4f4ebfb666371eefb4b8ff8.jpg?s=624x', 4);
INSERT INTO `hotel` VALUES (9, '成都天府丽都喜来登饭店', '0001', '人民中路一段15号', 30.667376, 104.063461, 9, '成都天府丽都喜来登饭店是一家在口碑极佳的成都酒店，不管是深度游还是一日游，这家酒店都会是您的理想之选。 酒店内设施齐全，可为住客提供舒适的住宿条件。 酒店内设施繁多，免费房内无线网络, 娱乐场, 24小时前台, 24小时送餐服务, 无障碍设施等都已配备。 客房设计极其舒适，装饰优雅，此外还配备了众多便捷设施，部分客房还配有平板电视, 无线上网, 无线上网(免费), 禁烟房, 空调等。 酒店专门为住客准备了健身中心, 桑拿, 室内游泳池, 水疗中心, 按摩等，可大大提升您对酒店的满意度。 在 成都天府丽都喜来登饭店 住宿期间，你会发现酒店内气氛温馨，服务一流，带给您宾至如归的感受。', 'http://pix4.agoda.net/hotelimages/1297/0/bd87a86dccd8e39d308ef076bbcc4b23.jpg?s=624x', 5);
INSERT INTO `hotel` VALUES (10, '四川锦江宾馆东楼', '0002', '人民南路二段80号', 30.648103, 104.065739, 9, '锦江宾馆是商务人士和观光游客前往成都的理想下榻之处。 完善的设施，精美的装饰，这些都可让您在住宿期间感受到更多愉悦。 在酒店内，您会发现内设免费房内无线网络, 24小时安保, 每日客房清洁服务, 传真机, 医务室等设施。 部分客房内设 平板电视, 无线上网, 无线上网(免费), 按摩浴缸, 禁烟房等设施，加上设计装饰温馨舒适，定能带给住客宾至如归的感受。 为了让游客体验更完美的住宿体验，酒店提供了多种休闲设施，例如健身中心, 桑拿, 室内游泳池, 按摩, 花园等。 锦江宾馆将热情的服务与优美的环境完美地结合在了一起，可让您的成都之行变得更加难忘。', 'http://pix5.agoda.net/hotelimages/261/2616/2616_15072113380032685686.jpg?s=624x', 5);
INSERT INTO `hotel` VALUES (11, '成都银河王朝大酒店', '0003', '顺城街88号', 30.658814, 104.071121, 9, '下榻成都银河王朝大酒店，感受成都的独特魅力。 酒店内设多种设施和服务，可让您尽受舒适与酣睡。 免费房内无线网络, 娱乐场, 24小时前台, 24小时送餐服务, 无障碍设施等设施都已配备，可供住客使用。 客房舒适温馨，部分客房内设平板电视, 无线上网, 无线上网(免费), 禁烟房, 空调等设施。 为了让游客体验更完美的住宿体验，酒店提供了多种休闲设施，例如健身中心, 桑拿, 室外游泳池, 网球场, 卡拉OK等。 下榻成都银河王朝大酒店，可方便您前往成都 各区。', 'http://pix4.agoda.net/hotelimages/836/8363/8363_15072218350032817329.jpg?s=624x', 4);
INSERT INTO `hotel` VALUES (12, '岷山饭店', '0004', '人民南路55号', 30.650673, 104.06391, 9, '位于天府广场，岷山饭店是游览成都时的完美住宿选择。 酒店设施一应俱全，可让您的住宿体验变得回味无穷。 酒店内设施繁多，24小时送餐服务, 免费房内无线网络, 24小时前台, 无障碍设施, 快速入住/退房登记等都已配备。 客房设计极其舒适，装饰优雅，此外还配备了众多便捷设施，部分客房还配有平板电视, 衣架, 免费茶水, 床单, 储物柜等。 使用健身中心, 桑拿, 室外游泳池, 水疗中心, 按摩等休闲设施，还可让您迅速恢复体力，精神焕发。 热情友好的工作人员、完善的设施、优越的地理位置、便于游客前往成都的各大景点，这些都是众多游客选择岷山饭店的原因。', 'http://pix5.agoda.net/hotelimages/451/45147/45147_16052710480042787240.jpg?s=624x', 5);
INSERT INTO `hotel` VALUES (13, '成都天府阳光酒店', '0005', '太升北路2号', 30.667917, 104.079075, 9, '无论深度游还是一日游，成都天府阳光酒店都是出行成都的热门之选。 完善的设施可让您在住宿期间更加愉悦。 24小时送餐服务, 免费房内无线网络, 娱乐场, 24小时前台, 无障碍设施等设施都已配备，以供住客使用。 客房内必需品一应俱全，部分客房还配有平板电视, 地毯, 免费茶水, 储物柜, 镜子等设施，确保舒适的入住感受。 为了让游客有更完美的住宿体验，酒店提供健身中心, 桑拿, 室外游泳池, 水疗中心, 按摩等多种休闲设施。 在 成都天府阳光酒店 住宿期间，你会发现酒店内气氛温馨，服务一流，带给您宾至如归的感受。', 'http://pix3.agoda.net/hotelimages/476/47634/47634_17010616510050176591.jpg?s=624x', 4);
INSERT INTO `hotel` VALUES (14, '成都西藏饭店', '0006', '人民北路10号', 30.683835, 104.07177, NULL, '下榻成都西藏饭店，感受成都的独特魅力。 不论是商务人士，还是观光游客，都可以尽情享受酒店内的设施和服务。 秉承“顾客至上”的服务理念，成都西藏饭店的工作人员将为您提供最体贴入微的服务。 客房设计极其舒适，装饰优雅，此外还配备了众多便捷设施，部分客房还配有平板电视, 地毯, 衣架, 免费茶水, 床单等。 酒店内设多种娱乐设施。 成都西藏饭店地理位置便捷，内部装饰令人倍感舒适，是游览成都时的理想住宿选择。', 'http://pix3.agoda.net/hotelimages/47635/-1/59fb853995b2f8d52659b59c565c75cc.jpg?s=624x', 5);
INSERT INTO `hotel` VALUES (15, '四川宾馆', '0007', '总府路31号', 30.658772, 104.076962, NULL, '四川宾馆位于成都的黄金地段，毗邻市区内的各大主要景点。 酒店拥有高品质的服务以及完善的设施，可满足游客们的所有需求。 24小时前台, 24小时送餐服务, 无障碍设施, 行李存放服务, 无线网络(公共区域)等设施都已配备，可供住客使用。 客房内必需品一应俱全，部分客房还配有平板电视, 禁烟房, 空调, 唤醒服务, 书桌等，保证您住得舒适。 酒店环境宁静，还设有健身中心, 室内游泳池等休闲设施。 四川宾馆将热情的服务与优美的环境完美地结合在了一起，可让您的成都之行变得更加难忘。', 'http://pix4.agoda.net/hotelimages/483/48343/48343_17050217360052750014.jpg?s=624x', 3);
INSERT INTO `hotel` VALUES (16, '成都绿洲大酒店', '0008', '忠烈祠西路99号', 30.665768, 104.0742, NULL, '成都绿洲大酒店是商务人士和观光游客前往成都的理想下榻之处。 酒店为顾客配备了一系列的设施和服务，旨在让各位住客能够享受更多舒适与便捷。 一切生活必需品，例如24小时送餐服务, 娱乐场, 24小时前台, 无障碍设施, 行李存放服务等都已为您准备就绪。 客房舒适温馨，部分客房内设平板电视, 无线上网, 空调, 暖气, 唤醒服务等设施。 酒店环境宁静，还设有健身中心, 桑拿, 按摩等休闲设施。 成都绿洲大酒店可满足您的一切需要，酒店员工可为您提供专业的服务。', 'http://pix2.agoda.net/hotelimages/615/61518/61518_15030516280025835350.jpg?s=624x', 4);
INSERT INTO `hotel` VALUES (17, '成都凯宾斯基酒店', '0009', '人民南路42号第四节', 30.618672, 104.0665, 3, '无论深度游还是一日游，成都凯宾斯基酒店都是出行成都的热门之选。 完善的设施可让您在住宿期间更加愉悦。 住客们可尽情使用24小时送餐服务, 免费房内无线网络, 24小时前台, 无障碍设施, 快速入住/退房登记等设施。 客房装饰精美，部分还内设 平板电视, 地毯, 免费迎宾饮料, 独立客厅, 无线上网等设施。 酒店内设多种休闲娱乐设施。 下榻成都凯宾斯基酒店，可方便您前往成都 各区。', 'http://pix2.agoda.net/hotelimages/615/61529/61529_16052713560042797419.jpg?s=624x', 5);
INSERT INTO `hotel` VALUES (18, '成都泰合索菲特大饭店', '0010', '滨江中路15号', 30.646774, 104.069881, 2, '下榻成都泰合索菲特大饭店，感受成都的独特魅力。 不论是商务人士，还是观光游客，都可以尽情享受酒店内的设施和服务。 在酒店内，您会发现内设24小时送餐服务, 免费房内无线网络, 24小时前台, 无障碍设施, 行李存放服务等设施。 客房设计极其舒适，装饰优雅，此外还配备了众多便捷设施，部分客房还配有储物柜, 衣柜, 免费茶水, 毛巾, 地毯等。 酒店内设多种娱乐设施。 成都泰合索菲特大饭店是在成都 旅行休闲时的完美住宿选择。', 'http://pix5.agoda.net/hotelimages/615/61542/61542_16120123180049331576.jpg?s=624x', 5);
INSERT INTO `hotel` VALUES (19, '成都总府皇冠假日酒店', '0011', '总府路31号', 30.658981, 104.076996, 8, '成都总府皇冠假日酒店位于成都的黄金地段，毗邻市区内的各大主要景点。 酒店想您所想，力求为您提供舒适的入住体验。 成都总府皇冠假日酒店的工作人员秉承顾客至上的服务理念，为您提供宾至如归的入住感受。 采用舒适设计，部分客房内可提供 平板电视, 无线上网, 禁烟房, 空调, 书桌等设施，让您在酒店享受惬意与舒适。 酒店内设多种休闲娱乐设施。 成都总府皇冠假日酒店是在成都 旅行休闲时的完美住宿选择。', 'http://pix3.agoda.net/hotelimages/718/71800/71800_14032615370018863225.jpg?s=624x', 4);
INSERT INTO `hotel` VALUES (20, '成都世纪城天堂洲际大饭店', '0012', '世纪城大道88号', 30.559614, 104.072105, NULL, '成都世纪城天堂洲际大饭店是一家5星级酒店，可让您的 成都之行变得更完美。 不论是商务人士，还是观光游客，都可以尽情享受酒店内的设施和服务。 秉承“顾客至上”的服务理念，成都世纪城天堂洲际大饭店的工作人员将为您提供体贴入微的服务。 客房舒适温馨，部分客房内设平板电视, 无线上网, 禁烟房, 空调, 暖气等设施。 酒店内设多种娱乐设施。 成都世纪城天堂洲际大饭店是在成都 旅行休闲时的完美住宿选择', 'http://pix2.agoda.net/hotelimages/103/103872/103872_14033114350018914081.jpg?s=624x', 5);
INSERT INTO `hotel` VALUES (21, '成都香格里拉大酒店', '0013', '滨江东路9号', 30.641955, 104.088657, NULL, '成都香格里拉大酒店位于成都的黄金地段，毗邻市区内的各大主要景点。 酒店设施一应俱全，可让您的住宿体验变得回味无穷。 住客们可随意使用24小时送餐服务, 免费房内无线网络, 24小时前台, 无障碍设施, 快速入住/退房登记等设施。 部分客房内设有平板电视, 地毯, 镜子, 拖鞋, 独立客厅。 酒店环境宁静，还设有按摩浴缸, 健身中心, 桑拿, 室内游泳池, 水疗中心等休闲设施。 成都香格里拉大酒店地理位置便捷，内部装饰令人倍感舒适，是游览成都时的理想住宿选择。', 'http://pix2.agoda.net/hotelimages/108422/0/68837e1cdd26bd2e407501bd238ffb24.jpg?s=624x', 5);
INSERT INTO `hotel` VALUES (22, '成都世纪城假日酒店西楼', '0014', '世纪城大道西塔208号', 30.557678, 104.073875, 5, '成都世纪城假日酒店西楼位于著名的旅游观光区——新国际会展中心，可让您的旅程变得更加舒适和便捷。 酒店拥有高品质的服务以及完善的设施，可满足游客们的所有需求。 住客们可随意使用免费房内无线网络, 24小时前台, 无障碍设施, 行李存放服务, 无线网络(公共区域)等设施。 客房设计极其舒适，装饰优雅，此外还配备了众多便捷设施，部分客房还配有平板电视, 无线上网, 禁烟房, 空调, 唤醒服务等。 住客可享受酒店内的休闲设施，包括健身中心, 桑拿, 按摩等。 在 成都世纪城假日酒店西楼 住宿期间，你会发现酒店内气氛温馨，服务一流，带给您宾至如归的感受。', 'http://pix1.agoda.net/hotelimages/962/96298/96298_14032716160018879978.jpg?s=624x', 4);
INSERT INTO `hotel` VALUES (23, '格林豪泰成都人民公园酒店', '0015', '东城根上街34号', 30.662556, 104.060891, 6, '下榻格林豪泰成都人民公园酒店，感受成都的独特魅力。 酒店拥有高品质的服务以及完善的设施，可满足游客们的所有需求。 停车场, 送餐服务, 餐厅, 洗衣服务, 电梯等设施都已配备，可供住客使用。 客房舒适温馨，部分客房内设无线上网, 无线上网(免费), 禁烟房, 空调, 暖气等设施。 酒店内设多种娱乐设施。 在 格林豪泰成都人民公园酒店 住宿期间，你会发现酒店内气氛温馨，服务一流，带给您宾至如归的感受。', 'http://pix1.agoda.net/hotelimages/255/255331/255331_15052916150028040982.jpg?s=624x', 3);
INSERT INTO `hotel` VALUES (24, '成都伊丽特酒店', '0016', '\r\n北三路二环151号', 30.693689, 104.086983, 6, '成都伊丽特酒店位于成都的黄金地段，毗邻市区内的各大主要景点。 酒店内设施齐全，可为住客提供舒适的住宿条件。 在酒店内，您会发现内设免费房内无线网络, 24小时前台, 24小时送餐服务, 无障碍设施, 快速入住/退房登记等设施。 客房内必需品一应俱全，部分客房还配有平板电视, 无线上网, 无线上网(免费), 禁烟房, 空调等，保证您住得舒适。 为了让游客体验更完美的住宿体验，酒店提供了多种休闲设施，例如水疗中心, 按摩等。 热情友好的工作人员、完善的设施、优越的地理位置、便于游客前往成都的各大景点，这些都是众多游客选择成都伊丽特酒店的原因。', 'http://pix3.agoda.net/hotelimages/255/255388/255388_14070413200020152992.jpg?s=624x', 4);
INSERT INTO `hotel` VALUES (25, '速8酒店成都春熙店', '0017', '太升南路180号', 30.663437, 104.076263, 4, '速8酒店成都春熙店是一家2星级酒店，可让您的 成都之行变得更完美。 不论是商务人士，还是观光游客，都可以尽情享受酒店内的设施和服务。 住客们可随意使用24小时送餐服务, 24小时前台, 行李存放服务, 停车场, 送餐服务等设施。 客房舒适温馨，部分客房内设平板电视, 禁烟房, 空调, 唤醒服务, 书桌等设施。 酒店内设多种娱乐设施。 不论您是带着何种目的前往成都，速8酒店成都春熙店都可让您感受到家的温馨与舒适。', 'http://pix2.agoda.net/hotelimages/266/266793/266793_15073016410033356059.jpg?s=624x', 2);
INSERT INTO `hotel` VALUES (26, '速8酒店成都川大西门店', '0018', '和华北路60号', 30.624001, 104.076523, 4, '速8酒店成都川大西门店是一家在口碑极佳的成都酒店，不管是深度游还是一日游，这家酒店都会是您的理想之选。 酒店内设多种设施和服务，可让您尽受舒适与酣睡。 秉承“顾客至上”的服务理念，速8酒店成都川大西门店的工作人员将为您提供最体贴入微的服务。 客房舒适温馨，部分客房内设空调, 书桌, LAN宽带上网, 电视, 卫星频道/有线电视等设施。 酒店专门为住客准备了花园等，可大大提升您对酒店的满意度。 速8酒店成都川大西门店是在成都 旅行休闲时的完美住宿选择。', 'http://pix3.agoda.net/hotelimages/267694/0/fdbc7008c0da224388e57b3796f9e313.jpg?s=624x', 2);
INSERT INTO `hotel` VALUES (27, '维也纳酒店成都会展中心店', '0019', '高新区天府南路时代天城1391', 30.50334, 104.071243, 1, '维也纳酒店成都会展中心店位于成都的黄金地段，毗邻市区内的各大主要景点。 酒店设施一应俱全，确保您享有良好的住宿体验。 维也纳酒店成都会展中心店的工作人员秉承顾客至上的服务理念，为您提供宾至如归的入住感受。 客房内必需品一应俱全，部分客房还配有平板电视, 储物柜, 镜子, 拖鞋, 毛巾等设施，确保舒适的入住感受。 酒店内设多种休闲娱乐设施。 下榻维也纳酒店成都会展中心店，可方便您前往成都 各区。', 'http://pix1.agoda.net/hotelimages/443/443586/443586_15020517040025135652.jpg?s=624x', 3);
INSERT INTO `hotel` VALUES (28, '成都天之府温德姆至尊豪廷大酒店', '0020', '高新区西部王从中路1088号', 30.792871, 103.900795, 7, '成都天之府温德姆至尊豪廷大酒店是一家5星级酒店，可让您的 成都之行变得更完美。 酒店拥有高品质的服务以及完善的设施，可满足游客们的所有需求。 在酒店内，您会发现内设免费房内无线网络, 24小时安保, 每日客房清洁服务, 传真机, 日用品投递服务等设施。 客房装饰精美，部分还内设 平板电视, 无线上网(免费), 禁烟房, 空调, 暖气等。 酒店专门为住客准备了健身中心, 桑拿, 室内游泳池, 水疗中心, 按摩等，可大大提升您对酒店的满意度。 在 成都天之府温德姆至尊豪廷大酒店 住宿期间，你会发现酒店内气氛温馨，服务一流，带给您宾至如归的感受。', 'http://pix4.agoda.net/hotelimages/234/234485/234485_15061214090029386790.jpg?s=624x', 5);
INSERT INTO `hotel` VALUES (29, '锦江之星成都东风大桥酒店', '0021', '东风路东二段15号', 30.652958, 104.088829, 10, '锦江之星成都东风大桥酒店位于著名的旅游观光区——春熙路商业区，可让您的旅程变得更加舒适和便捷。 酒店内设多种设施和服务，可让您尽受舒适与酣睡。 秉承“顾客至上”的服务理念，锦江之星成都东风大桥酒店的工作人员将为您提供最体贴入微的服务。 部分客房内设有平板电视, 无线上网, 无线上网(免费), 禁烟房, 空调。 酒店内设多种娱乐设施。 下榻锦江之星成都东风大桥酒店，可方便您前往成都 各区。', 'http://pix2.agoda.net/hotelimages/246/246238/246238_15032723400026556676.jpg?s=624x', 2);
INSERT INTO `hotel` VALUES (30, '锦江之星成都体育学院酒店', '0022', '西一环第1区115号', 30.651499, 104.041386, 10, '位于锦里商业街，锦江之星成都体育学院酒店是游览成都时的完美住宿选择。 完善的设施，精美的装饰，这些都可让您在住宿期间感受到更多愉悦。 秉承“顾客至上”的服务理念，锦江之星成都体育学院酒店的工作人员将为您提供最体贴入微的服务。 部分客房内设 平板电视, 无线上网, 无线上网(免费), 禁烟房, 空调等设施，加上设计装饰温馨舒适，定能带给住客宾至如归的感受。 酒店内设多种娱乐设施。 在 锦江之星成都体育学院酒店 住宿期间，你会发现酒店内气氛温馨，服务一流，带给您宾至如归的感受。', 'http://pix2.agoda.net/hotelimages/246/246239/246239_14061915490019929285.jpg?s=624x', 2);
INSERT INTO `hotel` VALUES (31, '锦江之星成都文殊院地铁站酒店', '0023', '银丝路3号', 30.671185, 104.07256, 10, '锦江之星成都文殊院地铁站酒店位于成都的黄金地段，毗邻市区内的各大主要景点。 酒店拥有高品质的服务以及完善的设施，可满足游客们的所有需求。 秉承“顾客至上”的服务理念，锦江之星成都文殊院地铁站酒店的工作人员将为您提供最体贴入微的服务。 客房装饰精美，部分还内设 平板电视, 无线上网, 无线上网(免费), 禁烟房, 空调等。 酒店内设多种娱乐设施。 热情友好的工作人员、完善的设施、优越的地理位置、便于游客前往成都的各大景点，这些都是众多游客选择锦江之星成都文殊院地铁站酒店的原因。', 'http://pix5.agoda.net/hotelimages/246/246240/246240_15061809550029861522.jpg?s=624x', 2);
INSERT INTO `hotel` VALUES (32, '锦江之星成都金仙桥路酒店', '0024', '北乡子县金仙桥5号', 30.677192, 104.052544, 10, '锦江之星成都金仙桥路酒店是一家2星级酒店，可让您的 成都之行变得更完美。 酒店为顾客配备了一系列的设施和服务，旨在让各位住客能够享受更多舒适与便捷。 24小时前台, 24小时送餐服务, 无线网络(公共区域), 停车场, 送餐服务等设施都已配备，可供住客使用。 客房内必需品一应俱全，部分客房还配有平板电视, 无线上网, 无线上网(免费), 空调, 暖气等，保证您住得舒适。 酒店内设多种娱乐设施。 锦江之星成都金仙桥路酒店可满足您的一切需要，酒店员工可为您提供专业的服务。', 'http://pix3.agoda.net/hotelimages/246/246247/246247_15062914400031167524.jpg?s=624x', 2);

-- ----------------------------
-- Table structure for hotelbrand
-- ----------------------------
DROP TABLE IF EXISTS `hotelbrand`;
CREATE TABLE `hotelbrand`  (
  `hotelid` int(50) NOT NULL,
  `brandid` int(11) NOT NULL,
  `brandname` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`hotelid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of hotelbrand
-- ----------------------------
INSERT INTO `hotelbrand` VALUES (1, 8, '皇冠假日酒店');
INSERT INTO `hotelbrand` VALUES (2, 5, '假日酒店');
INSERT INTO `hotelbrand` VALUES (3, 5, '假日酒店');
INSERT INTO `hotelbrand` VALUES (4, 3, '凯宾斯基酒店');
INSERT INTO `hotelbrand` VALUES (5, 2, '索菲特酒店');
INSERT INTO `hotelbrand` VALUES (6, 7, '温德姆酒店');
INSERT INTO `hotelbrand` VALUES (7, 3, '索菲特酒店');
INSERT INTO `hotelbrand` VALUES (8, 5, '假日酒店');
INSERT INTO `hotelbrand` VALUES (9, 9, '喜来登酒店');
INSERT INTO `hotelbrand` VALUES (10, 9, '喜来登酒店');
INSERT INTO `hotelbrand` VALUES (11, 9, '喜来登酒店');
INSERT INTO `hotelbrand` VALUES (12, 9, '喜来登酒店');
INSERT INTO `hotelbrand` VALUES (13, 9, '喜来登酒店');
INSERT INTO `hotelbrand` VALUES (17, 3, '索菲特酒店');
INSERT INTO `hotelbrand` VALUES (18, 2, '索菲特酒店');
INSERT INTO `hotelbrand` VALUES (19, 8, '皇冠假日酒店');
INSERT INTO `hotelbrand` VALUES (22, 5, '假日酒店');
INSERT INTO `hotelbrand` VALUES (23, 6, '格林豪泰酒店');
INSERT INTO `hotelbrand` VALUES (24, 6, '格林豪泰酒店');
INSERT INTO `hotelbrand` VALUES (25, 4, '速8酒店');
INSERT INTO `hotelbrand` VALUES (26, 4, '速8酒店');
INSERT INTO `hotelbrand` VALUES (27, 1, '维也纳酒店');
INSERT INTO `hotelbrand` VALUES (28, 7, '温德姆酒店');
INSERT INTO `hotelbrand` VALUES (29, 10, '锦江之星酒店');
INSERT INTO `hotelbrand` VALUES (30, 10, '锦江之星酒店');
INSERT INTO `hotelbrand` VALUES (31, 10, '锦江之星酒店');
INSERT INTO `hotelbrand` VALUES (32, 10, '锦江之星酒店');

-- ----------------------------
-- Table structure for hotelman
-- ----------------------------
DROP TABLE IF EXISTS `hotelman`;
CREATE TABLE `hotelman`  (
  `hotelid` int(11) NOT NULL AUTO_INCREMENT,
  `hotelphone` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `hotelpw` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `hotelname` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`hotelid`) USING BTREE,
  UNIQUE INDEX `hotelphone`(`hotelphone`) USING BTREE,
  UNIQUE INDEX `hotelname`(`hotelname`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 109 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of hotelman
-- ----------------------------
INSERT INTO `hotelman` VALUES (1, '0504', '123456', '成都保利公园皇冠假日酒店');
INSERT INTO `hotelman` VALUES (2, '0679', '123456', '成都东方广场假日酒店');
INSERT INTO `hotelman` VALUES (3, '0815', '123456', '成都新都假日酒店');
INSERT INTO `hotelman` VALUES (4, '0713', '123456', '四川岷山拉萨大酒店');
INSERT INTO `hotelman` VALUES (5, '0156', '123456', '成都泰逸酒店');
INSERT INTO `hotelman` VALUES (6, '0377', '123456', '成都世代锦江国际酒店');
INSERT INTO `hotelman` VALUES (7, '0296', '123456', '成都马瑞卡都市酒店');
INSERT INTO `hotelman` VALUES (8, '0855', '123456', '成都鼓楼智选假日酒店');
INSERT INTO `hotelman` VALUES (9, '0001', '123456', '成都天府丽都喜来登饭店');
INSERT INTO `hotelman` VALUES (10, '0002', '123456', '四川锦江宾馆东楼');
INSERT INTO `hotelman` VALUES (11, '0003', '123456', '成都银河王朝大酒店');
INSERT INTO `hotelman` VALUES (12, '0004', '123456', '岷山饭店');
INSERT INTO `hotelman` VALUES (13, '0005', '123456', '成都天府阳光酒店');
INSERT INTO `hotelman` VALUES (14, '0006', '123456', '成都西藏饭店');
INSERT INTO `hotelman` VALUES (15, '0007', '123456', '四川宾馆');
INSERT INTO `hotelman` VALUES (16, '0008', '123456', '成都绿洲大酒店');
INSERT INTO `hotelman` VALUES (17, '0009', '123456', '成都凯宾斯基酒店');
INSERT INTO `hotelman` VALUES (18, '0010', '123456', '成都泰合索菲特大饭店');
INSERT INTO `hotelman` VALUES (19, '0011', '123456', '成都总府皇冠假日酒店');
INSERT INTO `hotelman` VALUES (20, '0012', '123456', '成都世纪城天堂洲际大饭店');
INSERT INTO `hotelman` VALUES (21, '0013', '123456', '成都香格里拉大酒店');
INSERT INTO `hotelman` VALUES (22, '0014', '123456', '成都世纪城假日酒店西楼');
INSERT INTO `hotelman` VALUES (23, '0015', '123456', '格林豪泰成都人民公园酒店');
INSERT INTO `hotelman` VALUES (24, '0016', '123456', '成都伊丽特酒店');
INSERT INTO `hotelman` VALUES (25, '0017', '123456', '速8酒店成都春熙店');
INSERT INTO `hotelman` VALUES (26, '0018', '123456', '速8酒店成都川大西门店');
INSERT INTO `hotelman` VALUES (27, '0019', '123456', '维也纳酒店成都会展中心店');
INSERT INTO `hotelman` VALUES (28, '0020', '123456', '成都天之府温德姆至尊豪廷大酒店');
INSERT INTO `hotelman` VALUES (29, '0021', '123456', '锦江之星成都东风大桥酒店');
INSERT INTO `hotelman` VALUES (30, '0022', '123456', '锦江之星成都体育学院酒店');
INSERT INTO `hotelman` VALUES (31, '0023', '123456', '锦江之星成都文殊院地铁站酒店');
INSERT INTO `hotelman` VALUES (32, '0024', '123456', '锦江之星成都金仙桥路酒店');

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order`  (
  `orderid` int(11) NOT NULL AUTO_INCREMENT,
  `clientid` int(11) NOT NULL,
  `hotelid` int(11) NOT NULL,
  `roomtype` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `timestart` int(11) NOT NULL,
  `timeend` int(11) NOT NULL,
  `price` double NOT NULL,
  `status` int(11) NOT NULL,
  `commentstar` int(11) NULL DEFAULT NULL,
  `commentcontent` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`orderid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 44 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES (1, 1, 22, '单人间', 1562860800, 1563120000, 360, 0, NULL, '');
INSERT INTO `order` VALUES (2, 3, 4, '标准间', 1560182400, 1560355200, 500, 2, 5, '早餐很赞，房间干净，设施齐全。很舒服。');
INSERT INTO `order` VALUES (3, 3, 16, '标准间', 1560355200, 1560614400, 750, 2, 4, '地理位置不错 房间设施基本很齐全 也很干净');
INSERT INTO `order` VALUES (4, 4, 11, '单人间', 1563379200, 1563465600, 180, 0, NULL, '');
INSERT INTO `order` VALUES (5, 5, 5, '豪华间', 1560614400, 1560700800, 300, 2, 4, '设备齐全，冬天的话暖气空调都有。网络很给力。屋子清洁也非常好！细心周到的布置，还有卸妆面膜。还有spa！');
INSERT INTO `order` VALUES (6, 6, 6, '单人间', 1562601600, 1562688000, 150, 1, NULL, '');
INSERT INTO `order` VALUES (7, 6, 8, '单人间', 1563379200, 1563465600, 160, 0, NULL, '');
INSERT INTO `order` VALUES (8, 7, 10, '标准间', 1560614400, 1560787200, 700, 2, 4, '房间很大，很舒服，房东人也很好的。');
INSERT INTO `order` VALUES (9, 8, 30, '单人间', 1562860800, 1563120000, 360, 0, NULL, '');
INSERT INTO `order` VALUES (10, 9, 28, '豪华间', 1563465600, 1563552000, 600, 1, NULL, '');
INSERT INTO `order` VALUES (11, 10, 16, '单人间', 1562601600, 1562688000, 160, 1, NULL, '');
INSERT INTO `order` VALUES (12, 11, 12, '单人间', 1560355200, 1560441600, 220, 2, 5, '从服务、环境、到体验都很太棒啦，完美的体验，下次来一定会选择这里：）');
INSERT INTO `order` VALUES (13, 11, 2, '豪华间', 1563379200, 1563465600, 250, 1, NULL, '');
INSERT INTO `order` VALUES (14, 12, 23, '标准间', 1560441600, 1560614400, 400, 2, 5, '地理位置很好 房间干净卫生 员工很热情，还给我做好了游玩的路线');
INSERT INTO `order` VALUES (15, 13, 26, '单人间', 1563379200, 1563465600, 100, 0, NULL, '');
INSERT INTO `order` VALUES (16, 1, 2, '标准间', 1554076800, 1554336000, 540, 2, 5, '房间干净整洁，早饭也很好吃，服务很好，价格也良心');
INSERT INTO `order` VALUES (17, 3, 2, '豪华间', 1554336000, 1554508800, 500, 2, 4, '房间比较舒适，就是服务相比其他酒店的豪华间稍微差点，不过这个价格已经很良心了。');
INSERT INTO `order` VALUES (18, 4, 4, '单人间', 1554508800, 1554681600, 300, 2, 5, '价格真的很便宜，地段也好，距离出玩的地方很近，就是早餐一般般。');
INSERT INTO `order` VALUES (19, 5, 4, '标准间', 1554681600, 1554854400, 500, 2, 4, '和朋友一起出来玩，两个人一起住这里真的很实惠，不过早餐是真的不好吃。');
INSERT INTO `order` VALUES (20, 3, 5, '单人间', 1554854400, 1555113600, 320, 2, 4, '价格真的很良心，四星对得起这个价格了。');
INSERT INTO `order` VALUES (21, 7, 5, '标准间', 1555113600, 1555286400, 460, 2, 4, '还可以，就是酒店里没电脑，出来玩没带电脑想打游戏都不行');
INSERT INTO `order` VALUES (22, 6, 6, '标准间', 1555286400, 1555459200, 400, 2, 5, '便宜实惠，出差住两天真的很划算，离工作地方也很近');
INSERT INTO `order` VALUES (23, 8, 6, '豪华间', 1555459200, 1555632000, 500, 2, 5, '住过最便宜的豪华间，感觉不比别的酒店差');
INSERT INTO `order` VALUES (24, 9, 8, '标准间', 1555632000, 1555804800, 400, 2, 5, '知道我们是情侣一起入住，服务员专门送了我们花，女朋友很高兴');
INSERT INTO `order` VALUES (25, 10, 8, '豪华间', 1555804800, 1555891200, 600, 2, 5, '这家的服务真的好，有事咨询一下就随叫随到那种！');
INSERT INTO `order` VALUES (26, 12, 10, '单人间', 1555891200, 1556064000, 400, 2, 5, '早餐真的好好吃，睡得也很舒服，价格对得起服务');
INSERT INTO `order` VALUES (27, 11, 10, '豪华间', 1556064000, 1556236800, 1000, 2, 5, '住这里的豪华间简直就是一种享受，和在家一样，做什么都很方便');
INSERT INTO `order` VALUES (28, 13, 11, '标准间', 1556236800, 1556409600, 500, 2, 4, '睡得很舒服，就是房间有点小，出门打车也不太方便');
INSERT INTO `order` VALUES (29, 1, 11, '豪华间', 1556409600, 1556582400, 700, 2, 4, '住的地方还行，就是下去吃早饭的时候饭都冷了，希望能早上送到我房间来吧');
INSERT INTO `order` VALUES (30, 3, 12, '标准间', 1556582400, 1556668800, 380, 2, 5, '五星级酒店虽然价格贵点，但是服务和住宿真的无可挑剔');
INSERT INTO `order` VALUES (31, 4, 12, '豪华间', 1556668800, 1556841600, 1000, 2, 5, '很棒，不愧是五星酒店，房间很大');
INSERT INTO `order` VALUES (32, 5, 16, '豪华间', 1556841600, 1557014400, 700, 2, 4, '住的蛮舒服，价钱也不是很高，就是地理位置不太好，一大早就堵车');
INSERT INTO `order` VALUES (33, 6, 16, '单人间', 1557014400, 1557187200, 320, 2, 4, '这附近真的太堵了吧，晚上回来在路上堵一个小时，天气又热，真的让人心情突然糟糕');
INSERT INTO `order` VALUES (34, 7, 22, '标准间', 1557187200, 1557360000, 600, 2, 4, '总觉得价格比附近同类型酒店贵一点，不过还是住的很舒服就是了。');
INSERT INTO `order` VALUES (35, 8, 22, '豪华间', 1557360000, 1557532800, 800, 2, 4, '豪华间的服务也不过如此吧，感觉以后还是住标间比较经济');
INSERT INTO `order` VALUES (36, 9, 23, '单人间', 1557532800, 1557619200, 120, 2, 4, '总觉得房间里有股霉味，可能是成都最近总下雨的缘故吧，工作人员也说没办法处理呢');
INSERT INTO `order` VALUES (37, 10, 23, '豪华间', 1557619200, 1557705600, 300, 2, 3, '这应该是我住过最差的豪华间了，果然便宜是有道理的');
INSERT INTO `order` VALUES (38, 11, 26, '标准间', 1557705600, 1557878400, 400, 2, 4, '价钱真的很便宜啊，和朋友一起住两天一人才200，就是房间有点小');
INSERT INTO `order` VALUES (39, 12, 26, '豪华间', 1557878400, 1557964800, 300, 2, 3, '现在就是后悔，非常后悔自己图便宜订了这家酒店的豪华间，还不如五星酒店的单人间额。');
INSERT INTO `order` VALUES (40, 13, 28, '单人间', 1557964800, 1558137600, 500, 2, 5, '不喜欢和别人住，多花一分钱真的很值，就像睡在自家卧室一样，早餐也好吃');
INSERT INTO `order` VALUES (41, 1, 28, '标准间', 1558137600, 1558310400, 800, 2, 5, '这家店的早餐真的太好吃了吧，房间很大很敞亮，服务也很好');
INSERT INTO `order` VALUES (42, 5, 30, '标准间', 1558310400, 1558483200, 400, 2, 4, '地理位置不错 房间设施基本很齐全 也很干净');
INSERT INTO `order` VALUES (43, 7, 30, '豪华间', 1558483200, 1558656000, 560, 2, 5, '地理位置很好 房间干净卫生 员工很热情，还给我做好了游玩的路线');

-- ----------------------------
-- Table structure for roomtype
-- ----------------------------
DROP TABLE IF EXISTS `roomtype`;
CREATE TABLE `roomtype`  (
  `hotelid` int(11) NOT NULL,
  `roomtype` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `num` int(11) NOT NULL,
  `price` double NOT NULL,
  `discount` int(11) NOT NULL,
  PRIMARY KEY (`hotelid`, `roomtype`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of roomtype
-- ----------------------------
INSERT INTO `roomtype` VALUES (1, '单人间', 60, 200, 1);
INSERT INTO `roomtype` VALUES (1, '标准间', 80, 250, 1);
INSERT INTO `roomtype` VALUES (1, '豪华间', 50, 350, 0);
INSERT INTO `roomtype` VALUES (2, '单人间', 80, 130, 0);
INSERT INTO `roomtype` VALUES (2, '标准间', 60, 180, 1);
INSERT INTO `roomtype` VALUES (2, '豪华间', 60, 250, 0);
INSERT INTO `roomtype` VALUES (3, '单人间', 70, 140, 1);
INSERT INTO `roomtype` VALUES (3, '标准间', 70, 180, 1);
INSERT INTO `roomtype` VALUES (3, '豪华间', 60, 300, 1);
INSERT INTO `roomtype` VALUES (4, '单人间', 70, 150, 0);
INSERT INTO `roomtype` VALUES (4, '标准间', 80, 250, 1);
INSERT INTO `roomtype` VALUES (4, '豪华间', 50, 300, 1);
INSERT INTO `roomtype` VALUES (5, '单人间', 80, 160, 0);
INSERT INTO `roomtype` VALUES (5, '标准间', 70, 230, 0);
INSERT INTO `roomtype` VALUES (5, '豪华间', 50, 300, 1);
INSERT INTO `roomtype` VALUES (6, '单人间', 75, 150, 0);
INSERT INTO `roomtype` VALUES (6, '标准间', 65, 200, 0);
INSERT INTO `roomtype` VALUES (6, '豪华间', 60, 250, 0);
INSERT INTO `roomtype` VALUES (7, '单人间', 80, 160, 0);
INSERT INTO `roomtype` VALUES (7, '标准间', 60, 220, 1);
INSERT INTO `roomtype` VALUES (7, '豪华间', 60, 300, 1);
INSERT INTO `roomtype` VALUES (8, '单人间', 90, 160, 0);
INSERT INTO `roomtype` VALUES (8, '标准间', 80, 200, 0);
INSERT INTO `roomtype` VALUES (8, '豪华间', 80, 300, 1);
INSERT INTO `roomtype` VALUES (9, '单人间', 85, 200, 0);
INSERT INTO `roomtype` VALUES (9, '标准间', 85, 280, 1);
INSERT INTO `roomtype` VALUES (9, '豪华间', 80, 500, 1);
INSERT INTO `roomtype` VALUES (10, '单人间', 100, 200, 1);
INSERT INTO `roomtype` VALUES (10, '标准间', 100, 350, 1);
INSERT INTO `roomtype` VALUES (10, '豪华间', 50, 500, 1);
INSERT INTO `roomtype` VALUES (11, '单人间', 80, 180, 0);
INSERT INTO `roomtype` VALUES (11, '标准间', 80, 250, 0);
INSERT INTO `roomtype` VALUES (11, '豪华间', 40, 350, 1);
INSERT INTO `roomtype` VALUES (12, '单人间', 100, 220, 1);
INSERT INTO `roomtype` VALUES (12, '标准间', 80, 380, 1);
INSERT INTO `roomtype` VALUES (12, '豪华间', 70, 500, 0);
INSERT INTO `roomtype` VALUES (13, '单人间', 100, 160, 0);
INSERT INTO `roomtype` VALUES (13, '标准间', 100, 240, 1);
INSERT INTO `roomtype` VALUES (13, '豪华间', 50, 360, 1);
INSERT INTO `roomtype` VALUES (14, '单人间', 100, 220, 1);
INSERT INTO `roomtype` VALUES (14, '标准间', 80, 300, 0);
INSERT INTO `roomtype` VALUES (14, '豪华间', 60, 400, 0);
INSERT INTO `roomtype` VALUES (15, '单人间', 80, 100, 0);
INSERT INTO `roomtype` VALUES (15, '标准间', 70, 180, 0);
INSERT INTO `roomtype` VALUES (15, '豪华间', 50, 250, 0);
INSERT INTO `roomtype` VALUES (16, '单人间', 100, 160, 1);
INSERT INTO `roomtype` VALUES (16, '标准间', 80, 250, 1);
INSERT INTO `roomtype` VALUES (16, '豪华间', 70, 350, 1);
INSERT INTO `roomtype` VALUES (17, '单人间', 100, 240, 1);
INSERT INTO `roomtype` VALUES (17, '标准间', 80, 400, 1);
INSERT INTO `roomtype` VALUES (17, '豪华间', 70, 500, 0);
INSERT INTO `roomtype` VALUES (18, '单人间', 100, 250, 1);
INSERT INTO `roomtype` VALUES (18, '标准间', 100, 350, 1);
INSERT INTO `roomtype` VALUES (18, '豪华间', 100, 500, 1);
INSERT INTO `roomtype` VALUES (19, '单人间', 100, 180, 1);
INSERT INTO `roomtype` VALUES (19, '标准间', 90, 250, 0);
INSERT INTO `roomtype` VALUES (19, '豪华间', 60, 400, 0);
INSERT INTO `roomtype` VALUES (20, '单人间', 100, 240, 0);
INSERT INTO `roomtype` VALUES (20, '标准间', 80, 350, 1);
INSERT INTO `roomtype` VALUES (20, '豪华间', 70, 450, 0);
INSERT INTO `roomtype` VALUES (21, '单人间', 100, 220, 0);
INSERT INTO `roomtype` VALUES (21, '标准间', 80, 320, 0);
INSERT INTO `roomtype` VALUES (21, '豪华间', 70, 450, 0);
INSERT INTO `roomtype` VALUES (22, '单人间', 80, 180, 0);
INSERT INTO `roomtype` VALUES (22, '标准间', 80, 300, 1);
INSERT INTO `roomtype` VALUES (22, '豪华间', 80, 400, 1);
INSERT INTO `roomtype` VALUES (23, '单人间', 80, 120, 0);
INSERT INTO `roomtype` VALUES (23, '标准间', 70, 200, 0);
INSERT INTO `roomtype` VALUES (23, '豪华间', 50, 300, 0);
INSERT INTO `roomtype` VALUES (24, '单人间', 100, 180, 0);
INSERT INTO `roomtype` VALUES (24, '标准间', 80, 280, 0);
INSERT INTO `roomtype` VALUES (24, '豪华间', 70, 400, 1);
INSERT INTO `roomtype` VALUES (25, '单人间', 80, 100, 1);
INSERT INTO `roomtype` VALUES (25, '标准间', 70, 180, 0);
INSERT INTO `roomtype` VALUES (25, '豪华间', 50, 250, 0);
INSERT INTO `roomtype` VALUES (26, '单人间', 90, 100, 1);
INSERT INTO `roomtype` VALUES (26, '标准间', 70, 200, 1);
INSERT INTO `roomtype` VALUES (26, '豪华间', 40, 300, 1);
INSERT INTO `roomtype` VALUES (27, '单人间', 100, 160, 0);
INSERT INTO `roomtype` VALUES (27, '标准间', 90, 250, 1);
INSERT INTO `roomtype` VALUES (27, '豪华间', 60, 320, 1);
INSERT INTO `roomtype` VALUES (28, '单人间', 100, 250, 0);
INSERT INTO `roomtype` VALUES (28, '标准间', 80, 400, 1);
INSERT INTO `roomtype` VALUES (28, '豪华间', 70, 600, 1);
INSERT INTO `roomtype` VALUES (29, '单人间', 80, 100, 1);
INSERT INTO `roomtype` VALUES (29, '标准间', 70, 180, 0);
INSERT INTO `roomtype` VALUES (29, '豪华间', 50, 250, 0);
INSERT INTO `roomtype` VALUES (30, '单人间', 70, 120, 1);
INSERT INTO `roomtype` VALUES (30, '标准间', 70, 200, 1);
INSERT INTO `roomtype` VALUES (30, '豪华间', 60, 280, 1);
INSERT INTO `roomtype` VALUES (31, '单人间', 80, 100, 0);
INSERT INTO `roomtype` VALUES (31, '标准间', 80, 200, 1);
INSERT INTO `roomtype` VALUES (31, '豪华间', 40, 300, 1);
INSERT INTO `roomtype` VALUES (32, '单人间', 100, 100, 1);
INSERT INTO `roomtype` VALUES (32, '标准间', 100, 200, 1);
INSERT INTO `roomtype` VALUES (32, '豪华间', 50, 280, 1);

SET FOREIGN_KEY_CHECKS = 1;
