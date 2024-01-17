import { Flex, Typography, Button, Row, Col } from "antd"

const { Title } = Typography

const HeaderComp = () => {
  return(
    <Row>
      <Col md={24}>
        <Flex align="center" justify="space-between">
        <Title level={2}>Destinatarios</Title>
        <Button>Nuevo Destinatario</Button>
      </Flex>
      </Col>
    </Row>
  )
}

export default HeaderComp