import React from 'react';
import {
  Box,
  Text,
  HStack,
  ScrollView,
  VStack,
  Divider,
  Pressable,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Header from '../components/Header';
import Accordion from '../components/Accordion/Accordion';
import Disclaimer from '../components/Disclaimer';
import PriceCard from '../components/PriceCard';
import {useSelector} from 'react-redux';

const ResDetail = ({navigation, route}) => {
  const itemCount = useSelector(state => state.PayReducer.count);
  const {item} = route.params;

  function clicker() {
    navigation.navigate('PayScreen');
  }

  return (
    <Box>
      <ScrollView>
        <Box
          bgColor={'muted.200'}
          p="4"
          borderBottomRightRadius={30}
          borderBottomLeftRadius={30}>
          <Pressable onPress={() => navigation.goBack()}>
            <Header fromSettingscreen={'true'} />
          </Pressable>

          <VStack
            bgColor="muted.50"
            p="3"
            mt="3"
            borderRadius={'20'}
            justifyContent="space-between">
            <VStack py="3">
              <HStack alignItems={'center'} justifyContent={'space-between'}>
                <Text fontSize={'xl'} bold>
                  {item.title}
                </Text>
                <HStack w="15%" justifyContent={'space-evenly'}>
                  <Entypo name="share" style={{color: 'grey', fontSize: 20}} />
                  <Ionicons
                    name="heart-outline"
                    style={{color: 'grey', fontSize: 20}}
                  />
                </HStack>
              </HStack>

              <HStack alignItems={'center'}>
                <MaterialIcons
                  name="stars"
                  style={{color: 'green', fontSize: 20}}
                />
                <Text bold color={'muted.600'}>
                  3.6(500+ ratings)
                </Text>
                <Ionicons
                  name="information-circle-outline"
                  style={{color: 'grey', fontSize: 20}}
                />
                <Text bold> . </Text>
                <Text bold>$300 for two</Text>
              </HStack>
              <Text> {item.type}</Text>
            </VStack>
            <Divider />

            <HStack py="2">
              <HStack>
                <Entypo
                  name="flow-line"
                  style={{color: 'grey', fontSize: 40, marginLeft: -10}}
                />
                <VStack>
                  <Text bold>Outlet</Text>
                  <Text bold>20 mins</Text>
                </VStack>
              </HStack>

              <VStack pl="5">
                <Text>{item.address}</Text>
                <Text>Delivery to Home</Text>
              </VStack>
            </HStack>

            <Divider />

            <HStack py="2" alignItems={'center'}>
              <Ionicons
                name="md-bicycle"
                style={{color: 'grey', fontSize: 25}}
              />
              <Text bold> 0-4 kms | </Text>
              <Text bold> Free Delivery on order above Rs 199</Text>
            </HStack>
          </VStack>
        </Box>
        {/* OfferSection */}
        <HStack
          alignItems={'center'}
          justifyContent={'space-between'}
          bgColor={'muted.50'}
          borderWidth={'1'}
          borderColor={'muted.400'}
          p="2"
          m="5"
          borderRadius={20}>
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
        <HStack alignItems={'center'} justifyContent={'center'}>
          <MaterialCommunityIcons
            name="food-apple-outline"
            style={{color: 'grey', fontSize: 25}}
          />
          <Text>MENU</Text>
          <MaterialCommunityIcons
            name="food-apple-outline"
            style={{color: 'grey', fontSize: 25}}
          />
        </HStack>
        <HStack
          bgColor={'muted.200'}
          justifyContent={'space-around'}
          p="3"
          m="5"
          borderRadius={10}>
          <Text>Search for dishes</Text>
          <Feather name="search" style={{color: 'grey', fontSize: 20}} />
        </HStack>

        <Box mx="5">
          <Divider />
        </Box>

        <Box>
          <Accordion />
        </Box>

        <Box>
          <Disclaimer />
        </Box>
      </ScrollView>

      {itemCount > 0 ? (
        <Box position="absolute" bottom="2" w="100%">
          <Pressable onPress={clicker}>
            <PriceCard />
          </Pressable>
        </Box>
      ) : null}
    </Box>
  );
};

export default ResDetail;
