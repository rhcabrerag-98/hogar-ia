import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { ICartItem } from '../components/shared/CartItem';

export interface CartState {
	items: ICartItem[];
	totalItemsInCart: number;
	totalAmount: number;

	addItem: (item: ICartItem) => void;
	removeItem: (variantId: string) => void;
	updateQuantity: (variantId: string, quantity: number) => void;
	cleanCart: () => void;
}

// Función para recalcular los totales
const calculateTotals = (items: ICartItem[]) => ({
	totalItemsInCart: items.reduce((acc, i) => acc + i.quantity, 0),
	totalAmount: items.reduce((acc, i) => acc + i.price * i.quantity, 0),
});

const storeApi: StateCreator<CartState> = set => ({
	items: [],
	totalItemsInCart: 0,
	totalAmount: 0,

	addItem: item => {
		set(state => {
			const existingItem = state.items.find(i => i.variantId === item.variantId);

			const updatedItems = existingItem
				? state.items.map(i =>
						i.variantId === item.variantId
							? { ...i, quantity: i.quantity + item.quantity }
							: i
				  )
				: [...state.items, item];

			return { items: updatedItems, ...calculateTotals(updatedItems) };
		});
	},

	removeItem: variantId => {
		set(state => {
			const updatedItems = state.items.filter(i => i.variantId !== variantId);
			return { items: updatedItems, ...calculateTotals(updatedItems) };
		});
	},

	updateQuantity: (variantId, quantity) => {
		set(state => {
			if (quantity <= 0) {
				// Si la cantidad es 0 o menos, eliminamos el item
				const updatedItems = state.items.filter(i => i.variantId !== variantId);
				return { items: updatedItems, ...calculateTotals(updatedItems) };
			}

			const updatedItems = state.items.map(i =>
				i.variantId === variantId ? { ...i, quantity } : i
			);

			return { items: updatedItems, ...calculateTotals(updatedItems) };
		});
	},

	cleanCart: () => set({ items: [], totalItemsInCart: 0, totalAmount: 0 }),
});

export const useCartStore = create<CartState>()(
	devtools(
		persist(storeApi, {
			name: 'cart-store',
		})
	)
);
