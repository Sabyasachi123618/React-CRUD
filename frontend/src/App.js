import {BrowserRouter,Routes,Route} from 'react-router-dom';
import GetStudent from './GetStudent';
import AddStudent from './AddStudent';
import UpdateStudent from './UpdateStudent';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<GetStudent></GetStudent>}></Route>
      <Route path="/Add" element={<AddStudent></AddStudent>}></Route>
      <Route path="/Update/:id" element={<UpdateStudent></UpdateStudent>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
export default App;
