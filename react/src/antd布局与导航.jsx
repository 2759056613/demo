import { Row, Col, Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
}
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
}
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
}
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
}
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(50% - 8px)',
  maxWidth: 'calc(50% - 8px)',
}

const col = {
  border: '5px dotted gray',
}
function App() {
  return (
    <div>
      Hello App
      {/* <Row
        gutter={[16, 16]}
        justify="center"
      > */}
      {/* 栅格模式适配响应式开发
        <Col
          xs={12}
          md={8}
        >
          <div style={col}>aaa1</div>
        </Col>
        <Col
          xs={12}
          md={8}
        >
          <div style={col}>aaa2</div>
        </Col>
        <Col
          xs={12}
          md={8}
        >
          <div style={col}>aaa2</div>
        </Col>
      </Row> */}
      <Layout style={layoutStyle}>
        <Sider
          width="25%"
          style={siderStyle}
        >
          Sider
        </Sider>
        <Layout>
          <Header style={headerStyle}>Header</Header>
          <Content style={contentStyle}>Content</Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  )
}
export default App
