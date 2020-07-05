import React from 'react';
import {render} from '@testing-library/react';
import Enzyme, {shallow, mount} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

// import App from '../App';
import ToDo from './todo'
import TodoList from './todoList';


const setup = (props={}, state=null)=>{
    return shallow(<ToDo {...props}/>);
}

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('To-Do Input', ()=>{
    test('Has todo input field',()=>{
        const todo =  setup();
        const input =  todo.find('input');
        expect(input.length).toBe(1);
    });

    test('Has submit button', ()=>{
        const todo = setup();
        const button = todo.find('.submit');
        expect(button.length).toBe(1);
    });


    test('show error if todo input is empty', ()=>{
        const todo =  setup();
        const showError = false;
        const wrapper = shallow(<ToDo/>);
        wrapper.setState({showError});

        //find button and click
        const button = todo.find('.submit');
        button.simulate('click');
        
        const errorMessage = todo.find('.required-error');
        expect(errorMessage.length).toBe(1);
    });
});




describe('To-Do List',()=>{

    test('When click on submit button, if input field is empty default to-do item will show', ()=>{
        const todo =  mount(<ToDo />);

        //find button and click
        const button = todo.find('.submit');
        button.simulate('click');
        
        const todoItem = todo.find('ul li');
        expect(todoItem.length).toBe(1);
    });

    test('Clicking on button if value exist add new to-do',()=>{
        const todo =  mount(<ToDo />);
        const event =  {target:{value: "Create more tests"}};

        //input on changes
        const input = todo.find('input');
        input.simulate('change', event);

        //Find submit button and click
        const button = todo.find('.submit');
        button.simulate('click');

        //Find the todo text
        const myTodo = todo.find('.todo-text');
        expect(myTodo.at(1).text()).toEqual("Create more tests")
    });
});
