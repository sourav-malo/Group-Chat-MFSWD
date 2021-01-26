-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 26, 2021 at 04:37 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

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
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `have_image` tinyint(1) NOT NULL DEFAULT '0'
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
  `user_id` int(11) NOT NULL,
  `status` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `group_members`
--

INSERT INTO `group_members` (`group_id`, `user_id`, `status`) VALUES
(5, 1, 0),
(5, 2, 1),
(5, 3, NULL),
(5, 4, NULL),
(5, 5, NULL),
(5, 6, NULL),
(5, 7, NULL),
(5, 8, NULL),
(5, 9, NULL),
(5, 10, 0),
(4, 1, 1),
(4, 3, NULL),
(4, 5, NULL),
(4, 7, NULL),
(4, 9, NULL),
(4, 11, NULL),
(4, 13, NULL),
(4, 15, NULL),
(4, 14, 1),
(4, 12, 0),
(3, 2, 0),
(3, 4, NULL),
(3, 6, NULL),
(3, 8, NULL),
(3, 10, 0),
(3, 12, 1),
(3, 14, 0),
(3, 1, 0),
(3, 3, NULL),
(3, 5, NULL),
(2, 2, 0),
(2, 3, NULL),
(2, 5, NULL),
(2, 7, NULL),
(2, 11, NULL),
(2, 13, NULL),
(2, 14, 0),
(2, 15, NULL),
(2, 12, 0),
(2, 10, 1),
(1, 1, 0),
(1, 2, 0),
(1, 4, NULL),
(1, 5, NULL),
(1, 7, NULL),
(1, 8, NULL),
(1, 10, 0),
(1, 11, NULL),
(1, 13, NULL),
(1, 14, 0);

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `message` text NOT NULL,
  `sent_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `group_id`, `user_id`, `message`, `sent_at`) VALUES
(1, 5, 1, 'Razin', '2021-01-11 15:31:57'),
(2, 5, 1, 'Razin', '2021-01-11 15:32:01'),
(3, 2, 2, 'Rashed', '2021-01-11 15:32:25'),
(4, 3, 3, 'Fadil', '2021-01-11 15:32:56'),
(5, 4, 4, 'Hasan', '2021-01-11 15:32:56'),
(6, 3, 3, 'Fadil', '2021-01-11 15:33:00'),
(7, 4, 4, 'Hasan', '2021-01-11 15:33:00'),
(8, 5, 5, 'Sourav', '2021-01-11 15:33:39'),
(9, 2, 2, 'Rashed', '2021-01-11 15:33:39'),
(10, 5, 5, 'Sourav', '2021-01-11 15:33:43'),
(11, 2, 2, 'Rashed', '2021-01-11 15:33:43'),
(12, 1, 12, 'Tarik', '2021-01-11 15:34:36'),
(13, 3, 1, 'Hello reja vai? how are you?', '2021-01-15 14:49:58'),
(14, 5, 1, 'sourav i love javascript', '2021-01-15 14:51:35'),
(15, 2, 12, 'i love php', '2021-01-15 15:06:55'),
(16, 4, 12, 'swift is my favourite language', '2021-01-15 15:07:28'),
(17, 3, 12, 'python . owo language', '2021-01-15 15:07:47'),
(18, 5, 1, 'and I learnt various API from Mozilla developer network (MDN)\r\nSourav suggested me the site.\r\nThank you Sourav.', '2021-01-26 03:19:58'),
(19, 5, 1, 'and Thank You all.', '2021-01-26 03:21:07'),
(20, 5, 10, 'You are right Razin. MDN is best for WEB', '2021-01-26 03:23:50'),
(21, 5, 10, 'But it is very boring for beginner. ', '2021-01-26 03:24:59'),
(22, 5, 10, 'Blogs are also very helpful.', '2021-01-26 03:25:44'),
(23, 5, 10, 'What are you learning now?', '2021-01-26 03:26:12');

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
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `have_image` tinyint(1) NOT NULL DEFAULT '0',
  `is_active` bigint(1) NOT NULL DEFAULT '1',
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
  ADD KEY `messages_ibfk_1` (`group_id`),
  ADD KEY `messages_ibfk_2` (`user_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

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
  ADD CONSTRAINT `messages_seen_ibfk_1` FOREIGN KEY (`message_id`) REFERENCES `messages` (`id`),
  ADD CONSTRAINT `messages_seen_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
