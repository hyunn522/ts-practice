import React from 'react';

interface MenuProps {
  menu: string;
}

const MenuItem = ({ menu }: MenuProps) => {
  return <div>MenuItem {menu}</div>;
};

export default MenuItem;
