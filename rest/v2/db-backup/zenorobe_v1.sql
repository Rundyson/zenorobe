-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 13, 2024 at 08:51 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zenorobe_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `clothes`
--

CREATE TABLE `clothes` (
  `clothes_aid` int(11) NOT NULL,
  `clothes_is_active` tinyint(1) NOT NULL,
  `clothes_image` varchar(40) NOT NULL,
  `clothes_image2` varchar(50) NOT NULL,
  `clothes_title` varchar(40) NOT NULL,
  `clothes_category_id` int(11) NOT NULL,
  `clothes_price` varchar(40) NOT NULL,
  `clothes_datetime` varchar(30) NOT NULL,
  `clothes_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `clothes`
--

INSERT INTO `clothes` (`clothes_aid`, `clothes_is_active`, `clothes_image`, `clothes_image2`, `clothes_title`, `clothes_category_id`, `clothes_price`, `clothes_datetime`, `clothes_created`) VALUES
(81, 1, 'na-card-b2.jpg', 'na-card-a2.jpg', 'try2', 6, '34343', '2024-12-13 15:48:01', 2024),
(82, 1, 'na-card-f1.jpg', 'na-card-d2.jpg', '53453', 4, '5354', '2024-12-13 15:48:38', 2024),
(83, 1, 'na-card-a1.jpg', 'na-card-a2.jpg', '54544', 4, '4334', '2024-12-13 15:49:01', 2024);

-- --------------------------------------------------------

--
-- Table structure for table `clothes_banner`
--

CREATE TABLE `clothes_banner` (
  `banner_aid` int(11) NOT NULL,
  `banner_is_active` tinyint(1) NOT NULL,
  `banner_image` varchar(40) NOT NULL,
  `banner_title` varchar(50) NOT NULL,
  `banner_subtitle` varchar(40) NOT NULL,
  `banner_datetime` varchar(30) NOT NULL,
  `banner_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `clothes_banner`
--

INSERT INTO `clothes_banner` (`banner_aid`, `banner_is_active`, `banner_image`, `banner_title`, `banner_subtitle`, `banner_datetime`, `banner_created`) VALUES
(5, 1, 'gwenny.jpg', 'tryyyy', 'yrtrt', '2024-12-13 15:32:53', 2024),
(6, 1, 'na-card-f1.jpg', 'trtr', 'rtrt', '2024-12-13 15:31:44', 2024),
(7, 1, 'na-card-j2.jpg', 'trtr', 'rtrt', '2024-12-13 15:31:49', 2024);

-- --------------------------------------------------------

--
-- Table structure for table `clothes_category`
--

CREATE TABLE `clothes_category` (
  `category_aid` int(11) NOT NULL,
  `category_is_active` tinyint(1) NOT NULL,
  `category_title` varchar(30) NOT NULL,
  `category_datetime` varchar(30) NOT NULL,
  `category_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `clothes_category`
--

INSERT INTO `clothes_category` (`category_aid`, `category_is_active`, `category_title`, `category_datetime`, `category_created`) VALUES
(4, 1, 'Winter', '2024-12-13 11:43:14', 2024),
(6, 1, 'Summer', '2024-12-13 12:51:13', 2024);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clothes`
--
ALTER TABLE `clothes`
  ADD PRIMARY KEY (`clothes_aid`);

--
-- Indexes for table `clothes_banner`
--
ALTER TABLE `clothes_banner`
  ADD PRIMARY KEY (`banner_aid`);

--
-- Indexes for table `clothes_category`
--
ALTER TABLE `clothes_category`
  ADD PRIMARY KEY (`category_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clothes`
--
ALTER TABLE `clothes`
  MODIFY `clothes_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `clothes_banner`
--
ALTER TABLE `clothes_banner`
  MODIFY `banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `clothes_category`
--
ALTER TABLE `clothes_category`
  MODIFY `category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
