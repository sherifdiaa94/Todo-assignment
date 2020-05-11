import React,{Component} from 'react';
import { Button,ListItem,OrderedList,Tile,Form, FormGroup,TextInput } from "carbon-components-react";

class AddTodo extends Component{
    constructor(){
        super()   
        this.handleSubmit=this.handleSubmit.bind(this);  
        this.handleChange=this.handleChange.bind(this);  
        this.handleClick=this.handleClick.bind(this);
    }
    getInitialState (){
      return { input: '' };
      //e.target.value=""
    }
    handleChange(e){
      this.setState({ input: e.target.value});
    }
    handleClick(e) {
      if(this.state){
      const todoitem= this.state.input;
      console.log(todoitem);
      const newtodo={
          id: Number(new Date()),
          item:todoitem,
          completed:"false"
      }
      if (todoitem){
          this.props.addtodo(newtodo)
          this.setState({ input: "" });
      }
    }
    }
    handleSubmit(event){
      event.preventDefault();  //To stop the reloading of the page when pressing submit
      console.log(event.target)
      const todoitem= event.target.elements.todo.value;
      console.log(todoitem);
      const newtodo={
          id: Number(new Date()),
          item:todoitem,
          completed:"false"
      }
      if (todoitem){
          this.props.addtodo(newtodo)
          event.target.elements.todo.value=""
      }
  }
    render(){
      //onSubmit={this.handleSubmit}
        return (
            <div>
            <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <TextInput onChange={this.handleChange}
                id="test2"
                invalidText="Invalid error message."
                placeholder="Enter here"
                name="todo"
              />
            </FormGroup>
            <Button onClick={this.handleClick}>
              Submit
            </Button>
            </Form>
            </div>
        )
    }
}


export default AddTodo