import React from 'react';
import {Text, Box, Image, VStack, FlatList} from 'native-base';
import {offerCardData} from '../config/fakeData';
import images from '../config/images';
import FastImage from 'react-native-fast-image';

const OfferCard = ({toprated}) => {
  return (
    <Box>
      <VStack>
        <Text bold pb="2" fontSize={'md'}>
          What's on your mind?
        </Text>
        <FlatList
          horizontal={true}
          data={offerCardData}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <Box>
              <FastImage
                style={{
                  width: 300,
                  height: 170,
                  marginRight: 12,
                  borderRadius: 15,
                }}
                source={item.src}
              />
            </Box>
          )}
        />
      </VStack>
    </Box>
  );
};

export default OfferCard;
