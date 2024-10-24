// import { render, screen, fireEvent, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Counters from './Counters';
import { fetchInitialCounters } from '../../redux/counterSlice';
import { render, screen } from '../../redux/testUtils';

// jest.mock('../../redux/counterSlice'); // Mock the entire slice

// Mock the thunk
// jest.mock('../../redux/counterSlice', () => ({
//   ...jest.requireActual('../../redux/counterSlice'),
//   fetchInitialCounters: jest.fn(), // Mock the thunk
// }));

// jest.mock('../../redux/counterSlice', () => {
//   return {
//     increment: jest.fn(),
//     decrement: jest.fn(),
//     randomize: jest.fn(),
//     addCounter: jest.fn(),
//     default: (state = { counters: [] }, action) => state,  // This provides a valid reducer function
//   };
// });

// const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
//   preloadedState: {
//     counter: { counters: [/* mock initial counters */] }
//   },
// });

jest.mock('../../api', () => ({
  fetchInitialCounters: jest.fn(),
}));

describe('Stage D: Counter App with Redux', () => {
  beforeEach(() => {
    fetchInitialCounters.mockResolvedValue([{ id: 1, value: 42 }]);
  });


  test('renders initial counter', async () => {
    render(
      <Provider store={store}>
        <Counters />
      </Provider>
    );
    const counter = await screen.findByText('Count: 42');
    expect(counter).toBeInTheDocument();
  });

  // test('increments the counter', async () => {
  //   render(
  //     <Provider store={store}>
  //       <Counters />
  //     </Provider>
  //   );

  //   const incrementButton = await screen.findByText('Increment');
  //   const counter = await screen.findByText(/Count: \d+/);
  //   const initialCount = parseInt(counter.textContent.split(': ')[1]);
  //   await act(async () => {
  //     fireEvent.click(incrementButton);
  //   });
  //   expect(counter).toHaveTextContent(`Count: ${initialCount + 1}`);
  // });

  // test('decrements the counter', async () => {
  //   render(
  //     <Provider store={store}>
  //       <Counters />
  //     </Provider>
  //   );

  //   const decrementButton = await screen.findByText('Decrement');
  //   const counter = await screen.findByText(/Count: \d+/);
  //   const initialCount = parseInt(counter.textContent.split(': ')[1]);
  //   await act(async () => {
  //     fireEvent.click(decrementButton);
  //   });
  //   expect(counter).toHaveTextContent(`Count: ${initialCount - 1}`);
  // });

  // test('randomizes the counter', async () => {
  //   render(
  //     <Provider store={store}>
  //       <Counters />
  //     </Provider>
  //   );
  //   const randomizeButton = await screen.findByText('Randomize');
  //   const counter = await screen.findByText(/Count: \d+/);
  //   const initialCount = counter.textContent.split(': ')[1];
  //   await act(async () => {
  //     fireEvent.click(randomizeButton);
  //   });
  //   expect(counter).not.toHaveTextContent(initialCount);
  // });

  // test('adds a new counter', async () => {
  //   render(
  //     <Provider store={store}>
  //       <Counters />
  //     </Provider>
  //   );

  //   const addCounterButton = screen.getByText('Add Counter');
  //   await act(async () => {
  //     fireEvent.click(addCounterButton);
  //   });
  //   const counters = await screen.findAllByText(/Count: \d+/);
  //   const newCounter = counters[counters.length - 1];
  //   expect(newCounter).toBeInTheDocument();
  //   expect(newCounter).toHaveTextContent(/Count: \d+/);
  // });
});
