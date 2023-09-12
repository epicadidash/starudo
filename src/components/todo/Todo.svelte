<script lang="ts">
export let id:number;
export let title:string;
export let originalstatus:string = "not completed ";
export let expecteddate:Date;
let currentdate:Date= new Date();
let currentYear = currentdate.getFullYear();
 let currentMonth = currentdate.getMonth() + 1;
let  currentDay = currentdate.getDate();
let strike = false
$: currentstatus = originalstatus
function oncompletion(event:Event){
  event.stopPropagation();
  strike = !strike;
  console.log(strike)
  console.log(currentstatus)
  if(currentstatus === "completed"){
    currentstatus = "not completed"
  }else{
    currentstatus= "completed"
  }
}
</script>
<div class="todocontainer">
  <div class="round" >
    <input type="checkbox" id={id?.toString()} />
    <label on:click|capture={oncompletion } for={id?.toString()}></label>
  </div>
<span class={strike ? 'strikethrough' : ''}>{title}</span>
<div>
  <s> <span> {title}</span></s>
</div>
</div>
<style>
  @import "./todo.css";
</style>