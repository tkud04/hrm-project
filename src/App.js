import './App.css'
import { LoginProvider } from "./contexts/loginStore"
import RootNavigation from './navigation/RootNavigation';

function App() {

return (
  <LoginProvider>
    <RootNavigation/>
  </LoginProvider>
)
}


export default App;
