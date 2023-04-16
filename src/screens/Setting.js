import React, {useState} from 'react';
import {Text, Box, HStack, VStack, Pressable, Divider} from 'native-base';
import Header from '../components/Header';
import Entypo from 'react-native-vector-icons/Entypo';

const Setting = ({navigation}) => {
  const [clicker, setClicker] = useState(false);

  return (
    <Box m="5">
      <Pressable onPress={() => navigation.goBack()}>
        <Header fromSettingscreen={true} />
      </Pressable>

      <VStack my="5">
        <HStack justifyContent={'space-between'}>
          <Text bold fontSize={'lg'}>
            RISHAV
          </Text>
          <Text color={'warning.400'} bold>
            EDIT
          </Text>
        </HStack>
        <Text>+91 - 9110969789 . singhrishav41040@gmail.com</Text>
        <Divider bg="black" thickness="2" my="4" />

        <Pressable onPress={() => setClicker(!clicker)}>
          <HStack alignItems={'center'} justifyContent="space-between" mb="2">
            <VStack>
              <Text bold fontSize={'md'}>
                My Account
              </Text>
              <Text fontSize={'xs'}>Favourites & Settings</Text>
            </VStack>
            <Entypo
              name="chevron-small-down"
              style={{color: 'grey', fontSize: 30}}
            />
          </HStack>
          {clicker ? (
            <HStack alignItems={'center'} justifyContent="space-between" mb="2">
              <VStack>
                <Text bold fontSize={'md'}>
                  My Account
                </Text>
                <Text fontSize="xs"> Favourites & Settings</Text>
              </VStack>
              <Entypo
                name="chevron-small-down"
                style={{color: 'grey', fontSize: 30}}
              />
            </HStack>
          ) : null}

          <Divider bg="black" thickness="1" my="2" />
        </Pressable>

        {/* --------- */}
        <HStack alignItems={'center'} justifyContent="space-between" mb="5">
          <VStack>
            <Text bold fontSize={'md'}>
              Addresses
            </Text>
            <Text fontSize={'xs'}>Share, Edit & Add New Addresses</Text>
          </VStack>
          <Entypo
            name="chevron-small-right"
            style={{color: 'grey', fontSize: 30}}
          />
        </HStack>
        <Divider bg="black" thickness="1" my="2" />

        {/* --------- */}
        <HStack alignItems={'center'} justifyContent="space-between" mb="5">
          <VStack>
            <Text bold fontSize={'md'}>
              Payment & Refunds
            </Text>
            <Text fontSize={'xs'}>Refund Status & Payment Modes</Text>
          </VStack>
          <Entypo
            name="chevron-small-down"
            style={{color: 'grey', fontSize: 30}}
          />
        </HStack>
        <Divider bg="black" thickness="1" my="2" />

        {/* --------- */}
        <HStack alignItems={'center'} justifyContent="space-between" mb="5">
          <VStack>
            <Text bold fontSize={'md'}>
              Swiggy Money
            </Text>
            <Text fontSize={'xs'}>
              View Account Balance & Transction History
            </Text>
          </VStack>
          <Entypo
            name="chevron-small-right"
            style={{color: 'grey', fontSize: 30}}
          />
        </HStack>
        <Divider bg="black" thickness="1" my="2" />

        {/* --------- */}
        <Pressable>
          <HStack alignItems={'center'} justifyContent="space-between" mb="5">
            <VStack>
              <Text bold fontSize={'md'}>
                Help
              </Text>
              <Text fontSize={'xs'}>FAQs & Links</Text>
            </VStack>
            <Entypo
              name="chevron-small-down"
              style={{color: 'grey', fontSize: 30}}
            />
          </HStack>
        </Pressable>
      </VStack>
    </Box>
  );
};

export default Setting;
