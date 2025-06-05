<script lang="ts">
    import type { User } from "../types";

    export let users: User[];
</script>

<div class="users">
    <h3>Users:</h3>
    {#if users.length === 0}
        <p class="empty-state">No users found. Add one below!</p>
    {:else}
        <ul>
            {#each users as user (user.id)}
                <li>
                    {user.name} <span class="user-id">(ID: {user.id})</span>
                </li>
            {/each}
        </ul>
    {/if}
</div>

<style>
    .empty-state {
        color: #666;
        font-style: italic;
        text-align: center;
        padding: 2rem;
    }

    .user-id {
        color: #666;
        font-size: 0.9em;
    }
</style>
