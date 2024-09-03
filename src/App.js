import './App.css';

import MinhaRotina from './components/MinhaRotina';
import Contato from './components/Contato';
import Encontreme from './components/Encontreme';
<p>
  I deployed my first app with Vercel!
</p>

function App() {
  return (
    <div className="App">
    <MinhaRotina/>
    <Contato/>
    <Encontreme/>
    </div>
  );
}

export default App;