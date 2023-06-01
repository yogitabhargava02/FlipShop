import Header from './components/headers/Header';
import Home from './components/Home/Home';
import { Box } from '@mui/system';
import DataProvider from './context/DataProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './components/Home/detail/Details';
import Cart from './components/Home/detail/cart/Cart';
function App() {
  return (
    <DataProvider>
    <BrowserRouter>
    <Header />
    <Box style={{ marginTop: 95 }}>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/product/:id" element={<Details/>} />
       <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </Box>
    </BrowserRouter>
    
      
       
    </DataProvider>
  );
}

export default App;
