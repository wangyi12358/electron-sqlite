CREATE TABLE `user` (
	`id` integer PRIMARY KEY NOT NULL,
	`full_name` text,
	`create_at` integer DEFAULT (datetime('now','localtime')),
	`update_at` integer
);
