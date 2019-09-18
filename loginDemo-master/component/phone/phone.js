Component({

  behaviors: [],

//接收参数类型 相当于vue中的 props
  properties: {
    phone: {         // 属性名
      type: Number,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: ''     // 属性初始值（可选），如果未指定则会根据类型选择一个
    }
  },
  data: {
    code:''
  }, // 私有数据，可用于模版渲染

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () { },
  moved: function () { },
  detached: function () { },
  methods: {
    // 在对组件进行封装时 在当前页面想要获取组件中的某一状态，需要使用到this.triggerEvent(' ',{},{}),第一个参数是自定义事件名称，这个名称是在页面调用组件时bind的名称，第二个对象就可以将想要的属性拿到
    bindCode: function (e) {
      var that = this;
      var val = e.detail.value;
      // var val = e.detail.value == undefined ? that.data.code : e.detail.value; //通过这个传递数据
      var myEventDetail = {
        val: val
      } // detail对象，提供给事件监听函数
      this.triggerEvent('myeventPhone', myEventDetail) //myevent自定义名称事件，父组件中使用
    }
  }
})