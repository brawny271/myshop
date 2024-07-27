import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

const App = () => {
  return (
    <Provider store={store}>
    <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} exact />
        </Routes>
    </Router>
    </Provider>
  );
};

export default App;