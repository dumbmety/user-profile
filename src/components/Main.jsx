import { Container } from '@chakra-ui/layout';

import Content from './Content';
import Sidebar from './Sidebar';

const Main = () => {
  return (
    <Container d="flex" maxW="container.lg">
      <Sidebar />
      <Content />
    </Container>
  );
};

export default Main;
