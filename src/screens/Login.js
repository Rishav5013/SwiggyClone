import React, {useState} from 'react';
import Header from '../components/Header';
import {Box, Text, HStack, Input, Button, Link} from 'native-base';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [number, setNumber] = useState(null);

  async function signInWithPhoneNumber(number) {
    // if (number === '') {
    //   alert('Number Field is Empty !');
    // } else {
    //   const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    //   navigation.navigate('Otp', {
    //     MyNumber: userNumber,
    //     confirm: confirmation,
    //   });
    // }
    console.log("This is the number ",number);
    navigation.navigate('Otp');
  }

  return (
    <Box m="4">
      <Header fromSettingscreen />
      <Box mt="5">
        <Text fontSize="4xl" bold lineHeight={40}>
          Enter your mobile number to get OTP
        </Text>

        <HStack justifyContent="space-between" alignItems={'center'}>
          <Text fontSize="sm" bold>
            +91
          </Text>
          {/* <Text fontSize={'xl'} bold>
            |
          </Text> */}
          <Input
            variant="unstyled"
            placeholder="10 digit phone number"
            defaultValue={number}
            onChangeText={text => {
              setNumber(text);
            }}
          />
        </HStack>

        <Button
          size="lg"
          bg={'warning.300'}
          onPress={() => signInWithPhoneNumber(number)}>
          <Text bold color={'muted.50'} fontSize="md">
            LOGIN
          </Text>
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
