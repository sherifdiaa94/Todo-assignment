import React,{Component} from 'react';
import { Button,ListItem,OrderedList,Tile,Form, FormGroup,TextInput } from "carbon-components-react";

class AddTodo extends Component{
    constructor(){
        super()   
        this.handleSubmit=this.handleSubmit.bind(this);     
    }


    handleSubmit(event){
      event.preventDefault();  //To stop the reloading of the page when pressing submit

      const todoitem= event.target.elements.todo.value;
      console.log(todoitem);
      const newtodo={
          id: Number(new Date()),
          item:todoitem
      }
      if (todoitem){
          this.props.addtodo(newtodo)
          event.target.elements.todo.value=""
      }
  }
    render(){
        return (
            <div>
            <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <TextInput
                id="test2"
                invalidText="Invalid error message."
                placeholder="Enter here"
                name="todo"
              />
            </FormGroup>
            <Button onClick={this.handleSubmit}>
              Submit
            </Button>
            </Form>
            </div>
        )
    }
}


export default AddTodo