import React from 'react';
import {Text, Box, HStack, VStack, Pressable} from 'native-base';
import {restaurantData} from '../config/fakeData';
import FastImage from 'react-native-fast-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DashedLine from 'react-native-dashed-line';

const Restaurant = ({navigation}) => {
  
  function restaurantDetail(item) {
    console.log('Check', item.restaurantKey);
    navigation.navigate('ResDetail', {item});
  }

  return (
    <>
      {restaurantData.map(item => {
        return (
          <Pressable
            onPress={() => restaurantDetail(item)}
            key={restaurantData.restaurantKey}>
            <HStack mt="5">
              <FastImage
                style={{
                  width: 140,
                  height: 160,
                  marginRight: 12,
                  borderRadius: 15,
                }}
                source={item.src}
              />
              <VStack w="50%" justifyContent={'space-around'}>
                <Box>
                  <Text bold fontSize="md">
                    {item.title}
                  </Text>

                  <HStack
                    justifyContent={'space-between'}
                    w="85%"
                    alignItems={'center'}>
                    <MaterialIcons
                      name="stars"
                      style={{color: 'green', fontSize: 20}}
                    />
                    <Text fontSize={'sm'} bold>
                      4.0 (100+)
                    </Text>

                    <Text fontSize={'sm'} bold>
                      .
                    </Text>
                    <Text fontSize={'sm'} bold>
                      32 mins
                    </Text>
                  </HStack>
                  <Text color={'muted.800'}>{item.type}</Text>
                  <Text color={'muted.800'}>{item.address}</Text>
                </Box>

                <Box>
                  <DashedLine
                    dashLength={2}
                    dashThickness={1}
                    dashColor={'#899499'}
                  />
                  <HStack alignItems={'center'}>
                    <MaterialIcons
                      name="delivery-dining"
                      style={{color: 'black', fontSize: 20, marginRight: 5}}
                    />
                    <Text color={'muted.500'}>Free Delivery</Text>
                  </HStack>
                </Box>
              </VStack>
            </HStack>
          </Pressable>
        );
      })}
    </>
  );
};

export default Restaurant;
