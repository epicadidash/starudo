<script lang="ts">
  import currentDateTime from "../../store/currenttime";
export let id:number;
export let title:string;
export let originalstatus:string = "not completed ";
export let edate:string;
let expecteddate:Date=new Date(edate);
let redstatus = false
if ($currentDateTime > expecteddate) {
    redstatus = true
}
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
<span class="span  {strike ? 'invisible' : ''} {redstatus ? 'red' : ''}">{title}</span>
<div class={strike ? '' : 'invisible'}>
  <s class="strike"> <span> {title}</span></s>
</div>
</div>
<style>
  @import "./todo.css";
</style>