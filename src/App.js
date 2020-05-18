/*to provide redux-store to react-app, the react-redux library has component called provider*/
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import CakeContainer from './components/CakeContainer'; 
import IceCreamContainer from './components/IceCreamContainer'; 

 
function App() {
  return (
  	<Provider store={store}>
    <div className="App">
      <CakeContainer />
      <IceCreamContainer />
    </div>
    </Provider>
  );
}

export default App;
