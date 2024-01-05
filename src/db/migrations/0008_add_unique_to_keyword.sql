ALTER TABLE `keyword_category` ADD CONSTRAINT `keyword_category_name_unique` UNIQUE(`name`);--> statement-breakpoint
ALTER TABLE `keyword` ADD CONSTRAINT `keyword_name_unique` UNIQUE(`name`);