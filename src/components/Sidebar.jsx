import { useEffect, useRef, useState } from 'react';
import { AiFillCamera, AiFillCopy } from 'react-icons/ai';
import {
  Avatar,
  AvatarBadge,
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useClipboard,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

const Sidebar = () => {
  const [userProfile, setUserProfile] = useState(null);

  const value = 'https://domain.com/user';
  const { hasCopied, onCopy } = useClipboard(value);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const profileUrl = useRef(null);
  const profileImage = useRef(null);

  useEffect(() => {
    if (hasCopied) {
      profileUrl.current.focus();
      profileUrl.current.select();
    }
  });

  const openChooseImage = () => {
    profileImage.current.click();
  };

  const changeProfileImage = event => {
    const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg'];
    const selected = event.target.files[0];

    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => setUserProfile(reader.result);
      return reader.readAsDataURL(selected);
    }

    onOpen();
  };

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
        <Avatar
          cursor="pointer"
          onClick={openChooseImage}
          size="2xl"
          name="Tim Cook"
          src={userProfile ? userProfile : '/img/tim-cook.jpg'}
        >
          <AvatarBadge bg="brand.blue" boxSize="1em">
            <AiFillCamera color="white" size="0.4em" />
          </AvatarBadge>
        </Avatar>
        <input
          type="file"
          hidden
          ref={profileImage}
          onChange={changeProfileImage}
        />
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Something went wrong</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>File not supported!</Text>
              <HStack mt="1">
                <Text color="brand.cadet" fontSize="sm">
                  Supported types:
                </Text>
                <Badge colorScheme="green">PNG</Badge>
                <Badge colorScheme="green">JPG</Badge>
                <Badge colorScheme="green">JPEG</Badge>
              </HStack>
            </ModalBody>

            <ModalFooter>
              <Button
                onClick={onClose}
                color="white"
                bg="brand.blue"
                _hover={{ bg: 'brand.blue' }}
                _active={{ bg: 'brand.blue' }}
                _focus={{ boxShadow: 'none' }}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
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
