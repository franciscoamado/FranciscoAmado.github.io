import React from "react";
import styled from "styled-components";
import ILink from "../components/a-link";
import Tag from "../components/tag";

const HomeHeader = (props) => {
  return (
    <Container>
      <Title>
        <ILink to='/'>{props.title}</ILink>
      </Title>
      <h4>
        iOS Engineer, Book Reader and Coffee Lover based in Porto!
      </h4>
      <Description>
        I'm working on <strong>iOS</strong> at <Tag text="Farfetch" href="http://farfetch.com/" background="#fd4f57"/>.
      </Description>
      <Description>
        Studying for a Master's degree at <Tag text="ISEP" href="https://www.isep.ipp.pt/" background="#A13F25"/>.
      </Description>
  </Container>
  );
};

const Container = styled.div`
  margin-top: 15%;
  margin-bottom: 15%;
`

const Title = styled.h1`
  text-transform: uppercase;
`

const Description = styled.body`
  text-align: left;
  margin-bottom: 0;
  font-size: 15px;
  line-height: 1.6;
`

export default (props) => <HomeHeader {...props} />;
