<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import InputText from "../parts/InputText.svelte"
  import Button from "../parts/Button.svelte"
  // import { count } from '../../store/count';
  // let defaultTitle = 'new'
  // let count = 0;
  const dispatch = createEventDispatcher();
  export let index :number;
  export let count :number;
  export let title :string;
  const onClickIncrement = () => {
    // count.update(n => n + 1);
    count += 1
  };
  const onClickDecriment = () => {
    // count.update(n => n - 1);
    count -= 1
  }
  const onClickReset = () => {
    // count.set(0)
    count = 0
  }
  const onClickDelete = () => {
    count += 1
    const value = {
      count,
      index
    }
    dispatch('delete', value)
    count = 0
  }
</script>

<div class="flex">
  <InputText bind:value={title}/>
  <Button on:click={onClickIncrement} value={"+"} />
  <Button on:click={onClickDecriment} value={"-"}/>
  <Button on:click={onClickReset} value={"0"}/>
  <Button on:click={onClickDelete} value={"×"}/>
</div>

<style lang="scss">
.flex{
  display: flex;
  justify-content: center;
}
</style>
