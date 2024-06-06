// See https://kit.svelte.dev/docs/types#app

import type sqlite3 from 'sqlite3';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			db: sqlite3.Database;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
