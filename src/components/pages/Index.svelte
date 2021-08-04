<script lang="ts">
import CounterContainer from "../templates/CounterContainer.svelte";
import Button from "../parts/Button.svelte"
import { counterList } from "../../store/counterList"
import _ from "lodash"

interface defaultCounterList {
  title:string,
  count:number
}

const counterConstant = {
  title: "new",
  count:0
}

$:reactiveCounterList = $counterList

$:countSum = $counterList.reduce(function(sum:number, element:defaultCounterList){
  return sum + element.count;
}, 0);

const onClickAddCounterContainer = () => {
  $counterList =[...$counterList, _.cloneDeep(counterConstant)]
}

const handleOnClickDelete = (value :any) => {
  $counterList.splice(value.index, 1)
  $counterList = $counterList
}

const onClickDeleteAllCounter = () => {
  $counterList.splice(0)
  $counterList = $counterList
}

</script>
<div class="center mb-8">
  <div class="center mb-8">
    {#each reactiveCounterList as item, index}
      <CounterContainer index={index} bind:title={item.title}  bind:count={item.count} on:delete={e => handleOnClickDelete(e.detail)}/>
    {/each}
    <Button on:click={onClickAddCounterContainer} class="button-bar--green" />
    <div class="my-8"></div>
    <Button on:click={onClickDeleteAllCounter} class="button-bar--red" value={"delete all counter"}/>
  </div>
  <div class="flex max-w-full">
    <p class="mx-4">
      title list:
      {#each reactiveCounterList as item}
        {item.title}
      {/each}
    </p>
  </div>
  <p class="my-8">
    some of count:{countSum}
  </p>
</div>

<style>
.flex{
  display: flex;
  justify-content: center;
}
</style>
