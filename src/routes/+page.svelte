<script lang="ts">
     import Todo from '../components/todo/Todo.svelte';
     let star:number = 24;
</script>

<Todo id={star} title="Hello" edate='2023-09-11'/>
<style>
     @import './home.css';
</style>

