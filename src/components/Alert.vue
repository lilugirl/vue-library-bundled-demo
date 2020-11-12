<template>

 <div class="alert">
   <div class="mask">
   </div>

   <div class="box">
   
     <div class="title">
       <slot name="header"></slot>
     </div>
     <div class="content">
        <slot></slot>
     </div>

     <slot name="footer"></slot>

   <button @click="close">关闭</button>
   </div>
 

  
 </div>
</template>
<style >
.alert{
  position: relative;
}
.alert .mask{
  width:100%;
  height:100vh;
  background:rgba(0,0,0,0.5);
  
}
.alert .box{
  position:absolute;
  top:calc((100vh - 300px)/2);
  left:calc((100vw - 400px)/2);
  background:white;
  border:1px solid gray;
  width:400px;
  height:300px;
  text-align: center;
  
}
.alert .box .title{
  background: black;
  color:white;
  padding:6px;

}
.alert .box .content{
  height:220px;
  padding:6px;
}
</style>
<script>
export default{
  name:"Alert",
  props:{
    hide:Boolean,
    title:String,
   
  },
  methods:{
   close(){
     this.$emit('close',this.hide)
   }
  }
}
</script>