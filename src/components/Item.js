import React, {useState} from 'react';
import {Box, Divider, HStack, Pressable, Text, VStack} from 'native-base';
import FastImage from 'react-native-fast-image';
import images from '../config/images';
import Entypo from 'react-native-vector-icons/Entypo';
import {useSelector, useDispatch} from 'react-redux';
import {changeCount, countTotalPrice} from '../../store/actions/userData';
import TextExp from './TextExp';

const Item = ({foodItem}) => {
  const dispatch = useDispatch();
  const itemCount = useSelector(state => state.PayReducer.count);
  const totalPrice = useSelector(state => state.PayReducer.price);

  let [count, setCount] = useState(0);
  let itemPrice = 0;
  let decitemPrice = 0;

  function incrementCount() {
    let increaseBy = 1;
    count = count + 1;
    const {price} = foodItem;
    itemPrice = itemPrice + price;

    dispatch(changeCount(increaseBy, itemCount));
    dispatch(countTotalPrice(itemPrice, totalPrice));
    setCount(count);
  }

  function decrementCount() {
    let increaseBy = -1;
    count = count - 1;
    const {price} = foodItem;
    decitemPrice = decitemPrice + price;

    dispatch(changeCount(increaseBy, itemCount));
    dispatch(countTotalPrice(-decitemPrice, totalPrice));
    setCount(count);
  }
  return (
    <HStack justifyContent={'space-between'} p="4">
      <VStack w="50%">
        {foodItem.veg ? (
          <FastImage
            style={{
              width: 20,
              height: 20,
              borderRadius: 15,
            }}
            source={images.veg}
          />
        ) : (
          <FastImage
            style={{
              width: 20,
              height: 20,
              borderRadius: 15,
            }}
            source={images.nonveg}
          />
        )}

        <Text bold fontSize={'lg'}>
          {foodItem.title}
        </Text>
        <Text bold fontSize={'lg'}>
          ₹{foodItem.price}
        </Text>
        <Text bold>Ratings</Text>

        <Text>{foodItem.description}</Text>
        {/* <TextExp text={foodItem.description}/> */}

      </VStack>
      <VStack alignItems={'center'}>
        <FastImage
          style={{
            width: 150,
            height: 160,
            borderRadius: 15,
          }}
          source={foodItem.imgsrc}
        />

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
      </VStack>
    </HStack>
  );
};

export default Item;
