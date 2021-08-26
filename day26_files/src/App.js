
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store';
import Form from './components/form';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>REDUX FORM</h1>
        <Form />
    </div>
    </Provider>
  );
}

export default App;
