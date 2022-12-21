import './App.css';
import Landing from "./Landing";
import { QueryClient, QueryClientProvider } from 'react-query';
import NavMenu from "./NavMenu"


const Queryclient = new QueryClient();

function App() {
  return (
    <div className='App'>
      <QueryClientProvider client={Queryclient}>
      <NavMenu/>
      <Landing></Landing>
      
      </QueryClientProvider>

    </div>
    );
   
   
}

export default App;
