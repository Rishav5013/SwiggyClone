import React from 'react';
import {Text, Box, HStack, VStack, Pressable} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({navigation, fromHomescreen, fromSettingscreen}) => {
  function onClick() {
    navigation.navigate('Address');
  }

  function onPersonClick() {
    navigation.navigate('Setting');
  }
  

  return (
    <>
      {fromHomescreen ? (
        <HStack justifyContent={'space-between'}>
          <VStack>
            <HStack
              alignItems={'center'}
              justifyContent={'space-between'}
              w="48%">
              <Entypo name="home" style={{color: '#EE7600', fontSize: 22}} />
              <Text fontSize="xl" bold>
                Home
              </Text>
              <Pressable onPress={() => onClick()}>
                <Entypo
                  name="chevron-down"
                  style={{color: 'grey', fontSize: 20}}
                />
              </Pressable>
            </HStack>
            <Text fontSize="xs">House no.97 Madhur Colony Gaya Bihar</Text>
          </VStack>
          <Pressable onPress={() => onPersonClick()}>
            <Ionicons
              name="person-circle"
              style={{color: '#4C4E52', fontSize: 45}}
            />
          </Pressable>

        </HStack>
      ) : null}

      {fromSettingscreen ? (
        <HStack justifyContent={'space-between'}>
          <Ionicons
            name="arrow-back-outline"
            style={{color: 'black', fontSize: 30}}
          />

          {/* <Ionicons
            name="arrow-back-outline"
            style={{color: '#EE7600', fontSize: 22}}
          /> */}
        </HStack>
      ) : null}
    </>
  );
};
export default Header;
// bgColor={'red.600'}
