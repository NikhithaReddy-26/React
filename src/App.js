import React from 'react';

//import test from './test';
import Apple from './Apple';
class App extends React.Component{
  state = {
   name: "nikhitha",
   age: 20, 
   from: "mbnr"
  }
  render()
  {
    return(
      <div>
        <center>
            <Apple name={this.state.name} age= {this.state.age} from={this.state.from}/>
       </center>
      </div>
    
    )}
}
export default App;