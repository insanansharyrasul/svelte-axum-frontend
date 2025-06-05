<script lang="ts">
    import { onMount } from "svelte";
    import type { User } from "$lib/types";
    import { fetchHelloMessage, fetchUsers, createUser } from "$lib/api";
    import UserList from "$lib/components/UserList.svelte";
    import UserForm from "$lib/components/UserForm.svelte";
    import "$lib/styles.css";

    let message = "";
    let users: User[] = [];
    let isLoading = false;
    let error = "";

    onMount(async () => {
        await loadInitialData();
    });

    async function loadInitialData() {
        isLoading = true;
        error = "";

        try {
            // Load hello message and users in parallel
            const [helloMsg, usersList] = await Promise.all([
                fetchHelloMessage(),
                fetchUsers(),
            ]);

            message = helloMsg;
            users = usersList;
        } catch (err) {
            error = "Failed to load initial data. Please refresh the page.";
            console.error("Error loading initial data:", err);
        } finally {
            isLoading = false;
        }
    }

    async function handleUserCreated(event: CustomEvent<{ name: string }>) {
        const userName = event.detail.name;

        if (!userName?.trim()) return;

        isLoading = true;
        error = "";

        try {
            const success = await createUser(userName);
            if (success) {
                users = await fetchUsers();
            } else {
                error = "Failed to create user. Please try again.";
            }
        } catch (err) {
            error = "Failed to create user. Please try again.";
            console.error("Error creating user:", err);
        } finally {
            isLoading = false;
        }
    }
</script>

<main>
    <h1>Svelte + Axum App</h1>

    {#if error}
        <div class="error">
            {error}
        </div>
    {/if}

    <div class="message">
        <h2>{message || "Loading..."}</h2>
    </div>

    <UserList {users} />

    <UserForm {isLoading} on:userCreated={handleUserCreated} />
</main>
