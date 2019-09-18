Component({

  behaviors: [],

//接收参数类型 相当于vue中的 props
  properties: {
    paramAtoB: String

  },
  data: {

  }, // 私有数据，可用于模版渲染

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () { },
  moved: function () { },
  detached: function () { },

  methods: {
    // 在对组件进行封装时 在当前页面想要获取组件中的某一状态，需要使用到this.triggerEvent(' ',{},{}),第一个参数是自定义事件名称，这个名称是在页面调用组件时bind的名称，第二个对象就可以将想要的属性拿到
    change:function(){
      this.triggerEvent('myevent',{paramBtoA:'我是子组件传来的参数'});
    }
  }

})