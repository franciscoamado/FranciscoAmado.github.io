import React from "react";
import styled from "styled-components";
import ILink from "../components/a-link";
import Tag from "../components/tag";
import Me from "../components/Me";

const HomeHeader = (props) => {
  return (
    <Container>
      <Title style={{ marginBottom: 0 }}>
        <ILink to='/' style={{ padding: 0 }}>
          {/* <Me/> */}
          <div>{props.title}</div>
        </ILink>
      </Title>
      <h4>
        a Software Engineer from Porto, 🇵🇹!
      </h4>
      <h4>
        I'm working on <strong>iOS</strong> at <Tag text="Anchorage Digital" href="https://anchorage.com/" background="#254b40"/>.
      </h4>
  </Container>
  );
};

const Container = styled.div`
  margin-top: 15%;
  margin-bottom: 15%;
`

const Title = styled.h1`
  text-transform: uppercase;
  padding: 0;
`

const Description = styled.body`
  text-align: left;
  margin-bottom: 0;
  font-size: 15px;
  line-height: 1.6;
`

export default (props) => <HomeHeader {...props} />;
