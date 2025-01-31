import React from "react"
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

        <h4 className="uppercase tracking-[0.2rem] mt-[60px]">Experience</h4>
        <Grid columns={3} className="gap-6">
          <div className="w-full my-5 text-center">
            <h5 className="bg-[#eee] text-center rounded p-2 uppercase font-semibold text-sm tracking-wider mb-0">
              Anchorage Digital 🪙⚓️
            </h5>
            <div className="text-left font-mono text-sm">Software Engineer</div>
            <div className="text-left font-mono text-sm">Apr 2022 - Now</div>
            <div className="text-left mt-2.5 text-base leading-relaxed">
              At{""}
              <strong>
                <Tag
                  text="Anchorage Digital"
                  href="https://anchorage.com/"
                  color="#000000"
                  padding="0"
                />
              </strong>, the first USA federally chartered crypto bank, I'm working as an individual contributor developing software, maintaining it's  infrastructure, helping on recruiting and on-call.
            </div>
          </div>

          <div className="w-full my-5 text-center">
            <h5 className="bg-[#eee] text-center rounded p-2 uppercase font-semibold text-sm tracking-wider mb-0">
              Farfetch 👗👠
            </h5>
            <div className="text-left font-mono text-sm">iOS Engineer</div>
            <div className="text-left font-mono text-sm">Jun 2017 - April 2022</div>
            <div className="text-left mt-2.5 text-base leading-relaxed">
              At{" "}
              <strong>
                <Tag
                  text="Farfetch"
                  href="https://farfetch.com"
                  color="#fd4f57"
                  padding="0"
                />
              </strong>
              , an e-commerce platform for the world's greatest selection of luxury, I've
              maintained and developed new features for the{" "}
              <Tag
                text="Discover"
                href="https://appstore.com/farfetch"
                background="#fd4f57"
                color="white"
              />{" "}
              iOS application.
            </div>
          </div>

          <div className="w-full my-5 text-center">
            <h5 className="bg-[#eee] text-center rounded p-2 uppercase font-semibold text-sm tracking-wider mb-0">
              Finta ⚽️📷
            </h5>
            <div className="text-left font-mono text-sm">iOS Engineer</div>
            <div className="text-left font-mono text-sm">Jun 2016 - Jun 2017</div>
            <div className="text-left mt-2.5 text-base leading-relaxed">
              At{" "}
              <strong>
                <Tag
                  text="Pixelmatters"
                  href="https://www.pixelmatters.com/"
                  color="#FF695C"
                  padding="0"
                />
              </strong>
              , I was part of{" "}
              <Tag
                text="Finta"
                href="https://appsto.re/pt/GEiO9.i"
                background="#00E582"
              />
              , the first Portuguese Social app for Football fans. I maintained and
              developed new features for the iOS app and helped with the
              kickstart of the Android{" "}
              <Tag
                text="Beta"
                href="https://goo.gl/JRGfHg"
                background="#00E582"
              />{" "}
              version.
            </div>
          </div>

          <div className="w-full my-5 text-center">
            <h5 className="bg-[#eee] text-center rounded p-2 uppercase font-semibold text-sm tracking-wider mb-0">
              Jovago ✈️🏢
            </h5>
            <div className="text-left font-mono text-sm">Junior iOS Engineer</div>
            <div className="text-left font-mono text-sm">Sep 2015 - Mar 2016</div>
            <div className="text-left mt-2.5 text-base leading-relaxed">
              Through my time at{" "}
              <strong>
                <Tag
                  text="Porto Tech Center"
                  href="https://pt.linkedin.com/company/porto-tech-center"
                  color="#F68B1E"
                  padding="0"
                />
              </strong>
              , I got to build{" "}
              <Tag
                text="Jovago"
                href="https://pt.linkedin.com/company/porto-tech-center"
                background="#2A72E8"
              />
              's iOS App, from the ground up to the App Store Release. An App for
              booking Hotels all over the world.
            </div>
          </div>
        </Grid>

        <h4 className="uppercase tracking-[0.2rem] mt-[60px]">Projects</h4>
        <Grid columns={3} className="gap-6">
          <div className="w-full my-5 text-center">
            <h5 className="bg-[#eee] text-center rounded p-2 uppercase font-semibold text-sm tracking-wider mb-0">
              One Swift to Rule them all 🎥📣
            </h5>
            <div className="text-left font-mono text-sm">Dec 2022</div>
            <div className="text-left mt-2.5 text-base leading-relaxed">
              Presented at an{" "}
              <Tag
                text="Infraspeak"
                href="https://www.linkedin.com/showcase/inside-infraspeak/"
                background="#00aced"
              />
              's event. Applying Swift to
              iOS, Backend, Frontend, GraphQL and the Developer Experience
              joining both worlds, this was a good moment to test
              the tool's constraints.{" "}
              <Tag
                text="Streamed"
                href="https://www.linkedin.com/events/speak-out-mobilesdevs-kotlinpla7008850125951254529/theater/"
                background="#36454f"
              />{" "}
              on LinkedIn 😅.
            </div>
          </div>

          <div className="w-full my-5 text-center">
            <h5 className="bg-[#eee] text-center rounded p-2 uppercase font-semibold text-sm tracking-wider mb-0">
              HouseHunter Telegram 📱🏡
            </h5>
            <div className="text-left font-mono text-sm">March 2020</div>
            <div className="text-left mt-2.5 text-base leading-relaxed">
              During my house hunting quest, I built a{" "}
              <Tag
                text="Telegram Bot"
                href="https://github.com/FranciscoAmado/househunter-vapor"
                background="#36454f"
              />{" "}
              with a Swift{" "}
              <Tag
                text="Vapor"
                href="http://vapor.codes"
                background="#92A8CF"
              />{" "}
              Backend, to search house renting websites for me.
            </div>
          </div>

          <div className="w-full my-5 text-center">
            <h5 className="bg-[#eee] text-center rounded p-2 uppercase font-semibold text-sm tracking-wider mb-0">
              OpenPeeps in Framer X ✍🏻👨🏻
            </h5>
            <div className="text-left font-mono text-sm">Fev 2020</div>
            <div className="text-left mt-2.5 text-base leading-relaxed">
              Built a TypeScript{" "}
              <Tag
                text="Framer X Component"
                href="https://github.com/FranciscoAmado/OpenPeeps.framerfx"
                background="#36454f"
              />{" "}
              inspired by the{" "}
              <Tag
                text="Open Peeps"
                href="https://www.openpeeps.com/"
                background="#000"
              />{" "}
              hand-drawn illustration library.
            </div>
          </div>

          <div className="w-full my-5 text-center">
            <h5 className="bg-[#eee] text-center rounded p-2 uppercase font-semibold text-sm tracking-wider mb-0">
              iOS Peer Lab Porto ️☕⌨
            </h5>
            <div className="text-left font-mono text-sm">2018 - 2019</div>
            <div className="text-left mt-2.5 text-base leading-relaxed">
              Organized a recurrent{" "}
              <Tag
                text="Local Meetup"
                href="https://www.meetup.com/iOS-Peer-Lab-Porto/"
                background="#f65858"
              />{" "}
              for iOS Engineers to talk, code and share our knowledge.
              We introduced a lot of new engineers to the iOS world and challenged seasoned engineers with new concepts.
            </div>
          </div>

          <div className="w-full my-5 text-center">
            <h5 className="bg-[#eee] text-center rounded p-2 uppercase font-semibold text-sm tracking-wider mb-0">
              Sortify ️⌨
            </h5>
            <div className="text-left font-mono text-sm">Sep 2018</div>
            <div className="text-left mt-2.5 text-base leading-relaxed">
              A Xcode Source Editor Extension for Sorting Lines.
              Open-sourced{" "}
              <Tag
                text="here"
                href="https://github.com/FranciscoAmado/Sortify"
                background="#36454f"
              />
              .
            </div>
          </div>

          <div className="w-full my-5 text-center">
            <h5 className="bg-[#eee] text-center rounded p-2 uppercase font-semibold text-sm tracking-wider mb-0">
              Intro to Vapor 🎥📣
            </h5>
            <div className="text-left font-mono text-sm">Jul 2018</div>
            <div className="text-left mt-2.5 text-base leading-relaxed">
              Joined{" "}
              <strong>
                <Tag
                  text="David Matellano"
                  href="https://twitter.com/damacri86"
                  color="#00aced"
                  padding="0"
                />
              </strong>{" "}
              to give an introductory workshop into Server-side Swift with{" "}
              <Tag
                text="Vapor"
                href="http://vapor.codes"
                background="#92A8CF"
              />{" "}
              at the{" "}
              <Tag
                text="CocoaHeads Porto"
                href="https://twitter.com/cocoaheadsporto"
                background="#00aced"
              />{" "}
              meetup.
              It was also{" "}
              <Tag
                text="recorded"
                href="https://youtu.be/vzpn7FqOUpI"
                background="#36454f"
              />{" "}
              😅.
            </div>
          </div>

          <div className="w-full my-5 text-center">
            <h5 className="bg-[#eee] text-center rounded p-2 uppercase font-semibold text-sm tracking-wider mb-0">
              Timezones 🕔🌍
            </h5>
            <div className="text-left font-mono text-sm">Jul 2018</div>
            <div className="text-left mt-2.5 text-base leading-relaxed">
              A MacOS Status Bar Application for keeping track of different time
              zones.
              <br />
              Open-sourced{" "}
              <Tag
                text="here"
                href="https://github.com/FranciscoAmado/Timezones"
                background="#36454f"
              />
              .
            </div>
          </div>

          <div className="w-full my-5 text-center">
            <h5 className="bg-[#eee] text-center rounded p-2 uppercase font-semibold text-sm tracking-wider mb-0">
              Leaf 🍃
            </h5>
            <div className="text-left font-mono text-sm">Dec 2016</div>
            <div className="text-left mt-2.5 text-base leading-relaxed">
              A small Extension for Visual Studio for highlighting{" "}
              <Tag
                text="Leaf"
                href="https://github.com/vapor/leaf"
                background="#8BC52B"
              />{" "}
              files used with{" "}
              <Tag
                text="Vapor"
                href="http://vapor.codes"
                background="#92A8CF"
              />
              , a framework for Server-Side Swift.
              <br />
              Open-sourced{" "}
              <Tag
                text="here"
                href="https://github.com/FranciscoAmado/vscode-html-leaf"
                background="#36454f"
              />
              .
            </div>
          </div>
        </Grid>
      </Layout>
    )
  }
}

export default IndexPage
