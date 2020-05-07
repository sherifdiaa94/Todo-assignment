import React,{Component} from 'react';
import './App.scss';
import { Button,ListItem,OrderedList,Tile,Form, FormGroup,TextInput } from "carbon-components-react";


class App extends Component{
  constructor(){
      super()
  }
  render(){
    return (
      <div className="App">
        <Tile className="Title-header">
          Todo List
        </Tile>
        <Form>
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
              <ListItem>First todo</ListItem>
              <ListItem>Ordered List level 1</ListItem>
              <ListItem>Ordered List level 1</ListItem>
        </OrderedList>
        </Form>
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

export default App;
