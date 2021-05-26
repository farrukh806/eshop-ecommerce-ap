import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
	switch (action.type) {
		case CART_ADD_ITEM:
			const item = action.paload;
			const exist = state.cartItems.find((x) => x.product === item.product);
			if (exist) {
				return {
					...state,
					cartItems: state.cartItems.map((x) =>
						x.product === exist.product ? item : x
					),
				};
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, item],
				};
			}
		default:
			return state;
	}
};
