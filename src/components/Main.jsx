import { Container } from '@chakra-ui/layout';

import Content from './Content';
import Sidebar from './Sidebar';

const Main = () => {
  return (
    <Container display={{ base: 'block', md: 'flex' }} maxW="container.xl">
      <Sidebar />
      <Content />
    </Container>
  );
};

export default Main;
