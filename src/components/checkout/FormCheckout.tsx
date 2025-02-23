import { useForm } from 'react-hook-form';
import { InputAddress } from './InputAddress';
import {
	AddressFormValues,
	addressSchema,
} from '../../lib/validators';
import { zodResolver } from '@hookform/resolvers/zod';
import { ItemsCheckout } from './ItemsCheckout';
import { useCreateOrder } from '../../hooks';
import { useCartStore } from '../../store/cart.store';
import { ImSpinner2 } from 'react-icons/im';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

export const FormCheckout = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<AddressFormValues>({
		resolver: zodResolver(addressSchema),
	});

	const stripe = useStripe();
	const elements = useElements();
	const { mutate: createOrder, isPending } = useCreateOrder();
	const cleanCart = useCartStore(state => state.cleanCart);
	const cartItems = useCartStore(state => state.items);
	const totalAmount = useCartStore(state => state.totalAmount);

	const onSubmit = handleSubmit(async data => {
		if (!stripe || !elements) return;

		const response = await fetch("/api/create-payment-intent", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ amount: totalAmount * 100, currency: "usd" }) // Ajusta el monto según el total
		});

		const paymentIntent = await response.json();
		const cardElement = elements.getElement(CardElement);
		if (!cardElement) return;

		const { paymentMethod, error } = await stripe.createPaymentMethod({
			type: 'card',
			card: cardElement,
		});

		if (error) {
			console.error(error);
			return;
		}

		const orderInput = {
			address: data,
			cartItems: cartItems.map(item => ({
				variantId: item.variantId,
				quantity: item.quantity,
				price: item.price,
			})),
			totalAmount,
			paymentMethodId: paymentMethod.id,
			paymentIntentId: paymentIntent.id,
		};

		createOrder(orderInput, {
			onSuccess: () => {
				cleanCart();
			},
		});
	});

	if (isPending) {
		return (
			<div className='flex flex-col gap-3 h-screen items-center justify-center'>
				<ImSpinner2 className='animate-spin h-10 w-10' />
				<p className='text-sm font-medium'>Estamos procesando tu pedido</p>
			</div>
		);
	}

	return (
		<div>
			<form className='flex flex-col gap-6' onSubmit={onSubmit}>
				<div className='flex flex-col gap-3'>
					<h3 className='text-lg font-semibold tracking-normal'>Entrega</h3>

					<InputAddress register={register} errors={errors} name='addressLine1' placeholder='Dirección principal' />
					<InputAddress register={register} errors={errors} name='addressLine2' placeholder='Dirección adicional (Opcional)' />
					<InputAddress register={register} errors={errors} name='state' placeholder='Estado / Provincia' />
					<InputAddress register={register} errors={errors} name='city' placeholder='Ciudad' />
					<InputAddress register={register} errors={errors} name='postalCode' placeholder='Código Postal (Opcional)' />

					<select className='border border-slate-200 rounded-md p-3' {...register('country')}>
						<option value='Cajamarca'>Cajamarca</option>
					</select>
				</div>

				<div className='flex flex-col gap-3'>
					<p className='text-sm font-medium'>Método de pago</p>
					<div className='border border-slate-600 bg-stone-100 p-4 rounded-md'>
						<CardElement className='p-3 border border-gray-300 rounded-md' />
					</div>
				</div>

				<div className='flex flex-col gap-6'>
					<h3 className='font-semibold text-3xl'>Resumen del pedido</h3>
					<ItemsCheckout />
				</div>

				<button type='submit' className='bg-black text-white py-3.5 font-bold tracking-wide rounded-md mt-2'>
					Finalizar Pedido
				</button>
			</form>
		</div>
	);
};