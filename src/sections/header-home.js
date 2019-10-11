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
      <p style={{ marginBottom: 0 }}>
        I'm working on <strong>iOS</strong> at <Tag text="Farfetch" href="http://farfetch.com/" background="#fd4f57"/>.
      </p>
      <p style={{ marginBottom: 0 }}>
        Studying for a Master's degree at <Tag text="ISEP" href="https://www.isep.ipp.pt/" background="#A13F25"/>.
      </p>
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

export default (props) => <HomeHeader {...props} />;
