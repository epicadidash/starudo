<script lang="ts">
     import Todo from '../components/todo/Todo.svelte';
     let star:number = 24;
</script>

<Todo id={star} title="Hello"/>
<style>
     @import './home.css';
</style>

