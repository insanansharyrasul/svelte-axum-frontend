import type { User, HelloResponse } from './types';

const API_BASE = 'http://localhost:3000/api';

export async function fetchHelloMessage(): Promise<string> {
    try {
        const response = await fetch(`${API_BASE}/hello`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: HelloResponse = await response.json();
        return data.message;
    } catch (error) {
        console.error('Failed to fetch hello message:', error);
        return 'Failed to load message';
    }
}

export async function fetchUsers(): Promise<User[]> {
    try {
        const response = await fetch(`${API_BASE}/users`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch users:', error);
        return [];
    }
}

export async function createUser(name: string): Promise<boolean> {
    try {
        const response = await fetch(`${API_BASE}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return true;
    } catch (error) {
        console.error('Failed to create user:', error);
        return false;
    }
}
