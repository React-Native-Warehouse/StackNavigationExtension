import {
	SOME_ACTION
} from './types';

import Colors from '../constants/Colors';


export const toggleProfileState = (activate) => {
	if (activate === true){
		return {
			type: SOME_ACTION,
			payload: false
		};
	}
	return {
		type: SOME_ACTION,
		payload: true
	};
}
