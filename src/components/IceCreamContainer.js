import React from 'react';
import { connect } from 'react-redux';//connect is high order component of react redux,connect react component to redux store
import { buyIceCream } from '../redux';//importing from index file of redux folder

function IceCreamContainer(props) {
  return (
    <div className="App">
        <h2>Number of iceCream - {props.numberOfIceCream}</h2> 
        <button onClick={props.buyIceCream}>Buy Icecream</button>
    </div>
  );
}
const mapStateToProps = state => {
  return{
    numberOfIceCream : state.iceCream.numOfIceCreams
  }
}
const mapDispatchToProps = dispatch => {
  return{
    buyIceCream: () =>dispatch(buyIceCream())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer); 
