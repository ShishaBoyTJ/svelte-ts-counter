<script lang="ts">
  export let value="";
  let clazz :any;
  export { clazz as class };
</script>

  <input bind:value={value}  class={`title ${clazz || ''}`} type="text">

<style>
  .title{
    --text-opacity: 1;
    color: #718096;
    color: rgba(113,128,150,var(--text-opacity));
    width: 8rem;
    /* margin:0; */
    padding:0 .25rem;
    border: none;
  }
</style>