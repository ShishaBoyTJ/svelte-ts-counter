<script lang="ts">
  export let value ="new counter";
  let clazz :any;
  export { clazz as class };
</script>

<button class={`button ${clazz || ''} ${$$props.class}`} on:click>{value}</button>

<style>
  .button{
    margin:0;
    color: #fff;
    border: none;
  }
  .red{
    background-color: #f56565;
    border: none;
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
    cursor: pointer;
  }
  .blue{
    background-color: #4299e1;
    border: none;
    border-radius: 0;
    cursor: pointer;
  }
  .yellow{
    background-color: #ecc94b;
    border: none;
    border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;
    cursor: pointer;
  }
  .cross{
    --bg-opacity: 1;
    background-color: rgba(247,250,252,var(--bg-opacity));
    color:#a0aec0;
    cursor: pointer;
  }
  .button-bar--green{
    max-width: 24rem;
    background-color: #68d391;
    border-radius: .25rem;
    cursor: pointer;
    width:100%;
    padding:2px;
  }
</style>
