import React, {Component} from 'react';
import {Text} from 'native-base';
const TextExp = ({text}) => {
  console.log(text.length);
  var len = text.length;
  return <>{len > 80 ? <Text>{text}</Text> : null}</>;
};

export default TextExp;
