import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tag from "../components/tag"
import Grid from "../components/grid"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "I'm Francisco"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[
            `Francisco`,
            `Amado`,
            `blog`,
            `iOS`,
            `Developer`,
            `Software`,
            `Engineer`,
            `Porto`,
          ]}
        />

        <Title>Experience</Title>
        <Grid columns={3} style={{ gridColumnGap: "24px" }}>
          <Column>
            <Subtitle>Anchorage Digital 🪙⚓️</Subtitle>
            <Stamp>Software Engineer</Stamp>
            <Stamp>Apr 2022 - Now</Stamp>
            <Description>
              At {" "}<Tag text="Anchorage Digital" href="https://anchorage.com/"/>, the first USA federally chartered crypto bank, I'm working as an individual contributor developing software, maintaining it's  infrastructure, helping on recruiting and on-call.
            </Description>
          </Column>

          <Column>
            <Subtitle>Farfetch 👗👠</Subtitle>
            <Stamp>iOS Engineer</Stamp>
            <Stamp>Jun 2017 - April 2022</Stamp>
            <Description>
              At{" "}
                <Tag
                  text="Farfetch"
                  href="https://farfetch.com"
                />
              , an e-commerce platform for the world’s greatest selection of luxury, I've
              maintained and developed new features for its iOS application.
            </Description>
          </Column>

          <Column>
            <Subtitle>Finta ⚽️📷</Subtitle>
            <Stamp>iOS Engineer</Stamp>
            <Stamp>Jun 2016 - Jun 2017</Stamp>
            <Description>
              At{" "}
                <Tag
                  text="Pixelmatters"
                  href="https://www.pixelmatters.com/"
                />
              , I was part of Finta, the first Portuguese Social app for Football fans. I maintained and
              developed new features for the iOS app and helped with the
              kickstart of the Android Beta version.
            </Description>
          </Column>

          <Column>
            <Subtitle>Jovago ✈️🏢</Subtitle>
            <Stamp>Junior iOS Engineer</Stamp>
            <Stamp>Sep 2015 - Mar 2016</Stamp>
            <Description>
              Through my time at{" "}
                <Tag
                  text="Porto Tech Center"
                  href="https://pt.linkedin.com/company/porto-tech-center"
                />
              , I got to build the Jovago iOS App, from the ground up to the App Store Release. An App for
              booking Hotels all over the world.
            </Description>
          </Column>
        </Grid>

        <Title>Projects</Title>
        <Grid columns={3} style={{ gridColumnGap: "24px" }}>
          <Column>
            <Subtitle>One Swift to Rule them all 🎥📣</Subtitle>
            <Stamp>Dec 2022</Stamp>
            <Description>
              Presented at one of Infraspeak
              's <Tag text="event" href="https://www.linkedin.com/events/speak-out-mobilesdevs-kotlinpla7008850125951254529/theater/"/>.
              Applying Swift to iOS, Backend, Frontend, GraphQL and its Developer Experience
              joining both worlds, this was a good moment to test
              the tool's constraints.
            </Description>
          </Column>

          <Column>
            <Subtitle>HouseHunter Telegram 📱🏡</Subtitle>
            <Stamp>March 2020</Stamp>
            <Description>
              During my house hunting quest, I built a <Tag text="Telegram Bot" href="https://github.com/FranciscoAmado/househunter-vapor"/> with a Swift Backend, to search house renting websites for me.
            </Description>
          </Column>

          <Column>
            <Subtitle>OpenPeeps in Framer X ✍🏻👨🏻</Subtitle>
            <Stamp>Fev 2020</Stamp>
            <Description>
              Built a TypeScript Framer X <Tag text="Component" href="https://github.com/FranciscoAmado/OpenPeeps.framerfx"/> inspired by the Open Peeps hand-drawn illustration library.
            </Description>
          </Column>

          <Column>
            <Subtitle>iOS Peer Lab Porto ️☕⌨</Subtitle>
            <Stamp>2018 - 2019</Stamp>
            <Description>
              Organized a recurrent local <Tag text="meetup" href="https://www.meetup.com/iOS-Peer-Lab-Porto/"/>{" "}
              for iOS Engineers to talk, code and share our knowledge.
              We introduced a lot of new engineers to the iOS world and challenged seasoned engineers with new concepts.
            </Description>
          </Column>

          <Column>
            <Subtitle>Sortify ️⌨</Subtitle>
            <Stamp>Sep 2018</Stamp>
            <Description>
              A Xcode Source Editor Extension for Sorting Lines.
              <br /><Tag text="Open-sourced" href="https://github.com/FranciscoAmado/Sortify"/>
            </Description>
          </Column>

          <Column>
            <Subtitle>Intro to Vapor 🎥📣</Subtitle>
            <Stamp>Jul 2018</Stamp>
            <Description>
              Joined <Tag text="David Matellano" href="https://twitter.com/damacri86"/> to give an introductory workshop into Server-side Swift with Vapor at the CocoaHeads Porto <Tag text="meetup" href="https://youtu.be/vzpn7FqOUpI"/>.
            </Description>
          </Column>

          <Column>
            <Subtitle>Timezones 🕔🌍</Subtitle>
            <Stamp>Jul 2018</Stamp>
            <Description>
              A MacOS Status Bar Application for keeping track of different time
              zones.
              <br /><Tag text="Open-sourced" href="https://github.com/FranciscoAmado/Timezones" />
            </Description>
          </Column>

          <Column>
            <Subtitle>Leaf 🍃</Subtitle>
            <Stamp>Dec 2016</Stamp>
            <Description>
              A small Extension for Visual Studio for highlighting Leaf files used with Vapor, a framework for Server-Side Swift.
              <br /><Tag text="Open-sourced" href="https://github.com/FranciscoAmado/vscode-html-leaf"/>
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
  letter-spacing: 0.2rem;
  margin-top: 60px;
`

const Subtitle = styled.h5`
  background: #eee;
  background: var(--background-secondary);
  text-align: center;
  border-radius: 4px;
  padding: 0.5rem;
  text-transform: uppercase;
  font-weight: 650;
  font-size: 14px;
  letter-spacing: 0.1rem;
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
