// define action creator, which is just a function, to define action
//action is object with type property
import { BUY_CAKE } from './cakeTypes';
export const buyCake = () => {
	return{
		type: BUY_CAKE 
	}
}

 