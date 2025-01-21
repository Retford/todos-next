// cookie: cart

import { getCookie, hasCookie, setCookie } from 'cookies-next';

// {
//   'uuid-123-1: 4',
//   'uuid-123-2: 2',
//   'uuid-123-3: 3',
// }

export const getCookieCart = (): { [id: string]: number } => {
  if (hasCookie('cart')) {
    const cookieCart = JSON.parse((getCookie('cart') as string) ?? '{}');
    return cookieCart;
  }

  return {};
};

export const addProductCart = (id: string) => {
  const cookieCart = getCookieCart();
  if (cookieCart[id]) {
    cookieCart[id] = cookieCart[id] + 1;
  } else {
    cookieCart[id] = 1;
  }
  setCookie('cart', JSON.stringify(cookieCart));
};

export const subtractProductCart = (id: string) => {
  const cookieCart = getCookieCart();

  if (cookieCart[id] && cookieCart[id] > 1) {
    cookieCart[id] = cookieCart[id] - 1;
  } else {
    delete cookieCart[id];
  }
  setCookie('cart', JSON.stringify(cookieCart));
};

export const removeProductFromCart = (id: string) => {
  const cookieCart = getCookieCart();

  delete cookieCart[id];
  setCookie('cart', JSON.stringify(cookieCart));
};
