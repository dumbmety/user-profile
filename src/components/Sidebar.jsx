import { useEffect, useRef } from 'react';
import { AiFillCamera, AiFillCopy } from 'react-icons/ai';
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  useClipboard,
  VStack,
} from '@chakra-ui/react';

const Sidebar = () => {
  const value = 'https://domain.com/user';
  const { hasCopied, onCopy } = useClipboard(value);

  const profileUrl = useRef(null);

  useEffect(() => {
    if (hasCopied) {
      profileUrl.current.focus();
      profileUrl.current.select();
    }
  });

  return (
    <Box
      as="aside"
      flex="1"
      mr="5"
      mb={{ base: '5', md: '0' }}
      bg="white"
      rounded="md"
      borderWidth="1px"
      borderColor="brand.light"
      style={{ transform: 'translateY(-100px)' }}
    >
      <VStack
        spacing="3"
        py="5"
        borderBottomWidth="1px"
        borderColor="brand.light"
      >
        <Avatar size="2xl" name="Tim Cook" src="/img/tim-cook.jpg">
          <AvatarBadge bg="brand.blue" boxSize="1em">
            <AiFillCamera size="0.4em" />
          </AvatarBadge>
        </Avatar>
        <VStack spacing="1">
          <Heading as="h3" fontSize="xl" color="brand.dark">
            Tim Cook
          </Heading>
          <Text color="brand.gray" fontSize="sm">
            CEO of Apple
          </Text>
        </VStack>
      </VStack>
      <VStack as="ul" spacing="0" listStyleType="none">
        <Box
          as="li"
          w="full"
          py="3"
          px="5"
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          borderBottomWidth="1px"
          borderColor="brand.light"
        >
          <Text color="brand.dark">Opportunities applied</Text>
          <Text color="brand.yellow" fontWeight="bold">
            32
          </Text>
        </Box>
        <Box
          as="li"
          w="full"
          py="3"
          px="5"
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          borderBottomWidth="1px"
          borderColor="brand.light"
        >
          <Text color="brand.dark">Opportunities won</Text>
          <Text color="brand.green" fontWeight="bold">
            26
          </Text>
        </Box>
        <Box
          as="li"
          w="full"
          py="3"
          px="5"
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          borderBottomWidth="1px"
          borderColor="brand.light"
        >
          <Text color="brand.dark">Current opportunities</Text>
          <Text color="brand.cadet" fontWeight="bold">
            6
          </Text>
        </Box>
      </VStack>
      <VStack py="8" px="5" spacing="3">
        <Button
          w="full"
          color="brand.cadet"
          bg="transparent"
          borderWidth="1px"
          borderColor="brand.light"
          _hover={{ bg: 'brand.white' }}
          _active={{ bg: 'brand.light' }}
          _focus={{ boxShadow: 'none' }}
        >
          View Public Profile
        </Button>
        <InputGroup>
          <Input
            ref={profileUrl}
            type="url"
            color="brand.blue"
            value={value}
            userSelect="all"
            isReadOnly
            _focus={{ borderColor: 'brand.blue' }}
          />
          <InputRightAddon bg="transparent" px="0" overflow="hidden">
            <Button
              onClick={onCopy}
              p="0"
              bg="transparent"
              rounded="none"
              _active={{ bg: 'brand.light' }}
              _focus={{ boxShadow: 'none' }}
            >
              <AiFillCopy color="#77889a" />
            </Button>
          </InputRightAddon>
        </InputGroup>
      </VStack>
    </Box>
  );
};

export default Sidebar;
