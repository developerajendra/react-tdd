import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

// import App from '../App';
import TodoList from './todoList';


const setup = (props={}, state=null)=>{
    let todoList =  [
        'My default todo...'
    ];
    return shallow(<TodoList updateTodo={()=>null} todoList={todoList} {...props}/>);
}

Enzyme.configure({
    adapter: new EnzymeAdapter()
});




describe('To-do Item', ()=>{
    describe('edit todo',()=>{
        test('render edit todo button', ()=>{
            const todoItem = setup();
            const edit = todoItem.find('.edit');
            expect(edit.length).toBe(1);
        });

        test('show inline editing of the to-do', ()=>{

        });

        test('hide edit button once todo is editable',()=>{

        });
    });

    describe('save edited todo',()=>{
        test('show save button if todo item is in edit mode',()=>{

        });

        test('hide save button if todo item is not in edit mode',()=>{

        });
    });

    describe('delete todo', ()=>{
        test('show delete button', ()=>{
            const todoIntem = setup();
            const _delete = todoIntem.find('.delete');
            expect(_delete.length).toBe(1);
        });

        test('delete to-do item', ()=>{
            const todoIntem = setup();
          
            const _delete = todoIntem.find('.delete');
            _delete.simulate('click');

            let todoList =  [];
             shallow(<TodoList updateTodo={()=>null} todoList={todoList} />);
            
             const list = todoIntem.find('li');


            console.log("llll",list.first());
            
            expect(list.length).toBe(0);

        });
    });
    
});