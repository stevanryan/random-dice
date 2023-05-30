import './App.css'
import DiceContext from './Components/DiceContext'
import Navigation from './Components/Navigation'
import Home from './Components/Home';
import Result from './Components/Result';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
          <Router>
              <Navigation />
              <Routes>
                <Route path={'/'} element={<Home />}/>
                <Route path={'/result'} element={<Result />}></Route>
                <Route path={'*'} element={<h1 style={{paddingTop: '100px', textAlign: 'center'}}>404! NOT FOUND!</h1>}></Route>
              </Routes>
            </Router>
        </DiceContext>
      </QueryClientProvider>
    </div>
  );
}

export default App;
