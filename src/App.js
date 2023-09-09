import { Box, Container, Text } from '@chakra-ui/react';
import "./App.css"
//COMPONENTS
import Header from './components/Header';
import Money from './components/Money';
import ProductsList from './components/ProductsList';
import Receipt from './components/Receipt';
function App() {
  return (
    <div className='app'>
      <Money />
      <Header />
      <ProductsList />
      <Receipt />
    </div>
  );
}

export default App;
