import React from 'react';
import { FaBarsStaggered } from "react-icons/fa6";
const Hamburg = ({ onToggleDrawer }) => {
  return (
    <FaBarsStaggered onClick={onToggleDrawer}/>
  );
};

export default Hamburg;
