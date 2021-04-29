import { useEffect, useRef, useState } from 'react';
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  useClipboard,
  VStack,
} from '@chakra-ui/react';

import Profile from './Profile';

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
      mr={{ base: '0', md: '5' }}
      mb={{ base: '5', md: '0' }}
      bg="white"
      rounded="md"
      borderWidth="1px"
      borderColor="brand.light"
      style={{ transform: 'translateY(-100px)' }}
    >
      <Profile />

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
        <Button w="full" variant="outline">
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
            <Button onClick={onCopy} variant="link">
              <svg
                width="1.2em"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
              </svg>
            </Button>
          </InputRightAddon>
        </InputGroup>
      </VStack>
    </Box>
  );
};

export default Sidebar;
