import { Container, Button, Menu, Grid, Header, Icon } from "semantic-ui-react";
import Image from "next/image";

const menuItems = [
  { name: "about", url: "/#about" },
  { name: "activity", url: "/#activity" },
  { name: "media", url: "/media" },
  { name: "maps", url: "/maps" },
  { name: "rules", url: "/#rules" },
  { name: "join now", url: "/#join" },
  { name: "details", url: "/#details" },
];

const PageHeader = () => {
  return (
    <div style={{ backgroundColor: "#ffe9e0" }}>
      <Image src="/images/fastbun.png" width={1015} height={293} />
      <div style={{ padding: "1em 1em 0em 1em" }}>
        <Grid>
          {" "}
          <Grid.Row columns={2}>
            <Grid.Column>
              <Header as="h1" style={{ marginBottom: 0 }}>
                {" "}
                Formula Bun{" "}
              </Header>
              <Header as="h3" style={{ margin: "0em 0 1em 0" }}>
                {" "}
                Just a vanilla srb2kart server{" "}
              </Header>
            </Grid.Column>
            <Grid.Column floated="right">
              <Button
                as="a"
                href="https://discord.formulabun.club"
                icon
                floated="right"
                color="blue"
              >
                {" "}
                <Icon name="discord" /> DISCORD{" "}
              </Button>
              <Button
                as="a"
                href="srb2kart://ip/formulabun.club"
                icon
                floated="right"
                color="pink"
              >
                {" "}
                <Icon name="external" /> Join with Moe!{" "}
              </Button>
            </Grid.Column>
          </Grid.Row>{" "}
        </Grid>
        <Menu text stackable style={{ margin: "0em" }}>
          {menuItems.map((m) => (
            <Menu.Item key={m.name} name={m.name} href={m.url} />
          ))}
        </Menu>
      </div>
    </div>
  );
};

const PageFooter = () => {
  return (
    <div style={{ backgroundColor: "#ffe9e0", padding: "1em" }}>
      <Grid>
        {" "}
        <Grid.Row columns={10}>
          <Grid.Column width={3}>
            {" "}
            <Image src="/images/bun.png" width={300} height={300} />{" "}
          </Grid.Column>
          <Grid.Column width={4} style={{ fontSize: "medium" }}>
            <Icon.Group>
              <Icon name="discord" />{" "}
              <a href="http://discord.gg/sxFQHxjSFZ">formulabun server</a>{" "}
            </Icon.Group>
            <Icon.Group>
              <Icon name="discord" /> Fl_GUI#5136
            </Icon.Group>
            <Icon.Group>
              <Icon name="mail" />
              <a href="mailto:formulabun@gmail.com">formulabun@gmail.com</a>
            </Icon.Group>
            <Icon.Group>
              <Icon name="github" />
              <a href="https://www.github.com/formulabun">
                github.com/formulabun
              </a>
            </Icon.Group>
          </Grid.Column>
          <Grid.Column width={6} floated="right">
            <iframe
              src="https://discordapp.com/widget?id=915254659223023626&theme=dark"
              width="350"
              height="300"
              allowtransparency="true"
              frameBorder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          </Grid.Column>
        </Grid.Row>{" "}
      </Grid>
    </div>
  );
};

const Page = ({ text, children }) => (
  <Container style={{ margin: "0em 6em 0em 6em", width: 1015 }}>
    <PageHeader />
    <Container
      text={text || false}
      style={{ margin: "1em 0 1em 0", fontSize: "large" }}
    >
      {children}
    </Container>
    <PageFooter />
  </Container>
);

export default Page;
export { Page, PageHeader, PageFooter };
