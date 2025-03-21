CREATE TABLE `post` (
	`id` integer PRIMARY KEY NOT NULL,
	`post` text NOT NULL,
	`username` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
