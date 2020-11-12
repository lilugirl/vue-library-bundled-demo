import Button from './components/Button';
import Label from './components/Label';

export default {
  install:function(Vue){
    Vue.component("Button",Button);
    Vue.component("Label",Label);
  }
}