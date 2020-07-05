import React, {Component} from 'react';
import TodoList from "./todoList";


class ToDo extends Component{
    state = {
        input:'',
        todoList:[
            'My default todo...'
        ],
        showError: false
    }

    submitTodo = ()=>{
        let {input} = this.state;
        if(input){
            this.setState({
                todoList:[...this.state.todoList, input],
                input:'',
            });
        }else{
            this.setState({
                showError:  true
            });
        }
    }   

    updateTodo = (index)=>{
        let {todoList} = this.state;
        todoList.splice(index);
        
        this.setState({
            todoList:todoList
        });
    }
   

   render(){
    const {todoList} = this.state;
        return (<div>
            <input value={this.state.input} type="text" onChange={(e)=>{
                console.log('data', e.target.value);
                this.setState({
                    input: e.target.value,
                    showError: false
                });
            }}/>
            <button className="submit" onClick={()=>{this.submitTodo()}}>Submit</button>
            {this.state.showError ? <div className="required-error">Please include your todo</div> : null}
            <TodoList updateTodo={this.updateTodo} todoList={todoList} />
        </div>)
   }
};
export default ToDo;