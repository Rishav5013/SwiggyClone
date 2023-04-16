import React, {useState} from 'react';
import MaskInput from 'react-native-mask-input';
import {Box, Text, Image, Center,Pressable, Button, Link, HStack} from 'native-base';

const Otp = ({route, navigation}) => {
//   const {number} = route.params;
//   const {confirm} = route.params;

//   //FireBase Authentication
  const [code, setCode] = useState('');
  async function confirmCode() {
    // try {
    //   await confirm.confirm(code);
    //   navigation.navigate('ProfileInfo');
    // } catch (error) {
    //   console.log('Invalid code.');
    console.log("Checking");
    // }
  }

  return (
    <>
      <Box>
        <HStack alignItems="center" justifyContent={'space-between'} mt={20}>
          <MaskInput
            autoFocus
            value={code}
            onChangeText={(masked, unmasked) => {
              setCode(unmasked);
            }}
            style={{
              width: '500%',
              paddingLeft: 80,
              color: 'black',
              fontSize: 20,
            }}
            mask={[
              /\d/,
              '       ',
              /\d/,
              '       ',
              /\d/,
              '       ',
              /\d/,
              '       ',
              /\d/,
              '       ',
              /\d/,
            ]}
          />
        </HStack>

        <Pressable>
          <Text ml={'280'} mt={'0'} color={'success.500'}>
            Resend
          </Text>
        </Pressable>
      </Box>

      <Box pt={'10'} w="75%" maxW="300px" mx="auto">
        <Button bg={'success.500'} onPress={confirmCode}>
          <Text color={'light.100'} fontWeight="bold">
            Submit
          </Text>
        </Button>
      </Box>
    </>
  );
};

export default Otp;
