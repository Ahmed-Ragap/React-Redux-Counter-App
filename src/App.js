import { Component } from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from './commnAction';
import './App.css';

class App extends Component {

render(){ 
  return (
    <div className="App">
   <h1>React redux Counter example</h1>
 <div className='preview'>{this.props.count}</div>
  <button onClick={this.props.increase}>counter +</button>
  <button onClick={this.props.decrease}>counter -</button>
  <br/>
  <br />
  <br />
<div className='info'>
  <h3>tools i used</h3>
   <span>createStore // dispatch // action creator // connect function // reducer // state // props</span>
</div>

    </div>
  );
}
}
//state
function mapState(state){
  return{
    count:state.count,
    name:state.name,
    add:state.add
  }
}

//action 
function mapDispatch(dispatch) {
  return{
    increase:() => dispatch(increase),
    decrease:() => dispatch(decrease)
  }
}
export default connect(mapState, mapDispatch) (App)
