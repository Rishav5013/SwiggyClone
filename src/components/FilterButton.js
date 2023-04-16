import React, {Component} from 'react';
import {
  Text,
  Box,
  HStack,
  VStack,
  Pressable,
  FlatList,
  Icon,
  ScrollView,
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Button = props => {
  return (
    <HStack
      borderWidth={1}
      borderRadius={50}
      borderColor={'muted.400'}
      alignItems={'center'}
      p="1.5"
      mr="3">
      <Text fontSize="xs" bold>
        {props.title}
      </Text>
      <MaterialIcons
        name={props.iconName}
        style={{color: 'green', fontSize: 15}}
      />
    </HStack>
  );
};

const FilterButton = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Button title="Filter " iconName="sort" />
      <Button title="Sort by " iconName="sort" />
      <Button title="Fast Delivery" />
      <Button title="Cuisines" />
      <Button title="New on Swiggy" />
      <Button title="Rating 4.0+" />
      <Button title="Pure Veg" />
      <Button title="Offers" />
      <Button title="Rs. 300-Rs. 600" />
      <Button title="Less than Rs. 300" />
    </ScrollView>
  );
};

export default FilterButton;
