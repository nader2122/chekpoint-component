
import './App.css';
import Address from './Profile/Address';
import FullName from './Profile/FullName';
import Photos from './Profile/Photos';

function App() {
  return (
    <div className="App">
      <Photos/>
      <FullName/>
      <Address/>
    </div>
  );
}

export default App;
