import * as React from "react"
import "../styles/global.scss"
import { Container } from 'react-bootstrap'
import Layout from "../components/layout"
import Media from "../components/media"


export default function Home() {
  return (
        <Layout>
          <Container fluid>
              <h1>Rodrigo D&iacute;az</h1>
          </Container>
          <Media></Media>
        </Layout>
          
          )
}