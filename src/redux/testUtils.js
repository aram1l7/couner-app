import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store';

const AllTheProviders = ({ children }) => {
	return (
    <Provider store={store}>
      {children}
    </Provider>
	);
};

const customRender = (ui, options) => {
	return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from '@testing-library/react';
export { customRender as render };