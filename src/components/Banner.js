import React, { Component } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import OfferCard from '../components/OfferCard';
import Restaurant from '../components/Restaurant';
import {Text, Box, HStack, VStack, Pressable, FlatList} from 'native-base';

const Banner = () => {
    return (
      <HStack
        alignItems={'center'}
        justifyContent={'space-between'}
        bgColor={'muted.200'}
        p="2"
        m="5"
        borderRadius={10}>
        <HStack justifyContent={'space-evenly'} alignItems={'center'} w="85%">
          <Fontisto
            name="shopping-sale"
            style={{color: '#EE7600', fontSize: 40}}
          />

          <VStack>
            <Text bold fontSize={'lg'}>
              Offers upto 60% off
            </Text>
            <Text color={'muted.500'} bold>
              Hot Deals, Flat Offers more
            </Text>
          </VStack>
        </HStack>
        <Entypo name="chevron-right" style={{color: 'grey', fontSize: 25}} />
      </HStack>
    );
};

export default Banner;
