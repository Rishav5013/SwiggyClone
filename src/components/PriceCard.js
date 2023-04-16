import React, {Component} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Text, Box, HStack, VStack, Pressable, FlatList} from 'native-base';

const PriceCard = () => {
  const itemCount = useSelector(state => state.PayReducer.count);
  const totalPrice = useSelector(state => state.PayReducer.price);

  return (
    <HStack
      alignItems={'center'}
      justifyContent="space-between"
      bgColor={'tertiary.500'}
      p="3"
      m="3"
      borderRadius={'15'}>
      <Box>
        <Text bold color={'muted.50'}>
          {itemCount} Item | ₹{totalPrice}
        </Text>
        <Text fontSize={'xs'} color={'muted.50'}>
          Extra charges may apply
        </Text>
      </Box>
      <Text bold fontSize={'lg'} color={'muted.50'}>
        View Cart
      </Text>
    </HStack>
  );
};

export default PriceCard;
