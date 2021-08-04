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

  // FIXME 下記の処理だとよくない
  // NOTE value.countが0の時リストが消えないので手を加えた

  countSum = countSum - value.count 
  countSum += 1
  $counterList.splice(value.index, 1)
}

</script>
<div class="center">
  <div>
    {#each $counterList as item, index}
      <CounterContainer index={index} bind:title={item.title}  bind:count={item.count} on:delete={e => handleOnClickDelete(e.detail)}/>
    {/each}
    <Button on:click={onClickAddCounterContainer} class="button-bar--green"/>
  </div>
  <div class="flex">
    title list:
    {#each reactiveCounterList as item}
    <p class="mx-4">
      {item.title}
    </p>
    {/each}
  </div>
  <p>
    some of count:{countSum}
  </p>
</div>

<style>
.flex{
  display: flex;
  justify-content: center;
}
.center{
  text-align:center;
}
.mx-4{
  margin:0 4px;
}
</style>
