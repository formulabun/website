import { React } from "react"
import "semantic-ui-css/semantic.min.css"

import { Container } from "semantic-ui-react"

import Activity from "../components/activity.js"
import { aboutText, detailsText, rulesText, joinText } from "../content.js"
import Page from "../components/headerfooter.js"

const Index = () => (
  <Page text={true}>
    <div id="about">{aboutText}</div>
    <hr />
    <div id="activity">
      <Activity />
    </div>
    <hr />
    <div id="rules">{rulesText}</div>
    <hr />
    <div id="join">{joinText}</div>
    <hr />
    <div id="details">{detailsText}</div>
  </Page>
)

export default Index
