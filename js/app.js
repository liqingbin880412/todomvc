;(function (window) {

	const  todos = [
	{
     id:1,
     title:'吃饭',
     done:true
	},
	{
     id:1,
     title:'吃饭2',
     done:true
	},
	{
     id:1,
     title:'吃饭2',
     done:false
	},
	{
     id:1,
     title:'吃饭'4,
     done:false
	}
	]
  new Vue ({
  	el:'#todoapp',
  	data:{
  		todos,
  		inputText:''
  	},
  	methods:{
  		addTodo (e) {
  		//单独拿到文本框任务列表数据
  		const {inputText, todos} = this
       if(this.inputText.trim().length ===0){
       	return
       }
     const id =  todos[todos.length-1].id+1

       this.todos.push({
       	id,
       	title:inputText,
       	done:false
       })
       //清空文本框
       this.inputText = ''
  		}
  	}
  })


})(window);
