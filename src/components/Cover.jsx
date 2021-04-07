import { Image } from '@chakra-ui/image';
import { Box } from '@chakra-ui/layout';

const Cover = () => {
  return (
    <Box h="60" overflow="hidden">
      <Image
        w="full"
        h="full"
        objectFit="cover"
        src="/img/cover.jpg"
        alt="Cover"
      />
    </Box>
  );
};

export default Cover;
