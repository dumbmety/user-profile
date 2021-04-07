import { Box } from '@chakra-ui/layout';

const Content = () => {
  return (
    <Box
      as="main"
      flex="2"
      py="5"
      bg="white"
      rounded="md"
      borderWidth="1px"
      borderColor="gray.200"
      style={{ transform: 'translateY(-100px)' }}
    >
      Content
    </Box>
  );
};

export default Content;
