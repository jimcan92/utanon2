import type { User } from '$lib/types.ts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	// Since `sqlite3` is a callback based system, we'll want to use a
	// promise to return the data in an async manner.
	const loadDataPromise = new Promise<User[]>((resolve, reject) => {
		const db = locals.db;
		const query = 'SELECT * FROM users';
		db.all<User>(query, (err: Error | null, rows: User[]) => {
			if (err) {
				reject(err);
				return;
			}
			resolve(rows);
		});
	});
	const rows = await loadDataPromise;
	return {
		users: rows
	};
};

// /** @type {import('./$types').Actions} */
// export const actions = {
// 	onSubmit: async ({ request, locals: { db } }) => {
// 		const data = await request.formData();
// 		const uname = data.get('uname');

// 		db.exec('INSERT INTO users (id, username) VALUES (NULL, "Jimboy")');
// 	}
// };
