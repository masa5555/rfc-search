CREATE TABLE `rfc` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`doc_id` varchar(10) NOT NULL,
	`title` varchar(255) NOT NULL,
	`draft` varchar(50),
	`source` varchar(50) NOT NULL,
	`status` varchar(20) NOT NULL,
	`page_count` tinyint,
	`pub_status` varchar(20) NOT NULL,
	`pub_year` year,
	`pub_month` tinyint,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `rfc_id` PRIMARY KEY(`id`),
	CONSTRAINT `rfc_doc_id_unique` UNIQUE(`doc_id`)
);
