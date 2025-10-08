import React from "react";
import TodoApp from "./components/TodoApp";
import { store } from "./store/store";
import {Provider} from 'react-redux'
const App = () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};

export default App;
