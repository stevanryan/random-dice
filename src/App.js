import './App.css';
import DiceContext from './Components/DiceContext';
import Navigation from './Components/Navigation';
import Home from './Components/Home';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      }
    }
  });

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <DiceContext>
          <Navigation />
          <Home />
        </DiceContext>
      </QueryClientProvider>
    </div>
  );
}

export default App;
