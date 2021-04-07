import { Box } from '@chakra-ui/layout';

const Sidebar = () => {
  return (
    <Box
      as="aside"
      flex="1"
      py="5"
      mr="5"
      bg="white"
      rounded="md"
      borderWidth="1px"
      borderColor="gray.200"
      style={{ transform: 'translateY(-100px)' }}
    >
      Sidebar
    </Box>
  );
};

export default Sidebar;
