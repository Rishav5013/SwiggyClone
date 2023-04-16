import React, {useState} from 'react';
import {AccordionData} from '../../config/fakeData';
import MyAccordion from './MyAccordion';

const Accordion = () => {
    
  const [data, setData] = useState(AccordionData);
  return (
    <>
      {data.map(currElem => {
        const {key} = data;
        return <MyAccordion key={currElem.id} {...currElem}/>
      })}
    </>
  );
};
export default Accordion;