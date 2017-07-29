function TodoService(){
	this.getTodos =  function(todo){
		var t = localStorage.getItem('todo');
		if(t){
			console.log('Todo Data:', JSON.parse(t))
			return JSON.parse(t)
		}
		console.log('Todo Data:', [])
		return [];
	}
	
	this.saveTodos =  function(todos){
		localStorage.setItem('todo', JSON.stringify(todos));
		console.log('Todo Data Saved:', todos);
	}
}