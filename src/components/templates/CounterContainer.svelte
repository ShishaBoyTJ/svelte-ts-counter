<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import InputText from "../parts/InputText.svelte"
  import Button from "../parts/Button.svelte"

  const dispatch = createEventDispatcher();
  export let index :number;
  export let count :number;
  export let title :string;

  const onClickIncrement = () => {
    count += 1
  };

  const onClickDecriment = () => {
    if(count > 0){
      count -= 1
    }
  }

  const onClickReset = () => {
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

<div class="flex my-4 container">
  <InputText bind:value={title} class="mx-8 mxr-auto"/>
  {count}
  <div class="flex mx-8 mxl-auto">
    <Button on:click={onClickIncrement} value={"+"} class="red"/>
    <Button on:click={onClickDecriment} value={"-"} class="blue"/>
    <Button on:click={onClickReset} value={"0"} class="yellow"/>
    <Button on:click={onClickDelete} value={"×"} class="cross"/>
  </div>
</div>

<style>
.flex{
  display: flex;
  justify-content: center;
  align-items: center;
}
.my-4{
  margin:4px 0;
}
.mx-8{
  margin:0 8px;
}
:global(.mxr-auto){
  margin:0 auto 0 0 ;
}
.mxl-auto{
  margin:0 0 0 auto;
}

.container{
  --bg-opacity: 1;
  background-color: rgba(247,250,252,var(--bg-opacity));
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
  border-radius: .25rem;
  padding:.5rem;
  margin-bottom: .5rem;
  max-width: 24rem;
}

</style>
