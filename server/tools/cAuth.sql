-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 2018-06-07 02:57:34
-- 服务器版本： 5.7.18
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cAuth`
--

-- --------------------------------------------------------

--
-- 表的结构 `cAppinfo`
--

CREATE TABLE `cAppinfo` (
  `appid` char(36) DEFAULT NULL,
  `secret` char(64) DEFAULT NULL,
  `ip` char(20) DEFAULT NULL,
  `login_duration` int(11) DEFAULT NULL,
  `qcloud_appid` char(64) DEFAULT NULL,
  `session_duration` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `cAppinfo`
--

INSERT INTO `cAppinfo` (`appid`, `secret`, `ip`, `login_duration`, `qcloud_appid`, `session_duration`) VALUES
('wxf8625ff11e446330', '', '139.199.182.92', 1000, '1256706969', 2000);

-- --------------------------------------------------------

--
-- 表的结构 `cSessionInfo`
--

CREATE TABLE `cSessionInfo` (
  `open_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `uuid` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `skey` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_visit_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `session_key` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_info` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  `balance` decimal(10,2) NOT NULL DEFAULT '0.00',
  `coin` int(10) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='会话管理用户信息';

--
-- 转存表中的数据 `cSessionInfo`
--

INSERT INTO `cSessionInfo` (`open_id`, `uuid`, `skey`, `create_time`, `last_visit_time`, `session_key`, `user_info`, `balance`, `coin`) VALUES
('oV6hJ5JTjIcM75mNM6pVc17hTmqQ', '080cf353-52e2-4e62-b005-a77d29028acd', '19b84570cb7ccc56189aa2b134ecc3f5fa4f776a', '2018-06-04 08:05:47', '2018-06-04 08:05:47', '/DeL4Rzd4wZb1Erc4LieDQ==', '{\"openId\":\"oV6hJ5JTjIcM75mNM6pVc17hTmqQ\",\"nickName\":\"李岩\",\"gender\":1,\"language\":\"zh_CN\",\"city\":\"Wuhan\",\"province\":\"Hubei\",\"country\":\"China\",\"avatarUrl\":\"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIpbXlweEHmcwKg7bcMZKkVbJpznupVoRJRoCz5oJBUsFKAuMmIibCPv3c67acHZC4dic5t4MraOMLg/132\",\"watermark\":{\"timestamp\":1528099545,\"appid\":\"wxf8625ff11e446330\"}}', '0.00', 0),
('oV6hJ5Llm0TE3UdklLWeWCIq82R0', '845e8975-7204-4c3e-9a4a-82f01eeb2c4d', '188592232d6ca0a2d1ea90f6e3a33a43e0564a5b', '2018-06-04 09:16:38', '2018-06-04 09:16:38', 'cLcnj8GzB2h4vUHVd4YVgA==', '{\"openId\":\"oV6hJ5Llm0TE3UdklLWeWCIq82R0\",\"nickName\":\"姝\",\"gender\":2,\"language\":\"zh_CN\",\"city\":\"Jingmen\",\"province\":\"Hubei\",\"country\":\"China\",\"avatarUrl\":\"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJUpia2e24M97UGMWhokdTsmEcNeDfBFcQeaKWYddVMWdbnsrXsqToXgcib8o6RzW1Vw457XQxjtE4A/132\",\"watermark\":{\"timestamp\":1528103797,\"appid\":\"wxf8625ff11e446330\"}}', '0.00', 0),
('oV6hJ5N7Vpx8n0rRVKUDoJlzTAgI', 'abd9e315-4a02-4cd9-a0c2-2e545c6259df', '7637b580470bdb1ce61541f9a0dec617cc353e42', '2018-06-07 02:47:22', '2018-06-07 02:47:22', 'C78EDakBYxfirPB2XfDKXA==', '{\"openId\":\"oV6hJ5N7Vpx8n0rRVKUDoJlzTAgI\",\"nickName\":\"曹思\",\"gender\":1,\"language\":\"zh_CN\",\"city\":\"Wuhan\",\"province\":\"Hubei\",\"country\":\"China\",\"avatarUrl\":\"https://wx.qlogo.cn/mmopen/vi_32/Q3auHgzwzM6oHFRWQU3kG8qwq2BvoGLSibu1TRbHLC1tFib2THtsuz3ESSGJLYTQBz7NXDFzpiaoPlP6qc6HXe1wA/132\",\"watermark\":{\"timestamp\":1528339640,\"appid\":\"wxf8625ff11e446330\"}}', '100.00', 9800);

-- --------------------------------------------------------

--
-- 表的结构 `missionTable`
--

CREATE TABLE `missionTable` (
  `id` bigint(10) NOT NULL,
  `sort_id` int(2) NOT NULL,
  `title` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `detail` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(5,2) NOT NULL,
  `num_of_people` decimal(2,0) NOT NULL,
  `publisher_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `receiver_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int(1) NOT NULL DEFAULT '0',
  `publish_time` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `receive_time` timestamp NULL DEFAULT NULL,
  `finish_time` timestamp(6) NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `missionTable`
--

INSERT INTO `missionTable` (`id`, `sort_id`, `title`, `detail`, `price`, `num_of_people`, `publisher_id`, `receiver_id`, `status`, `publish_time`, `receive_time`, `finish_time`) VALUES
(1, 1, '吃饭', '开始吃饭', '10.00', '1', '001', NULL, 0, '2018-05-21 16:00:00.000000', NULL, NULL),
(2, 2, '睡觉', '开始睡觉', '20.00', '1', '002', NULL, 0, '2018-05-22 16:00:00.000000', NULL, NULL),
(3, 2, '打豆豆', '开始打豆豆', '20.00', '9', '002', NULL, 0, '2018-05-20 16:00:00.000000', NULL, NULL),
(18, 1, '1', '1', '1.00', '1', 'oV6hJ5N7Vpx8n0rRVKUDoJlzTAgI', NULL, 0, '2018-05-30 08:19:16.482704', NULL, NULL),
(19, 1, '1', '1', '1.00', '1', 'oV6hJ5N7Vpx8n0rRVKUDoJlzTAgI', 'oV6hJ5N7Vpx8n0rRVKUDoJlzTAgI', 1, '2018-05-30 08:20:18.363336', NULL, NULL),
(20, 1, '李岩菜鸡', '11', '12.22', '1', 'oV6hJ5N7Vpx8n0rRVKUDoJlzTAgI', 'oV6hJ5N7Vpx8n0rRVKUDoJlzTAgI', 1, '2018-05-30 08:28:58.629037', NULL, NULL),
(21, 1, '李艳sb', '123', '1.00', '3', 'oV6hJ5N7Vpx8n0rRVKUDoJlzTAgI', 'oV6hJ5N7Vpx8n0rRVKUDoJlzTAgI', 1, '2018-06-01 01:41:52.387867', NULL, NULL),
(22, 1, '菜鸡岩', '123', '1.00', '1', 'oV6hJ5N7Vpx8n0rRVKUDoJlzTAgI', 'oV6hJ5N7Vpx8n0rRVKUDoJlzTAgI', 1, '2018-06-01 02:08:38.418704', NULL, NULL),
(23, 1, '菜鸡岩2', '123', '1.00', '1', 'oV6hJ5N7Vpx8n0rRVKUDoJlzTAgI', 'oV6hJ5N7Vpx8n0rRVKUDoJlzTAgI', 1, '2018-06-01 02:13:46.812530', NULL, NULL),
(24, 1, '909', 'io', '9.00', '8', 'oV6hJ5N7Vpx8n0rRVKUDoJlzTAgI', NULL, 0, '2018-06-04 08:02:08.984797', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cSessionInfo`
--
ALTER TABLE `cSessionInfo`
  ADD PRIMARY KEY (`open_id`),
  ADD KEY `openid` (`open_id`) USING BTREE,
  ADD KEY `skey` (`skey`) USING BTREE;

--
-- Indexes for table `missionTable`
--
ALTER TABLE `missionTable`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `missionTable`
--
ALTER TABLE `missionTable`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
