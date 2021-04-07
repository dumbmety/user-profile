import React from 'react';
import SimpleBar from 'simplebar-react';
import { ChakraProvider } from '@chakra-ui/react';

import 'simplebar/dist/simplebar.min.css';

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
