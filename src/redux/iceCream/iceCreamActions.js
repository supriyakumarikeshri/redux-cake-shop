// define action creator, which is just a function, to define action
//action is object with type property
import { BUY_ICECREAM } from './iceCreamType';
export const buyIceCream = () => {
	return{
		type: BUY_ICECREAM 
	}
}

 