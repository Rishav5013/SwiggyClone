import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import OfferCard from '../components/OfferCard';
import Restaurant from '../components/Restaurant';
import {
  offerCardData,
  topRatedData,
  quicklyDeliverData,
} from '../config/fakeData';

import {Box, Text, VStack, HStack, ScrollView} from 'native-base';
import TopRated from '../components/TopRated';
import Category from '../components/Category';
import Card from '../components/Card';
import FilterButton from '../components/FilterButton';

const Home = ({navigation}) => {
  const [userNumber, setUserNumber] = useState('');

  return (
    <Box>
      <Box m="5">
        <Header navigation={navigation} fromHomescreen={true} />
      </Box>

      {/* Search Bar */}
      <HStack
        justifyContent={'space-between'}
        alignItems={'center'}
        bgColor={'muted.200'}
        p="3"
        ml="5"
        mr="5"
        borderRadius={10}>
        <Text fontSize="xs" color={'grey'}>
          Search for restaurant, item or more
        </Text>
        <HStack justifyContent={'space-evenly'} w="20%">
          <AntDesign name="search1" style={{color: 'grey', fontSize: 20}} />
          {/* <Text>|</Text> */}
          <FontAwesome
            name="microphone"
            style={{color: '#EE7600', fontSize: 20}}
          />
        </HStack>
      </HStack>

      {/* OfferSection */}

      <ScrollView h="80%">
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

        <Box m="5">
          <OfferCard />
        </Box>

        <Box m="5">
          <Card
            typeCard={true}
            typeData={topRatedData}
            typeTitle="Top rated near you"
          />
        </Box>

        {/* <Box m="5">
          <TopRated />
        </Box> */}
        <Box m="5">
          <Category />
        </Box>

        <Box m="5">
          <Card
            typeCard={true}
            typeData={quicklyDeliverData}
            typeTitle="Get it quickly"
          />
        </Box>

        <Box m="5">
          <FilterButton />
        </Box>

        <Box m="5">
          <Restaurant navigation={navigation}/>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default Home;
