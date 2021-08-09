import './assets/css/App.css';

import Sidebar from "./components/Sidebar/Sidebar"
import Main from './components/Main/Main';
import Widget from './components/Widgets/Widget';
import Example from "./components/Examples"

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Main/>
      <Widget/>
    </div>
  );
}

export default App;
