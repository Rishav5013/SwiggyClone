import React, {Component} from 'react';
import {Text, Box, HStack, VStack, Pressable, Divider} from 'native-base';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FastImage from 'react-native-fast-image';
import images from '../config/images';

const Disclaimer = () => {
  return (
    <Box p="5" bgColor={'indigo.50'}>
      <Text bold>Disclaimer :</Text>
      <HStack alignItems={'center'} flexWrap='wrap'>
        <Octicons name="dot-fill" style={{color: 'grey', fontSize: 15}} />
        <Text> App Prices are set directly by the restaurant</Text>
      </HStack>
      <HStack alignItems={'center'}>
        <Octicons name="dot-fill" style={{color: 'grey', fontSize: 15}} />
        <Text> App Prices are set directly by the restaurant</Text>
      </HStack>
      <HStack alignItems={'center'}>
        <Octicons name="dot-fill" style={{color: 'grey', fontSize: 15}} />
        <Text> App Prices are set directly by the restaurant</Text>
      </HStack>
      {/* <HStack flexWrap={'wrap'}>
        <Octicons name="dot-fill" style={{color: 'grey', fontSize: 15}} />
        <Text>
          All nutritional information is indicative, values are per serve as
          shared by the restaurant and may vary depending on the ingredients and
          portion size.
        </Text>
      </HStack>
      <HStack flexWrap={'wrap'}>
        <Octicons name="dot-fill" style={{color: 'grey', fontSize: 15}} />
        <Text>
          An average active adult requires 2,000 kcal energy per day,
          however,calorie needs may vary.
        </Text>
      </HStack> */}

      <Box my="3">
        <Divider />
      </Box>
      <HStack justifyContent={'space-between'} alignItems="center">
        <HStack alignItems={'center'}>
          <AntDesign
            name="exclamationcircleo"
            style={{color: 'black', fontSize: 14}}
          />
          <Text pl="2">Report an issue with the menu</Text>
        </HStack>
        <AntDesign name="caretright" style={{color: 'black', fontSize: 12}} />
      </HStack>
      <Box my="2">
        <Divider />
      </Box>

      <HStack alignItems={'center'}>
        <FastImage
          style={{
            width: 50,
            height: 40,
          }}
          source={images.fssai2}
        />
        <Text pl='2'>Applied for license</Text>
      </HStack>
      <Box my="3">
        <Divider />
      </Box>
      <Box my='30'></Box>
    </Box>
  );
};

export default Disclaimer;
