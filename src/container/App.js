import SimpleBar from 'simplebar-react';
import { ChakraProvider } from '@chakra-ui/react';

import Cover from '../components/Cover';

const App = () => {
  return (
    <SimpleBar style={{ maxHeight: '100vh' }}>
      <ChakraProvider>
        <Cover />
      </ChakraProvider>
    </SimpleBar>
  );
};

export default App;
