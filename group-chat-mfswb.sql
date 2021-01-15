-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 15, 2021 at 04:16 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `group-chat-mfswb`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `have_image` tinyint(1) NOT NULL DEFAULT 0,
  `is_active` bigint(1) NOT NULL DEFAULT 1,
  `is_type` enum('on','off','','') NOT NULL DEFAULT 'off'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `username`, `password`, `created_at`, `have_image`, `is_active`, `is_type`) VALUES
(1, 'Razinul', 'Karim', 'razinul_karim', 'razinul_karim', '2020-11-06 01:15:14', 0, 1606585436, 'on'),
(2, 'Rashed Hasan', 'Siam', 'rashed_hasan_siam', 'rashed_hasan_siam', '2020-11-06 01:15:14', 0, 1606585490, 'on'),
(3, 'Fadil', 'Ahnaf', 'fadil_ahnaf', 'fadil_ahnaf', '2020-11-06 01:15:14', 0, 1, 'off'),
(4, 'Hasan', 'Shahrirar', 'hasan_shahriar', 'hasan_shahriar', '2020-11-06 01:15:14', 0, 1, 'off'),
(5, 'Sourav', 'Malo', 'sourav_malo', 'sourav_malo', '2020-11-06 01:15:14', 0, 1, 'on'),
(6, 'Jyotirmoy', 'Halder', 'jyotirmoy_halder', 'jyotirmoy_halder', '2020-11-06 01:15:14', 0, 1, 'off'),
(7, 'Md Anis', 'Molla', 'md_anis_molla', 'md_anis_molla', '2020-11-06 01:15:14', 0, 1, 'off'),
(8, 'Al Shahriar', 'Tonmoy', 'al_shahriar_tonmoy', 'al_shahriar_tonmoy', '2020-11-06 01:15:14', 0, 1, 'off'),
(9, 'Md', 'Sayem', 'md_sayem', 'md_sayem', '2020-11-06 01:15:14', 0, 1, 'off'),
(10, 'Sujan ', 'Mridha', 'sujan_mridha', 'sujan_mridha', '2020-11-06 01:15:14', 0, 1, 'off'),
(11, 'Md', 'Rahat', 'md_rahat', 'md_rahat', '2020-11-06 01:15:14', 0, 1, 'off'),
(12, 'Tarikul Islam', 'Sumom', 'tarikul_islam_sumon', 'tarikul_islam_sumon', '2020-11-06 01:15:14', 0, 1, 'off'),
(13, 'Nayem', 'Zaman', 'nayem_zaman', 'nayem_zaman', '2020-11-06 01:15:14', 0, 1, 'off'),
(14, 'Ahmed', 'Rayhan', 'ahmed_rayhan', 'ahmed_rayhan', '2020-11-06 01:15:14', 0, 1, 'off'),
(15, 'Rokibul Hasan', 'Rijon', 'rokibul_hasan_rijon', 'rokibul_hasan_rijon', '2020-11-06 01:15:14', 0, 1, 'off');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
