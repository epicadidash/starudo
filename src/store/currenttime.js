import { writable } from 'svelte/store';

// Create a writable store with an initial value
const currentDateTime = writable(new Date());

// Update the store with the current date and time every second
setInterval(() => {
  currentDateTime.set(new Date());
}, 1000);

export default currentDateTime;