import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tag from "../components/tag"
import Grid from "../components/grid"
import Item from "../components/grid-item"

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

        <h3 class="mb-8 font-extrabold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 ">Experience</h3>
        <Grid>
          <Item title="Anchorage Digital 🪙⚓️" subtitle="Software Engineer" caption="Apr 2022 - Now">
            <p>At {" "}<Tag text="Anchorage Digital" href="https://anchorage.com/"/>, the first USA federally chartered crypto bank, I'm working as an individual contributor developing software, maintaining it's  infrastructure, helping on recruiting and on-call.</p>
          </Item>

          <Item title="Farfetch 👗👠" subtitle="iOS Engineer" caption="Jun 2017 - April 2022">
            <p>
              At{" "}
                <Tag
                  text="Farfetch"
                  href="https://farfetch.com"
                />
              , an e-commerce platform for the world’s greatest selection of luxury, I've
              maintained and developed new features for its iOS application.
            </p>
          </Item>

          <Item title="Finta ⚽️📷" subtitle="iOS Engineer" caption="Jun 2016 - Jun 2017">
            <p>
              At{" "}
                <Tag
                  text="Pixelmatters"
                  href="https://www.pixelmatters.com/"
                />
              , I was part of Finta, the first Portuguese Social app for Football fans. I maintained and
              developed new features for the iOS app and helped with the
              kickstart of the Android Beta version.
            </p>
          </Item>

          <Item title="Jovago ✈️🏢" subtitle="Junior iOS Engineer" caption="Sep 2015 - Mar 2016">
            <p>
              Through my time at{" "}
                <Tag
                  text="Porto Tech Center"
                  href="https://pt.linkedin.com/company/porto-tech-center"
                />
              , I got to build the Jovago iOS App, from the ground up to the App Store Release. An App for
              booking Hotels all over the world.
            </p>
          </Item>
        </Grid>

        <h3 class="mb-8 font-extrabold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 ">Projects</h3>
        <Grid>
          <Item title="One Swift to Rule them all 🎥📣" caption="Dec 2022">
            <p>
              Presented at one of Infraspeak
              's <Tag text="event" href="https://www.linkedin.com/events/speak-out-mobilesdevs-kotlinpla7008850125951254529/theater/"/>.
              Applying Swift to iOS, Backend, Frontend, GraphQL and its Developer Experience
              joining both worlds, this was a good moment to test
              the tool's constraints.
            </p>
          </Item>

          <Item title="HouseHunter Telegram 📱🏡" caption="March 2020">
            <p>
              During my house hunting quest, I built a <Tag text="Telegram Bot" href="https://github.com/FranciscoAmado/househunter-vapor"/> with a Swift Backend, to search house renting websites for me.
            </p>
          </Item>

          <Item title="OpenPeeps in Framer X ✍🏻👨🏻" caption="Fev 2020">
            <p>
              Built a TypeScript Framer X <Tag text="Component" href="https://github.com/FranciscoAmado/OpenPeeps.framerfx"/> inspired by the Open Peeps hand-drawn illustration library.
            </p>
          </Item>

          <Item title="iOS Peer Lab Porto ️☕⌨" caption="2018 - 2019">
            <p>
              Organized a recurrent local <Tag text="meetup" href="https://www.meetup.com/iOS-Peer-Lab-Porto/"/>{" "}
              for iOS Engineers to talk, code and share our knowledge.
              We introduced a lot of new engineers to the iOS world and challenged seasoned engineers with new concepts.
            </p>
          </Item>

          <Item title="Sortify ️⌨" caption="Sep 2018">
            <p>
              A Xcode Source Editor Extension for Sorting Lines.
              <br /><Tag text="Open-sourced" href="https://github.com/FranciscoAmado/Sortify"/>
            </p>
          </Item>

          <Item title="Intro to Vapor 🎥📣" caption="Jul 2018">
            <p>
              Joined <Tag text="David Matellano" href="https://twitter.com/damacri86"/> to give an introductory workshop into Server-side Swift with Vapor at the CocoaHeads Porto <Tag text="meetup" href="https://youtu.be/vzpn7FqOUpI"/>.
            </p>
          </Item>

          <Item title="Timezones 🕔🌍" caption="Jul 2018">
            <p>
              A MacOS Status Bar Application for keeping track of different time
              zones.
              <br /><Tag text="Open-sourced" href="https://github.com/FranciscoAmado/Timezones" />
            </p>
          </Item>

          <Item title="Leaf 🍃" caption="Dec 2016">
            <p>
              A small Extension for Visual Studio for highlighting Leaf files used with Vapor, a framework for Server-Side Swift.
              <br /><Tag text="Open-sourced" href="https://github.com/FranciscoAmado/vscode-html-leaf"/>
            </p>
          </Item>
        </Grid>
      </Layout>
    )
  }
}

export default IndexPage
