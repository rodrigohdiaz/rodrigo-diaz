import React from "react"
import Layout from "../components/layout"
import "../styles/gallery.scss"
import  { Container } from "react-bootstrap"

export default function Gallery(){
    return(
        <Layout>
            <Container fluid>
                <h4 claasName="text">Rodrigo D&iacute;az's photos</h4>
                < h4 className="text film">Film</h4>
                < h4 className="text digital">Digital</h4>
            </Container>
        </Layout>
    )
}