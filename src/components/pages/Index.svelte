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

  // @note value.countが0の時リストが消えないので手を加えた
  countSum = countSum - value.count 
  countSum += 1
  $counterList.splice(value.index, 1)
}

</script>

<div class="">
  {#each $counterList as item, index}
    {index}<CounterContainer index={index} bind:title={item.title}  bind:count={item.count} on:delete={e => handleOnClickDelete(e.detail)}/>
  {/each}
  <Button on:click={onClickAddCounterContainer}/>
  {#each reactiveCounterList as item}
    {item.title}
    {item.count}
  {/each}
  some of count:{countSum}
</div>
<style></style>
