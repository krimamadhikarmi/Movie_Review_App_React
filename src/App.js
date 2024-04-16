import './App.css';
import { GetApi } from './components/GetApi';
import { Tittle } from './components/Navbar';
import { ReviewForm } from './components/ReviewForm';

function App() {
  return (
    <div className="App bg-gray-600 min-h-screen">
      <Tittle/>
      <ReviewForm/>
      <GetApi />
    </div>
  );
}

export default App;
