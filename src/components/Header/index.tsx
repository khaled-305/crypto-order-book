import React, { FunctionComponent } from 'react';

import { Container } from "./styles";
import GroupingSelectBox from "../GroupingSelectBox";

interface HeaderProps {
  options: number[];
}

const Header: FunctionComponent<HeaderProps> = ({options}) => {
  return (
    <Container>
      <h2>BTC & ETH Order Book</h2>
      <GroupingSelectBox options={options} />
    </Container>
  );
};

export default Header;
