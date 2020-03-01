import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';

const ILink = styled(Link)`

  color: #323232;
  background: transparent;
  background-color: transparent;
  text-decoration: none !important;

  &:focus, &:visited, &:link, &:active {
    color: #323232;
    background: transparent;
    background-color: transparent;
    text-decoration: none !important;
  }

  &:hover {
    color: #323232;
    background: transparent;
    background-color: transparent;
    text-decoration: none !important;
    opacity: 0.8;
  }
`;

export default (props) => <ILink {...props} />;
