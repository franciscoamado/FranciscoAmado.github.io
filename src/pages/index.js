import React from "react"
import styled from "styled-components";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tag from "../components/tag";
import Grid from "../components/Grid"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "I'm Francisco,"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`Francisco`, `Amado`, `blog`, `iOS`, `Developer`, `Software`, `Engineer`, `Porto`]}
        />

        <Title>Experience</Title>
        <Grid columns={3} style={{ gridColumnGap: "24px" }}>
          <Column>
            <Subtitle>Anchorage Digital 🪙⚓️</Subtitle>
            <Stamp>Software Engineer</Stamp>
            <Stamp>Apr 2022 - Now</Stamp>
            <Description>
              At <strong><Tag text="Anchorage Digital" href="https://anchorage.com/" color="#000000" padding="0"/></strong>, the first federally chartered crypto bank, we're helping institutions participate in digital assets.
            </Description>
          </Column>

          <Column>
            <Subtitle>Farfetch 👗👠</Subtitle>
            <Stamp>iOS Engineer</Stamp>
            <Stamp>Jun 2017 - April 2022</Stamp>
            <Description>
              At <strong><Tag text="Farfetch" href="https://farfetch.com" color="#fd4f57" padding="0"/></strong>, a platform for the world’s greatest selection of luxury, I've maintained and developed new features for the <Tag text="Discover" href="https://appstore.com/farfetch" background="#fd4f57" color="white"/> iOS app.
            </Description>
          </Column>

          <Column>
            <Subtitle>Finta ⚽️📷</Subtitle>
            <Stamp>iOS Engineer</Stamp>
            <Stamp>Jun 2016 - Jun 2017</Stamp>
            <Description>
              At <strong><Tag text="Pixelmatters" href="https://www.pixelmatters.com/" color="#FF695C" padding="0"/></strong>, I've had the chance to be part of <Tag text="Finta" href="https://appsto.re/pt/GEiO9.i" background="#00E582"/>, an app where Social meets Football. I've maintained and developed new features for the iOS app and helped with the development of the Android <Tag text="Beta" href="https://goo.gl/JRGfHg" background="#00E582"/> version.
            </Description>
          </Column>

          <Column>
            <Subtitle>Jovago ✈️🏢</Subtitle>
            <Stamp>Junior iOS Engineer</Stamp>
            <Stamp>Sep 2015 - Mar 2016</Stamp>
            <Description>
              Through my time at <strong><Tag text="Porto Tech Center" href="https://pt.linkedin.com/company/porto-tech-center" color="#F68B1E" padding="0"/></strong>, I was lucky to get to build <Tag text="Jovago" href="https://pt.linkedin.com/company/porto-tech-center" background="#2A72E8"/>'s iOS App, from blank to the App Store Release. An App for booking Hotels all over the world.
            </Description>
          </Column>
        </Grid>

        <Title>Projects</Title>
        <Grid columns={3} style={{ gridColumnGap: "24px" }}>
          <Column>
            <Subtitle>One Swift to Rule them all 🎥📣</Subtitle>
            <Stamp>Dec 2022</Stamp>
            <Description>
              Presented at one of <Tag text="Infraspeak" href="https://www.linkedin.com/showcase/inside-infraspeak/" background="#00aced"/>'s event. This was a great moment to put Swift into practice, test the tool's constraints and what can be built around it. It covered iOS, Backend, Frontend, GraphQL and the Developer Experience joining both worlds.
              <br/>It was <Tag text="streamed" href="https://www.linkedin.com/events/speak-out-mobilesdevs-kotlinpla7008850125951254529/theater/" background="#36454f"/> on LinkedIn 😅.
            </Description>
          </Column>

          <Column>
            <Subtitle>HouseHunter Telegram 📱🏡</Subtitle>
            <Stamp>March 2020</Stamp>
            <Description>
              During my house hunting quest, I built a <Tag text="Telegram Bot" href="https://github.com/FranciscoAmado/househunter-vapor" background="#36454f"/> with a <Tag text="Vapor" href="http://vapor.codes" background="#92A8CF"/> Backend, to search house renting websites for me.
            </Description>
          </Column>

          <Column>
            <Subtitle>OpenPeeps in Framer X ✍🏻👨🏻</Subtitle>
            <Stamp>Fev 2020</Stamp>
            <Description>
              Built a <Tag text="Framer X Component" href="https://github.com/FranciscoAmado/OpenPeeps.framerfx" background="#36454f"/> inspired by the <Tag text="Open Peeps" href="https://www.openpeeps.com/" background="#000"/> hand-drawn illustration library.
            </Description>
          </Column>

          <Column>
            <Subtitle>iOS Peer Lab Porto ️☕⌨</Subtitle>
            <Stamp>2018 - 2019</Stamp>
            <Description>
              We're a <Tag text="Meetup" href="https://www.meetup.com/iOS-Peer-Lab-Porto/" background="#f65858"/> of iOS Developers that gets together every other Saturday to talk, code and share our knowledge.
            </Description>
          </Column>

          <Column>
            <Subtitle>Sortify ️⌨</Subtitle>
            <Stamp>Sep 2018</Stamp>
            <Description>
              A Xcode Source Editor Extension for Sorting Lines.
              <br/>Open-sourced <Tag text="here" href="https://github.com/FranciscoAmado/Sortify" background="#36454f"/>.
            </Description>
          </Column>

          <Column>
            <Subtitle>Intro to Vapor 🎥📣</Subtitle>
            <Stamp>Jul 2018</Stamp>
            <Description>
              Joined <strong><Tag text="David Matellano" href="https://twitter.com/damacri86" color="#00aced" padding="0"/></strong> to give an introductory workshop into Server-side Swift with <Tag text="Vapor" href="http://vapor.codes" background="#92A8CF"/> at the <Tag text="CocoaHeads Porto" href="https://twitter.com/cocoaheadsporto" background="#00aced"/> meetup.
              <br/>It was also <Tag text="recorded" href="https://youtu.be/vzpn7FqOUpI" background="#36454f"/> 😅.
            </Description>
          </Column>

          <Column>
            <Subtitle>Timezones 🕔🌍</Subtitle>
            <Stamp>Jul 2018</Stamp>
            <Description>
              A MacOS Status Bar Application for keeping track of different time zones.
              <br/>Open-sourced <Tag text="here" href="https://github.com/FranciscoAmado/Timezones" background="#36454f"/>.
            </Description>
          </Column>

          <Column>
            <Subtitle>Leaf 🍃</Subtitle>
            <Stamp>Dec 2016</Stamp>
            <Description>
              A small Extension for Visual Studio for highlighting <Tag text="Leaf" href="https://github.com/vapor/leaf" background="#8BC52B"/> files used with <Tag text="Vapor" href="http://vapor.codes" background="#92A8CF"/>, a framework for Server-Side Swift.
              <br/>Open-sourced <Tag text="here" href="https://github.com/FranciscoAmado/vscode-html-leaf" background="#36454f"/>.
            </Description>
          </Column>
        </Grid>
      </Layout>
    )
  }
}

const Column = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
`
const Title = styled.h4`
  text-transform: uppercase;
  letter-spacing: .2rem;
  margin-top: 60px;
`

const Subtitle = styled.h5`
  background: #EEE;
  text-align: center;
  border-radius: 4px;
  padding: 0.5rem;
  text-transform: uppercase;
  font-weight: 650;
  font-size: 14px;
  letter-spacing: .1rem;
  margin-bottom: 0;
`

const Stamp = styled.body`
  text-align: left;
  font-family: "Consolas", Helvetica, Arial, sans-serif;
  font-size: 14px;
`

const Description = styled.body`
  text-align: left;
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.6;
`

export default IndexPage
