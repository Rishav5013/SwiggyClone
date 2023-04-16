import React, {useState} from 'react';
import {Box, Divider, HStack, Pressable, Text, VStack} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import {useSelector, useDispatch} from 'react-redux';
import {changeCount, countTotalPrice} from '../../store/actions/userData';

const Counter = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(state => state.PayReducer.count);
  const totalPrice = useSelector(state => state.PayReducer.price);

  let [count, setCount] = useState(0);
  let itemPrice = 0;
  let decitemPrice = 0;

  function incrementCount() {
    let increaseBy = 1;
    count = count + 1;
    const {price} = item;
    itemPrice = itemPrice + price;

    dispatch(changeCount(increaseBy, itemCount));
    dispatch(countTotalPrice(itemPrice, totalPrice));
    setCount(count);
  }

  function decrementCount() {
    let increaseBy = -1;
    count = count - 1;
    const {price} = item;
    decitemPrice = decitemPrice + price;

    dispatch(changeCount(increaseBy, itemCount));
    dispatch(countTotalPrice(-decitemPrice, totalPrice));
    setCount(count);
  }

  return (
    <HStack
      w="70%"
      p="1"
      borderWidth={'1'}
      borderRadius={10}
      alignItems={'center'}
      justifyContent={'center'}
      bgColor={'muted.50'}
      position={'absolute'}
      top="135">
      {count === 0 ? (
        <Pressable onPress={incrementCount}>
          <Text bold fontSize={'md'} color={'success.700'}>
            ADD
          </Text>
        </Pressable>
      ) : (
        <HStack
          alignItems={'center'}
          justifyContent="space-evenly"
          w="100%"
          p="1">
          <Pressable onPress={decrementCount}>
            <Entypo name="minus" style={{color: '#06a94d', fontSize: 20}} />
          </Pressable>
          <Text bold fontSize={'md'}>
            {count}
          </Text>
          <Pressable onPress={incrementCount}>
            <Entypo name="plus" style={{color: '#06a94d', fontSize: 20}} />
          </Pressable>
        </HStack>
      )}
    </HStack>
  );
};

export default Counter;
