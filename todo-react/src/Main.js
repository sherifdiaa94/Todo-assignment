import React,{Component} from 'react';
import './Main.scss';
import { Button,ListItem,OrderedList,Tile,Form, FormGroup,TextInput } from "carbon-components-react";
import store from './index'
import TodoList from './todolist.js'

class Main extends Component{
  constructor(){
      super()
  }
  render(){
    //console.log(this.props);
    return (
      
      <div className="App">
        <Tile className="Title-header">
          Todo List
        </Tile>
        <TodoList {...this.props}/>
        {/* <Form>
        <FormGroup>
          <TextInput
            //helperText="Enter below "
            id="test2"
            invalidText="Invalid error message."
            placeholder="Enter here"
          />
        </FormGroup>
        <Button>
          Submit
        </Button>
        <OrderedList className="List">
              <ListItem>{this.props.list[0].item}</ListItem>
              <ListItem>{this.props.list[1].item}</ListItem>
              <ListItem>{this.props.list[2].item}</ListItem>
        </OrderedList>
        </Form> */}
      </div>

    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Button>Button</Button>
//     </div>
//   );
// }

export default Main;
