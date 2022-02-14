import "semantic-ui-css/semantic.min.css"
import Page from "../components/headerfooter.js"
import url from "url"

import { discord } from "../data.js"

import { Image, Header, Container } from "semantic-ui-react"

const MediaPage = (props) => {
  return (
    <Page>
      <Header>
        Here are some videos taken on the formulabun server. Join the discord to
        post your own!
      </Header>
      <Container textAlign="center" fluid>
        <Image.Group style={{ padding: "0em 1em 1em 0em" }}>
          {props.links.map((l) => {
            return <Image key={l.url} src={l.url} />
          })}
        </Image.Group>
      </Container>
    </Page>
  )
}

export default MediaPage

export async function getStaticProps(context) {
  const links = (await discord()).filter(
    (m) => url.parse(m.url).hostname !== "gfycat.com"
  )
  return {
    props: {
      links,
    },
    revalidate: 60, // 1 minute
  }
}
