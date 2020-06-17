<template>
  <div>
    <span>this is new page</span>
    <div @click="show">show</div>
  </div>
</template>

<script>
export default {
    methods:{
        show(){
            console.log(this)
        }
    }
}
</script>
