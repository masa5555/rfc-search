ALTER TABLE `rfc` MODIFY COLUMN `draft` varchar(100);--> statement-breakpoint
ALTER TABLE `rfc` MODIFY COLUMN `source` varchar(100) NOT NULL;--> statement-breakpoint
ALTER TABLE `rfc` MODIFY COLUMN `status` varchar(39) NOT NULL;--> statement-breakpoint
ALTER TABLE `rfc` MODIFY COLUMN `pub_status` varchar(30) NOT NULL;