import React, {useState} from 'react';
import {
  Box,
  Text,
  HStack,
  VStack,
  ScrollView,
  Pressable,
  Input,
  InputGroup,
  InputLeftAddon,
} from 'native-base';
import {Linking} from 'react-native';
import FastImage from 'react-native-fast-image';
import images from '../config/images';
import {useSelector, useDispatch} from 'react-redux';
import {changeCount, countTotalPrice} from '../../store/actions/userData';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DashedLine from 'react-native-dashed-line';
import Tip from '../components/Tip';

const PayScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const itemCount = useSelector(state => state.PayReducer.count);
  const totalPrice = useSelector(state => state.PayReducer.price);

  const [tip, setTip] = useState(0);
  const [otherTipAdded, setOtherTipAdded] = useState(false);
  let [count, setCount] = useState(0);

  let deliveryPartnerFee = 29;
  let govtTaxes = 4.5;
  let totalPriceAfterTax = totalPrice + deliveryPartnerFee + govtTaxes + tip;

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

  //function makePayment
  function makePayment() {
    const upiURl =
      'upi://pay?pa=9110969789@paytm&pn=PaytmUser&tr=kdahskjahs27575fsdfasdas&am=' +
      totalPriceAfterTax +
      '&mam=null&cu=INR&url=https://MyUPIApp&refUrl=https://MyUPIApp';
    // const upiURl =
    //   'upi://pay?pa=9110969789@paytm&pn=PaytmUser&mc=0000&mode=02&purpose=00&orgid=159761';

    Linking.openURL(upiURl);
  }

  function addOtherTip() {
    setTip(Number(tip));
    setOtherTipAdded(false);
  }

  return (
    <Box>
      <ScrollView bgColor={'muted.200'}>
        <Box bgColor={'muted.50'} m="4" borderRadius={'20'}>
          <HStack justifyContent={'space-evenly'} alignItems="center" py="5">
            <HStack alignItems="center">
              <FastImage
                style={{
                  width: 15,
                  height: 15,
                  marginRight: 12,
                  borderRadius: 15,
                }}
                source={images.nonveg}
              />
              <Text fontSize={'md'}>Chicken Biryani</Text>
            </HStack>

            <HStack
              alignItems="center"
              borderWidth="1"
              w="25%"
              justifyContent={'space-around'}
              borderRadius="10"
              borderColor={'muted.400'}
              p="1.5">
              <Pressable onPress={decrementCount}>
                <Entypo name="minus" style={{color: '#06a94d', fontSize: 20}} />
              </Pressable>
              <Text bold fontSize={'md'}>
                1
              </Text>
              <Pressable onPress={decrementCount}>
                <Entypo name="plus" style={{color: '#06a94d', fontSize: 20}} />
              </Pressable>
            </HStack>

            <Text color={'muted.900'} fontSize={'md'} bold>
              $90
            </Text>
          </HStack>
          <DashedLine dashLength={2} dashThickness={1} dashColor={'#899499'} />

          <Pressable onPress={() => navigation.goBack()}>
            <HStack p="4" alignItems={'center'}>
              <Entypo name="plus" style={{color: 'grey', fontSize: 23}} />

              <Text fontSize={'md'} pl="4" color={'muted.600'}>
                Add more items
              </Text>
            </HStack>
          </Pressable>
          <DashedLine dashLength={2} dashThickness={1} dashColor={'#899499'} />

          <HStack alignItems={'center'} justifyContent="space-between" p="5">
            <Text fontSize={'md'} color={'muted.600'}>
              Add cooking requests
            </Text>
            <AntDesign
              name="pluscircleo"
              style={{color: 'grey', fontSize: 20}}
            />
          </HStack>
        </Box>
        {/* Offers Section */}
        <Text bold fontSize={'md'} m="5">
          Offers & Benefits
        </Text>
        <HStack
          bgColor={'muted.50'}
          justifyContent="space-between"
          p="5"
          mx="5"
          borderRadius={'15'}>
          <Text bold fontSize={'md'} color="muted.700">
            Apply Coupon
          </Text>
          <Entypo
            name="chevron-small-right"
            style={{color: 'grey', fontSize: 23}}
          />
        </HStack>
        {/* Tip Section */}
        <Text bold fontSize={'md'} m="5">
          Tip Your Delivery Partner
        </Text>

        <Box
          bgColor={'muted.50'}
          justifyContent="space-between"
          p="5"
          mx="5"
          borderRadius={'15'}>
          <Text>
            Thank your delivery partner by leaving them a tip. 100% fo the tip
            will go to your delivery partner your delivery partner.
          </Text>

          <HStack justifyContent={'space-around'} mt="5">
            <Pressable w="22%" onPress={() => setTip(10)}>
              <Tip tipAmount="₹10" />
            </Pressable>
            <Pressable w="22%" onPress={() => setTip(20)}>
              <Tip tipAmount="₹20" />
            </Pressable>
            <Pressable w="22%" onPress={() => setTip(30)}>
              <Tip tipAmount="₹30" />
            </Pressable>
            <Pressable w="22%" onPress={() => setOtherTipAdded(true)}>
              <Tip tipAmount="Other" />
            </Pressable>
          </HStack>

          {otherTipAdded === true ? (
            <HStack alignItems={'center'} justifyContent="space-around" mr={5}>
              <HStack alignItems={'center'}>
                <Text>₹ </Text>
                <Input
                  keyboardType="numeric"
                  variant="underlined"
                  placeholder="Enter Tip Amount"
                  onChangeText={val => setTip(Number(val))}
                />
              </HStack>
              <Pressable onPress={addOtherTip}>
                <AntDesign
                  name="check"
                  style={{color: 'green', fontSize: 15}}
                />
              </Pressable>
            </HStack>
          ) : null}
        </Box>

        {/* Delivery Instructions */}
        <Text bold fontSize={'md'} m="5">
          Bill Details
        </Text>
        <Box
          bgColor={'muted.50'}
          justifyContent="space-between"
          p="5"
          mx="5"
          borderRadius={'15'}>
          <HStack justifyContent={'space-between'}>
            <Text>Item Total</Text>
            <Text bold>₹{totalPrice}</Text>
          </HStack>
          <Box my="2">
            <HStack justifyContent={'space-between'}>
              <Text underline>Delivery partner fee</Text>
              <Text bold>₹{deliveryPartnerFee}</Text>
            </HStack>
            <Text>Order above Rs149 for a Free Delivery!</Text>
          </Box>
          <Box my="3">
            <DashedLine
              dashLength={2}
              dashThickness={1}
              dashColor={'#899499'}
            />
          </Box>

          <Box>
            <HStack justifyContent={'space-between'}>
              <Text bold>Delivery Tip</Text>
              {tip > 0 ? <Text bold> ₹{tip}</Text> : <Text bold>Add tip</Text>}
            </HStack>

            <HStack justifyContent={'space-between'}>
              <Text underline>Govt Taxes & Other Charges</Text>
              <Text bold>₹{govtTaxes}</Text>
            </HStack>
          </Box>
          <Box my="3">
            <DashedLine
              dashLength={2}
              dashThickness={1}
              dashColor={'#899499'}
            />
          </Box>
          <Box>
            <HStack justifyContent={'space-between'}>
              <Text bold>To Pay</Text>
              <Text bold>₹{totalPriceAfterTax}</Text>
            </HStack>
          </Box>
        </Box>
        {/* Order Cancellations Policy */}
        <Text bold fontSize={'md'} m="5">
          Review your order and address details to avoid cancellations
        </Text>
        <Box
          bgColor={'muted.50'}
          justifyContent="space-between"
          p="5"
          mx="5"
          borderRadius={'15'}>
          <Text>
            Note: If you cancel within 60 seconds of placing your order, a 100%
            refund will be issued. No refund for cancellations made after 60
            seconds.
          </Text>
          <Box my="3">
            <Text color={'muted.600'}>
              Avoid cancellation as it leads to food wastage.
            </Text>
          </Box>
          <Text underline bold color={'warning.600'}>
            READ CANCELLATIONS POLICY
          </Text>
        </Box>

        <Box mb="50%"></Box>
      </ScrollView>
      <HStack
        alignItems={'center'}
        justifyContent="space-between"
        p="5"
        bgColor={'muted.50'}
        borderTopLeftRadius="15"
        borderTopRightRadius="15"
        position={'absolute'}
        bottom="0"
        w="100%">
        <VStack>
          <Text bold fontSize={'md'}>
            ₹{totalPriceAfterTax}
          </Text>
          <Text bold color={'tertiary.500'}>
            View Detailed Bill
          </Text>
        </VStack>

        <Box bgColor={'tertiary.500'} p="3" borderRadius={'10'}>
          <Pressable onPress={makePayment}>
            <Text color={'muted.200'} bold fontSize={'lg'}>
              Proceed to Pay
            </Text>
          </Pressable>
        </Box>
      </HStack>
    </Box>
  );
};

export default PayScreen;
