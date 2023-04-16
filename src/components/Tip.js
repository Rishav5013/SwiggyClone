import React, {Component} from 'react';
import {Box, Pressable, Text} from 'native-base';

const Tip = ({tipAmount}) => {
  return (
    // <Pressable w="22%">
      <Box
        p="2"
        borderWidth={1}
        borderColor="muted.300"
        alignItems={'center'}
        borderRadius={10}>
        <Text bold color={'muted.600'}>
          {tipAmount}
        </Text>
      </Box>
    // </Pressable>
  );
};
export default Tip;
