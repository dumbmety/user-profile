import SimpleBar from 'simplebar-react';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
  return (
    <SimpleBar style={{ maxHeight: '100vh' }}>
      <ChakraProvider>
        <h1>App</h1>
      </ChakraProvider>
    </SimpleBar>
  );
};

export default App;
