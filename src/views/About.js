import React from 'react';
import Col from "react-bootstrap/Col";
import NavBar from "../components/NavBar";
import Image from 'react-bootstrap/Image'
import ContentContainer from '../components/ContentContainer';
import Row from 'react-bootstrap/Row';
import MemberCard from '../components/MemberCard'
import Footer from '../components/Footer';

class About extends React.Component {
    render() {
      return (
        <div>
            <NavBar></NavBar>
           <ContentContainer color='white'>
                <Col lg={8}>
                    <p>
                        O Laboratório de Farmacognosia da Universidade de Brasília construiu um "Banco de Extratos de Plantas do bioma Cerrado", importante biblioteca concebida com o saudoso botânico Professor José Elias de Paula/UnB, profundo conhecedor do Cerrado, que tinha obsessão em lutar contra o mosquito Aedes aegypti e seus perigos para a saúde humana. Nossa biblioteca possui extratos e substâncias de plantas e de fungos endofíticos, cuja atividade de acesso a esse patrimônio genético foi autorizada pelo CGEn/IBAMA. O nosso grupo de pesquisa Biofármacos, registrado no CNPq desde 2002, vem investigando a atividade desse acervo em diferentes modelos biológicos. Porém, diante da epidemia do Zika vírus, em 2015, e dos casos de crianças com microcefalia, interrompemos as demais atividades e decidimos reunir pesquisadores do Brasil e dos países parceiros em um esforço único de trabalhar para o controle do vetor das arboviroses. Ter o “Banco de Extratos de Plantas do bioma Cerrado” é primordial para otimizar o estudo dos metabólitos secundários e obter substâncias para protótipos de produtos para o controle do mosquito Aedes aegypti.
                    </p>
                </Col>
                <Col lg={4}>
                    <Image src={require("../assets/images/placeholder.png")} style={{height: '300px'}} fluid/>
                </Col>
           </ContentContainer>
            <ContentContainer color='var(--bs-blue)'>
                <h2 style={{textAlign: "center", width:"100%"}}>Members</h2>
                <Col lg={3}>
                    <Row>
                        <MemberCard></MemberCard>
                    </Row>
                    <Row>
                        <MemberCard></MemberCard>
                    </Row>
                </Col>
                <Col lg={3}>
                    <Row>
                        <MemberCard></MemberCard>
                    </Row>
                    <Row>
                        <MemberCard></MemberCard>
                    </Row>
                </Col>
                <Col lg={3}>
                    <Row>
                        <MemberCard></MemberCard>
                    </Row>
                    <Row>
                        <MemberCard></MemberCard>
                    </Row>
                </Col>
                <Col lg={3}>
                    <Row>
                        <MemberCard></MemberCard>
                    </Row>
                    <Row>
                        <MemberCard></MemberCard>
                    </Row>
                </Col>
            </ContentContainer>

            <ContentContainer color='white'>
                <h2 style={{textAlign: "center", width:"100%"}}>Collaborators</h2>
                <Col lg={3}>
                    <Row>
                        <MemberCard></MemberCard>
                    </Row>
                </Col>
                <Col lg={3}>
                    <Row>
                        <MemberCard></MemberCard>
                    </Row>
                </Col>
                <Col lg={3}>
                    <Row>
                        <MemberCard></MemberCard>
                    </Row>
                </Col>
                <Col lg={3}>
                    <Row>
                        <MemberCard></MemberCard>
                    </Row>
                </Col>
            </ContentContainer>

            <ContentContainer color='var(--bs-blue)'>
                <h2 style={{textAlign: "center", width:"100%"}}>Partners</h2>
                <Row>
                </Row>
            </ContentContainer>
            <Footer></Footer>
        </div>
      )
    }
}


export default About;
