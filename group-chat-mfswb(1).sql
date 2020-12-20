-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 20, 2020 at 03:59 AM
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
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `short_name` varchar(30) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `have_image` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`id`, `name`, `short_name`, `created_at`, `have_image`) VALUES
(1, 'JavaScript Developers', 'javascript_developers', '2020-11-06 01:16:23', 0),
(2, 'PHP Developers', 'php_developers', '2020-11-06 01:16:23', 0),
(3, 'Python Developers', 'python_developers', '2020-11-06 01:17:45', 0),
(4, 'Swift Developers', 'swift_developers', '2020-11-06 01:17:45', 0),
(5, 'Go Developers', 'go_developers', '2020-11-06 01:17:45', 0);

-- --------------------------------------------------------

--
-- Table structure for table `group_members`
--

CREATE TABLE `group_members` (
  `group_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `group_members`
--

INSERT INTO `group_members` (`group_id`, `user_id`) VALUES
(5, 1),
(5, 2),
(5, 3),
(5, 4),
(5, 5),
(5, 6),
(5, 7),
(5, 8),
(5, 9),
(5, 10),
(4, 1),
(4, 3),
(4, 5),
(4, 7),
(4, 9),
(4, 11),
(4, 13),
(4, 15),
(4, 14),
(4, 12),
(3, 2),
(3, 4),
(3, 6),
(3, 8),
(3, 10),
(3, 12),
(3, 14),
(3, 1),
(3, 3),
(3, 5),
(2, 2),
(2, 3),
(2, 5),
(2, 7),
(2, 11),
(2, 13),
(2, 14),
(2, 15),
(2, 12),
(2, 10),
(1, 1),
(1, 2),
(1, 4),
(1, 5),
(1, 7),
(1, 8),
(1, 10),
(1, 11),
(1, 13),
(1, 14);

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `message` text NOT NULL,
  `sent_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `group_id`, `user_id`, `message`, `sent_at`) VALUES
(24, 1, 14, 'sssss', '2020-12-19 16:35:17'),
(25, 2, 3, 'sssssss', '2020-12-19 16:38:47'),
(26, 3, 4, 'xgdxxxvxv', '2020-12-19 16:39:17'),
(27, 4, 10, 'sdfgfdsgdf', '2020-12-19 16:39:17'),
(28, 5, 7, 'ssdsdd', '2020-12-19 16:39:39'),
(29, 1, 8, 'ssssss', '2020-12-19 17:50:07');

-- --------------------------------------------------------

--
-- Table structure for table `messages_seen`
--

CREATE TABLE `messages_seen` (
  `message_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `group_members`
--
ALTER TABLE `group_members`
  ADD KEY `user_id` (`user_id`),
  ADD KEY `group_id` (`group_id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `group_id` (`group_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `messages_seen`
--
ALTER TABLE `messages_seen`
  ADD KEY `message_id` (`message_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `group_members`
--
ALTER TABLE `group_members`
  ADD CONSTRAINT `group_members_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `group_members_ibfk_2` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `messages_seen`
--
ALTER TABLE `messages_seen`
  ADD CONSTRAINT `messages_seen_ibfk_1` FOREIGN KEY (`message_id`) REFERENCES `messages` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `messages_seen_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
