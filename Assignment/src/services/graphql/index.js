import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import { useSelector } from 'react-redux';
import {
	CUSTOMER_NOTIFICATION_LIST,
	CUSTOMER_LOGIN,
	CATEGORY_LIST,
	PRODUCT_LIST,
    CUSTOMER,
    READ_NOTIFICATION,
} from './schema';

const context = () => {
	const token = useSelector(state => state.token);

	return {
		headers: {
			authorization: `Bearer ${token}`,
		},
	};
};

export const customerNotificationList = options =>
	useQuery(CUSTOMER_NOTIFICATION_LIST, {
		context: context(),
		...options,
	});

export const customer = options =>
	useQuery(CUSTOMER, {
		context: context(),
		...options,
	});

export const readNotification = options =>
	useMutation(READ_NOTIFICATION, {
		context: context(),
		...options,
	});

export const customerLogin = options =>
	useMutation(CUSTOMER_LOGIN, {
		...options,
	});

export const categoryList = options =>
	useLazyQuery(CATEGORY_LIST, {
		...options,
	});

export const productList = options =>
	useLazyQuery(PRODUCT_LIST, {
		...options,
	});
