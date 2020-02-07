import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';

const ILink = styled(Link)`

  color: #323232;
  background: transparent;
  background-color: transparent;
  text-decoration: none !important;

  &:focus, &:hover, &:visited, &:link, &:active {
    color: #323232;
    background: transparent;
    background-color: transparent;
    text-decoration: none !important;
  }

  &:hover {
    color: none;    
    background: transparent;
    background-color: transparent;
    text-decoration: none !important;
  }
`;

export default (props) => <ILink {...props} />;
