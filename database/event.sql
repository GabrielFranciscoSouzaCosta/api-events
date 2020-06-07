CREATE DATABASE IF NOT EXISTS `events-api`;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE `event` (
  `id` int(11) NOT NULL,
  `dataEvento` varchar(50) NOT NULL,
  `descricao` text NOT NULL,
  `estilo` varchar(20) NOT NULL,
  `formato` varchar(20) NOT NULL,
  `hora` varchar(20) NOT NULL,
  `idCriadorEvento` int(11) NOT NULL,
  `latitude` varchar(60) NOT NULL,
  `longitude` varchar(60) NOT NULL,
  `listadeUsuariosConfirmados` int(11) NOT NULL,
  `local` varchar(50) NOT NULL,
  `nome` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `event` ADD PRIMARY KEY (`id`);

ALTER TABLE `event`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;