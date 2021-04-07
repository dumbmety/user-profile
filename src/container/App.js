import SimpleBar from 'simplebar-react';
import { ChakraProvider } from '@chakra-ui/react';

import Cover from '../components/Cover';
import Main from '../components/Main';

const App = () => {
  return (
    <SimpleBar style={{ maxHeight: '100vh' }}>
      <ChakraProvider>
        <Cover />
        <Main />
      </ChakraProvider>
    </SimpleBar>
  );
};

export default App;
