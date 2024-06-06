<script lang="ts">
	import type { PageServerData } from './$types';

	// I am using Svelte 5 so you can use the export let syntax if you aren't
	let { data }: { data: PageServerData } = $props();

	const users = data.users;

	let uname = $state('');
</script>

<div>
	{#if users.length > 0}
		{#each users as user}
			<div>
				<span>Username</span>
				<span>{user.username}</span>
			</div>
		{/each}
	{/if}
</div>

<form action="?/onSubmit" method="post">
	<input type="text" name="uname" class="input" bind:value={uname} />
	<button class="btn">Submit</button>
</form>
