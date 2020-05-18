import React from 'react';
import { connect } from 'react-redux';//connect is high order component of react redux,connect react component to redux store
import { buyCake } from '../redux';//importing from index file of redux folder//buyCake is action(funtion)

function CakeContainer(props) {
  return (
    <div className="App">
        <h2>Number of cakes - {props.numberOfCakes}</h2> 
        <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}
const mapStateToProps = state => {
  return{
    numberOfCakes : state.cake.numOfCakes
  }
}
const mapDispatchToProps = dispatch => {
  return{
    buyCake: () =>dispatch(buyCake())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer); 
