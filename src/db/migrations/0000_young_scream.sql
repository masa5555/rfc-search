CREATE TABLE `health_check` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`description` varchar(255),
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `health_check_id` PRIMARY KEY(`id`)
);
