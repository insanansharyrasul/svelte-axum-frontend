<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher<{
        userCreated: { name: string };
    }>();

    export let isLoading = false;

    let newUserName = "";

    async function handleSubmit() {
        if (!newUserName.trim()) return;

        dispatch("userCreated", { name: newUserName });
        newUserName = "";
    }

    function handleKeyPress(event: KeyboardEvent) {
        if (event.key === "Enter") {
            handleSubmit();
        }
    }
</script>

<div class="add-user">
    <input
        bind:value={newUserName}
        placeholder="Enter user name"
        disabled={isLoading}
        on:keypress={handleKeyPress}
    />
    <button on:click={handleSubmit} disabled={isLoading || !newUserName.trim()}>
        {isLoading ? "Adding..." : "Add User"}
    </button>
</div>
