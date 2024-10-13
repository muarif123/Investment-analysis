import React from 'react';
import { IoClose } from "react-icons/io5";
const Closer = ({ onToggleDrawer }) => {
  return (
    <IoClose className='text-2xl' onClick={onToggleDrawer}/>
  );
};

export default Closer;
