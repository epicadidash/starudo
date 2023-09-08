<script lang="ts">
    export let name :string
    export let id:string
</script>


<li>
    <input type="checkbox" name="task" id={id}>
    <label for={id}>{name}</label>
</li>
<style>
    @import './todolistitem.css';
</style>