import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';

const ILink = styled(Link)`

  color: #323232;
  text-decoration: none !important;

  &:focus, &:hover, &:visited, &:link, &:active {
    color: #323232;
    text-decoration: none !important;
  }

  &:hover {
    color: none;
    text-decoration: none !important;
  }
`;

export default (props) => <ILink {...props} />;
