import lime_circle from './images/lime_circle.svg';
import './App.css';

import Reader from './components/qrReader';
import Generator from './components/qrGenerator_v2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={lime_circle} className="App-logo" alt="logo" />
        <p>
           Handle <code>qr-code</code>
        </p>
        <section className="qrSection">
          <Generator/>
          <Reader/>
        </section>
      </header>
    </div>
  );
}

export default App;
