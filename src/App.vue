<template>
  <div id="app">
   <button @click="showAlert" v-show="!ifShow">显示弹筐</button>
   <Alert v-show="ifShow" :hide="!ifshow" @close="onClose" >
     <template slot="header">
 头部
     </template>
     协议内容
     </Alert>

        <Button>sss按钮</Button> <Label>文字是啥</Label>
  </div>
</template>

<script>
import Alert from './components/Alert';

export default {
  name: 'App',
  components:{
    Alert
  },
  data(){
    return {
      ifShow:false,
     
    }
  },

  methods:{
    showAlert(){
      this.ifShow=true;
    },
    onClose(hide){
       this.ifShow=!hide;
    }
  }
  
}
</script>

<style>
body {
  margin:0;
  padding:0;
}
</style>
