import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  InputGroup,
  InputLeftAddon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Switch,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';

const Content = () => {
  return (
    <Box
      as="main"
      flex="3"
      d="flex"
      flexDir="column"
      justifyContent="space-between"
      pt="5"
      bg="white"
      rounded="md"
      borderWidth="1px"
      borderColor="gray.200"
      style={{ transform: 'translateY(-100px)' }}
    >
      <Tabs>
        <TabList px="5">
          <Tab
            mx="3"
            px="0"
            py="3"
            fontWeight="semibold"
            color="brand.cadet"
            borderBottomWidth="1px"
            _active={{ bg: 'transparent' }}
            _focus={{ boxShadow: 'none' }}
            _selected={{ color: 'brand.dark', borderColor: 'brand.blue' }}
          >
            Account Settings
          </Tab>
          <Tab
            mx="3"
            px="0"
            py="3"
            fontWeight="semibold"
            color="brand.cadet"
            borderBottomWidth="1px"
            _active={{ bg: 'transparent' }}
            _focus={{ boxShadow: 'none' }}
            _selected={{ color: 'brand.dark', borderColor: 'brand.blue' }}
          >
            Company Settings
          </Tab>
          <Tab
            mx="3"
            px="0"
            py="3"
            fontWeight="semibold"
            color="brand.cadet"
            borderBottomWidth="1px"
            _active={{ bg: 'transparent' }}
            _focus={{ boxShadow: 'none' }}
            _selected={{ color: 'brand.dark', borderColor: 'brand.blue' }}
          >
            Notifications
          </Tab>
        </TabList>

        <TabPanels px="3" mt="5">
          <TabPanel>
            <Grid
              templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
              gap={6}
            >
              <FormControl id="firstName">
                <FormLabel>First Name</FormLabel>
                <Input
                  focusBorderColor="brand.blue"
                  type="text"
                  placeholder="Tim"
                />
              </FormControl>
              <FormControl id="lastName">
                <FormLabel>Last Name</FormLabel>
                <Input
                  focusBorderColor="brand.blue"
                  type="text"
                  placeholder="Cook"
                />
              </FormControl>
              <FormControl id="phoneNumber">
                <FormLabel>Phone Number</FormLabel>
                <Input
                  focusBorderColor="brand.blue"
                  type="tel"
                  placeholder="(408) 996–1010"
                />
              </FormControl>
              <FormControl id="emailAddress">
                <FormLabel>Email Address</FormLabel>
                <Input
                  focusBorderColor="brand.blue"
                  type="email"
                  placeholder="tcook@apple.com"
                />
              </FormControl>
              <FormControl id="city">
                <FormLabel>City</FormLabel>
                <Select focusBorderColor="brand.blue" placeholder="Select city">
                  <option value="california">California</option>
                  <option value="washington">Washington</option>
                  <option value="toronto">Toronto</option>
                  <option value="newyork" selected>
                    New York
                  </option>
                  <option value="london">London</option>
                  <option value="netherland">Netherland</option>
                  <option value="poland">Poland</option>
                </Select>
              </FormControl>
              <FormControl id="country">
                <FormLabel>Country</FormLabel>
                <Select
                  focusBorderColor="brand.blue"
                  placeholder="Select country"
                >
                  <option value="america" selected>
                    America
                  </option>
                  <option value="england">England</option>
                  <option value="poland">Poland</option>
                </Select>
              </FormControl>
            </Grid>
          </TabPanel>
          <TabPanel>
            <Grid
              templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
              gap={6}
            >
              <FormControl id="companyId">
                <FormLabel>Company ID</FormLabel>
                <InputGroup>
                  <InputLeftAddon>@</InputLeftAddon>
                  <Input
                    focusBorderColor="brand.blue"
                    type="text"
                    placeholder="apple"
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="companyName">
                <FormLabel>Name</FormLabel>
                <Input
                  focusBorderColor="brand.blue"
                  type="text"
                  placeholder="Apple"
                />
              </FormControl>
              <FormControl id="emailCompany">
                <FormLabel>Email Address</FormLabel>
                <Input
                  focusBorderColor="brand.blue"
                  type="email"
                  placeholder="info@apple.com"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Size</FormLabel>
                <NumberInput>
                  <NumberInputField placeholder="6000" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </Grid>
          </TabPanel>
          <TabPanel>
            <FormControl
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <FormLabel
                htmlFor="notificationEmails"
                mb="0"
                cursor="pointer"
                userSelect="none"
              >
                Receive notification emails
              </FormLabel>
              <Switch id="notificationEmails" />
            </FormControl>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Box mt="5" py="5" px="8" borderTopWidth="1px" borderColor="brand.light">
        <Button
          p="6"
          color="white"
          bg="brand.blue"
          _hover={{ bg: 'brand.blue' }}
          _active={{ bg: 'brand.blue' }}
          _focus={{ boxShadow: 'none' }}
        >
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default Content;
