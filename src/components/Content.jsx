import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
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
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
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
              <FormControl id="state">
                <FormLabel>State/Country</FormLabel>
                <Select
                  focusBorderColor="brand.blue"
                  placeholder="Select state/country"
                >
                  <option value="canada">Canada</option>
                  <option value="dc" selected>
                    DC
                  </option>
                  <option value="germany">Germany</option>
                </Select>
              </FormControl>
              <FormControl id="postcode">
                <FormLabel>Postcode</FormLabel>
                <NumberInput>
                  <NumberInputField placeholder="31005" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
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
