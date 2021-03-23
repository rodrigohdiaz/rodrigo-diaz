import React from "react"
import Layout from "../components/layout"
import "../styles/global.scss"
import "../styles/gallery.scss"
import  { Container } from "react-bootstrap"
// import Script from "../../public/static/script"
import toronto from "../images/film35/toronto5.jpg"


export default function Gallery(){
    return(
        <Layout>
            <Container fluid>
                {/* <Script> */}
                <h4 claasName="text">Rodrigo D&iacute;az's photos</h4>
                < h4 className="text film">Film</h4>
                    <p className="text">35mm</p>
                        <div class="gallery-container">
                            <div class="gallery-item" data-index="1">
                            <img src={toronto} alt="Toronto" className="imagen"/>
                            </div>  
                        </div>
                    <p className="text">120mm</p>
                < h4 className="text digital">Digital</h4>
                {/* </Script> */}
            </Container>
        </Layout>
    )
}