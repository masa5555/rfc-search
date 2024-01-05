CREATE TABLE `keyword` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`category_id` int,
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `keyword_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `rfc_keyword_relation` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`rfc_id` int NOT NULL,
	`keyword_id` int NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `rfc_keyword_relation_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `rfc_content` DROP FOREIGN KEY `rfc_content_doc_id_rfc_doc_id_fk`;
