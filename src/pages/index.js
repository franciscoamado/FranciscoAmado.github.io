import React from "react"
import { Link, Text } from "gatsby"
import styled from "styled-components";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tag from "../components/tag";

class IndexPage extends React.Component {
  render() {
    const siteTitle = "I'm Francisco"
    
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`Francisco`, `Amado`, `blog`, `iOS`, `Developer`, `Engineer`, `Porto`]}
        />

        <Title>Experience</Title>
        <Row className="row">
          <Column className="four columns">
            <Subtitle>Farfetch 👗👠</Subtitle>
            <Stamp>iOS Engineer</Stamp>
            <Stamp>Jun 2017 - Present</Stamp>
            <Description>
              At <strong><Tag text="Farfetch" href="https://farfetch.com" color="#fd4f57" padding="0"/></strong>, a platform for the world’s greatest selection of luxury, I'm maintaining and developing new features for the <Tag text="Discover" href="https://appstore.com/farfetch" background="#fd4f57" color="white"/> iOS app.
            </Description>
          </Column>

          <Column className="four columns">
            <Subtitle>Finta ⚽️📷</Subtitle>
            <Stamp>iOS Engineer</Stamp>
            <Stamp>Jun 2016 - Jun 2017</Stamp>
            <Description>
              At <strong><Tag text="Pixelmatters" href="https://www.pixelmatters.com/" color="#FF695C" padding="0"/></strong>, I've had the chance to be part of <Tag text="Finta" href="https://appsto.re/pt/GEiO9.i" background="#00E582"/>, an app where Social meets Football. I've maintained and developed new features for the iOS app and helped with the development of the Android <Tag text="Beta" href="https://goo.gl/JRGfHg" background="#00E582"/> version.
            </Description>
          </Column>

          <Column className="four columns">
            <Subtitle>Jovago ✈️🏢</Subtitle>
            <Stamp>Junior iOS Engineer</Stamp>
            <Stamp>Sep 2015 - Mar 2016</Stamp>
            <Description>
              Through my time at <strong><Tag text="Porto Tech Center" href="https://pt.linkedin.com/company/porto-tech-center" color="#F68B1E" padding="0"/></strong>, I was lucky to get to build <Tag text="Jovago" href="https://pt.linkedin.com/company/porto-tech-center" background="#2A72E8"/>'s iOS App, from blank to the App Store Release. An App for booking Hotels all over the world.
            </Description>
          </Column>
        </Row>

        <Title>Projects</Title>
        <Row className="row" style={{ marginBottom: "0" }}>
          <Column className="four columns">
            <Subtitle>OpenPeeps in Framer X ✍🏻👨🏻</Subtitle>
            <Stamp>Fev 2020</Stamp>
            <Description>
              Built a <Tag text="Framer X Component" href="https://github.com/FranciscoAmado/OpenPeeps.framerfx" background="#36454f"/> inspired by the <Tag text="Open Peeps" href="https://www.openpeeps.com/" background="#000"/> hand-drawn illustration library.
            </Description>
          </Column>
          <Column className="four columns">
            <Subtitle>iOS Peer Lab Porto ️☕⌨</Subtitle>
            <Stamp>Apr 2018</Stamp>
            <Description>
              We're a <Tag text="Meetup" href="https://www.meetup.com/iOS-Peer-Lab-Porto/" background="#f65858"/> of iOS Developers that gets together every other Saturday to talk, code and share our knowledge.
            </Description>
          </Column>

          <Column className="four columns">
            <Subtitle>Sortify ️⌨</Subtitle>
            <Stamp>Sep 2018</Stamp>
            <Description>
              A Xcode Source Editor Extension for Sorting Lines. 
              It is Open-sourced <Tag text="here" href="https://github.com/FranciscoAmado/Sortify" background="#36454f"/>.
            </Description>
          </Column>
        </Row>
        <Row className="row" style={{ marginBottom: "0" }}>
          <Column className="four columns">
            <Subtitle>Intro to Vapor 🎥📣</Subtitle>
            <Stamp>Jul 2018</Stamp>
            <Description>
              I joined <strong><Tag text="David Matellano" href="https://twitter.com/damacri86" color="#00aced" padding="0"/></strong> to give an introductory workshop into Server-side Swift with <Tag text="Vapor" href="http://vapor.codes" background="#92A8CF"/> at the <Tag text="CocoaHeads Porto" href="https://twitter.com/cocoaheadsporto" background="#00aced"/> meetup. It was also <Tag text="recorded" href="https://youtu.be/vzpn7FqOUpI" background="#36454f"/> 😅.
            </Description>
          </Column>
          <Column className="four columns">
            <Subtitle>Timezones 🕔🌍</Subtitle>
            <Stamp>Jul 2018</Stamp>
            <Description>
              A MacOS Status Bar Application for keeping track of different time zones. 
              It is Open-sourced <Tag text="here" href="https://github.com/FranciscoAmado/Timezones" background="#36454f"/>.
            </Description>
          </Column>

          <Column className="four columns">
            <Subtitle>Leaf 🍃</Subtitle>
            <Stamp>Dec 2016</Stamp>
            <Description>
              A small Extension for Visual Studio for highlighting <Tag text="Leaf" href="https://github.com/vapor/leaf" background="#8BC52B"/> files used with <Tag text="Vapor" href="http://vapor.codes" background="#92A8CF"/>, a framework for Server-Side Swift.
              It is Open-sourced <Tag text="here" href="https://github.com/FranciscoAmado/vscode-html-leaf" background="#36454f"/>.
            </Description>
          </Column>
        </Row>
      </Layout>
    )
  }
}

const Row = styled.div`
  margin-top: 20px;
  margin-Bottom: 40px;
  text-align: center;
`

const Column = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
`
const Title = styled.h4`
  text-transform: uppercase;
  letter-spacing: .2rem;
`

const Subtitle = styled.h5`
  background: #EEE;
  text-align: center;
  border-radius: 4px;
  padding: 0.5rem;
  text-transform: uppercase;
  font-weight: 650;
  font-size: 13px;
  letter-spacing: .1rem;
  margin-bottom: 0;
`

const Stamp = styled.body`
  text-align: left;
  font-family: "Consolas", Helvetica, Arial, sans-serif;
  font-size: 13px;
`

const Description = styled.body`
  text-align: left;
  margin-top: 10px;
  font-size: 15px;
  line-height: 1.6;
`

export default IndexPage
