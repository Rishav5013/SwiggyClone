import React, {Component} from 'react';
import {categoryFoodData} from '../config/fakeData';
import {
  Text,
  Box,
  VStack,
  FlatList,
  ScrollView,
} from 'native-base';
import FastImage from 'react-native-fast-image';

//Change is required in this Component.

const Category = () => {
  return (
    <Box>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FlatList
          numColumns={Math.ceil(categoryFoodData.length / 2)}
          data={categoryFoodData}
          renderItem={({item}) => (
            <VStack>
              <Box textAlign={'center'} alignItems={'center'} p="2" pl="0">
                <FastImage
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 100,
                  }}
                  source={item.src}
                />
                <Text bold>{item.title}</Text>
              </Box>
            </VStack>
          )}
        />
      </ScrollView>
    </Box>
  );
};

export default Category;
