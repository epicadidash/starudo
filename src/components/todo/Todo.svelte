<script lang="ts">
export let id:number;
export let title:string;
export let status:string;
export let expecteddate:Date;
let currentdate:Date= new Date();
let currentYear = currentdate.getFullYear();
 let currentMonth = currentdate.getMonth() + 1;
let  currentDay = currentdate.getDate();

</script>
<div class="todocontainer">
  <div class="round">
    <input type="checkbox" id={id?.toString()} />
    <label for={id?.toString()}></label>
  </div>
<span>{title}</span>
</div>
<style>
  @import "./todo.css";
</style>