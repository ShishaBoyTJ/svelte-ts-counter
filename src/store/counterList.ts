import { writable, derived } from "svelte/store";
interface defaultCounterList {
  title:string,
  count:number
}
const defaultCounterList = [
  {
    title: "new",
    count: 0,
  },
];

const defaultCounterProp ={
  title: "new",
  count: 0,
}
export const counterList = writable<defaultCounterList[]>(defaultCounterList);
// export const reactiveCounterProp = derived(
//   counterList,
//   $counterList => $counterList.push(defaultCounterProp));
