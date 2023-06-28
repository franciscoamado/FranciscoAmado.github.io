import React from "react"
import styled from "styled-components"
import ILink from "../components/a-link"

const BlogHeader = (props) => {
  return (
    <Container>
      <Title>
        <ILink to="/">{props.title}</ILink>
      </Title>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 15%;
  margin-bottom: 15%;
`

const Title = styled.h1`
  text-transform: uppercase;
`

export default (props) => <BlogHeader {...props} />
