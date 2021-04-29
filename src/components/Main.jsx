import { Container } from '@chakra-ui/layout';

import Content from './Content/Content';
import Sidebar from './Sidebar/Sidebar';

function Main() {
  return (
    <Container display={{ base: 'block', md: 'flex' }} maxW="container.xl">
      <Sidebar />
      <Content />
    </Container>
  );
}

export default Main;
