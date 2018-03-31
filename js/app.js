;(function () {

	const  todos = [
	{
     id:1,
     title:'吃饭',
     done:true
	},
	{
     id:2,
     title:'吃饭2',
     done:false
	},
	{
     id:3,
     title:'吃饭3',
     done:true
	},
	{
     id:4,
     title:'吃饭',
     done:false
	}
  ]
  new Vue ({
  	el:'#todoapp',
  	data:{
  		todos, //任务列表数据源
  		inputText:'',//用来绑定获取添加任务文本框的数据
  		currentEdit:null,//用来判定任务项是否获得editing样式的一个标记变量
  		backTitle:''//
  	},
  	methods:{
  		addTodo (e) {
  		//单独拿到文本框任务列表数据
  		const {inputText, todos} = this
        //非空校验
       if(inputText.trim().length ===0){
       	return
       }
       //获取唯一的id
     const lastItem =  todos[todos.length - 1]
     const id = lastItem ? lastItem.id +1 :1

       //添加到数组中

      todos.push({
       	id,
       	title:inputText,
       	done:false
       })
       //清空文本框
       this.inputText = ''
  		
  	},
    // 删除单个样式
  	removeTodo (index) {
  		this.todos.splice(index,1)
  	},

  	 //获得编辑样式
  	getEditing (item) {

  		this.currentEdit = item
  		this.backTitle = item.titile

  	},
  	saveEdit (item, index) {
  		if(item.title.trim().length ===0) {



  		//执行删除操作

  		 this.todos.splice(index,1)
  	}else {
  		this.currentEdit = null
  	}

   },

   //esc取消编辑
   //取消的时候同时触发了失去焦点的事件了
   cancelEdit () {
   	//让任务项的title取出样式
   	//去除编辑样式
   	this.currentEdit.title = this.backTitle
   	//取消编辑， 去除编辑样式
   	this.currentEdit = null
     
     }
   

   }


  })


})();
