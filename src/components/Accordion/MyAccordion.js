import React, {useState} from 'react';
import {HStack, Pressable, Text} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import MenuItem from '../MenuItem';

const MyAccordion = ({title, data}) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Pressable onPress={() => setShow(!show)}>
        <HStack justifyContent={'space-between'} p="4">
          <Text fontSize={'lg'} bold>
            {title}
          </Text>
          {show ? (
            <Feather name="chevron-up" style={{color: 'black', fontSize: 25}} />
          ) : (
            <Feather
              name="chevron-down"
              style={{color: 'black', fontSize: 25}}
            />
          )}
        </HStack>
      </Pressable>
      {show ? <MenuItem data={data} /> : null}
    </>
  );
};

export default MyAccordion;
