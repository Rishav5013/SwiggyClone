import React, {Component} from 'react';
import {topRatedData} from '../config/fakeData';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  Text,
  Box,
  HStack,
  VStack,
  Pressable,
  Image,
  FlatList,
} from 'native-base';
import FastImage from 'react-native-fast-image';

const TopRated = () => {
  return (
    <VStack>
      <Text bold pb="2" fontSize={'md'}>
        Top rated near you
      </Text>
      <FlatList
        horizontal={true}
        data={topRatedData}
        renderItem={({item}) => (
          <VStack>
            <FastImage
              style={{
                width: 140,
                height: 160,
                marginRight: 12,
                borderRadius: 15,
              }}
              source={item.src}
            />
            <Text bold fontSize={'sm'}>
              {item.title}
            </Text>
            <HStack
              alignItems={'center'}
              w="100"
              justifyContent={'space-between'}>
              <MaterialIcons
                name="stars"
                style={{color: 'green', fontSize: 15}}
              />
              <Text fontSize={'xs'} bold>
                4.0
              </Text>

              <Text fontSize={'xs'} bold>
                .
              </Text>
              <Text fontSize={'xs'} bold>
                32 mins
              </Text>
            </HStack>
          </VStack>
        )}
      />
    </VStack>
  );
};

export default TopRated;
