CREATE TABLE `province` (
  `id` int(11) NOT NULL,
  `regione` varchar(35) DEFAULT NULL,
  `comune` varchar(35) DEFAULT NULL,
  `maschi` int(11) DEFAULT NULL,
  `femmine` int(11) DEFAULT NULL,
  `totale` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `province`
  ADD PRIMARY KEY (`id`);
  
ALTER TABLE `province`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;  
  
  
