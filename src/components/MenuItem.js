import React, {Component, useState} from 'react';
import {Box, Divider} from 'native-base';
import Item from './Item';

const MenuItem = ({data}) => {
  console.log('-----', data);
  return (
    <>
      {data.map(item => {
        return (
          <>
            <Item foodItem={item} />
            <Box p="4" bgColor={'muted.50'}>
              <Divider />
            </Box>
          </>
        );
      })}
    </>
  );
};
export default MenuItem;
