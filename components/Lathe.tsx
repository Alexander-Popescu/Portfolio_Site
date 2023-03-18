import { Card, Col, Text, Row, Button, Link } from "@nextui-org/react";

export const Lathe = () => (
  <a href="/Portfolio_Site/Lathe_page">
  <Card variant="shadow" isHoverable isPressable>
    <Card.Image
      src = "lathe_thumbnail.png"
      objectFit="cover"
      width="100%"
      height={340}
      alt="Project Link"
    />
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bottom: 0,
        zIndex: 1,
        height: 60
      }}
    >
      <Row>
      <Col css={{ textAlign: "left" }}>
        <Text h1 size={20} css={{ letterSpacing: "-0.02em"}} weight="bold">
            CNC Lathe
          </Text>
        </Col>  
        <Col>
          <Row justify="flex-end">
            <Button 
              href="#"
              shadow
              color="gradient"
              bordered
              auto
              >
              View Project
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
  </a>
);