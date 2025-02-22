import React from "react";
import { Grid, Box, Button, Typography, TextField, Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./SobreNos.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function SobreNos() {
  return (
    <>
      <Grid container spacing={3} columns={12} className="sobrenos-container">
        <Grid item xs={12} className="title-container">
          <hr></hr>
          <Typography variant="h4" component="h1" className="title-sobrenos">
            Sobre nós
          </Typography>
          <hr></hr>
        </Grid>
        <Box className="card-fulano">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQGxSIvhVXB69A/profile-displayphoto-shrink_800_800/0/1659149033289?e=1665014400&v=beta&t=6SEDZLQ_kRk2sjiuhbS3bDe6U4lwYl6sNpXtaElSISY"
            className="avatar"
          />
          <Box className="card-fulano-text">
            <Button variant="text" className="botao-nav">
              Diego
            </Button>
            <Box className="parte-texto-icones">
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-sobrenos"
              >Sou estudante do Curso Técnico em Informática, no Senac-Campinas e
                do Bootcamp de Desenvolvimento WEB - JAVA na Generation Brasil.
                Minhas áreas de interesse são: Desenvolvimento WEB e Redes/Infraestrutura.
                Me considero uma pessoa curiosa, comunicativa e adoro aprender novas habilidades.
              </Typography>
              <Box className="redessociais">
                <a href="https://www.linkedin.com/in/ogeidc/overlay/contact-info/" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <InstagramIcon className="footer-icon2 redes-icon" />
                </a>
                <a href="https://github.com/ogeidc" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <GitHubIcon className="footer-icon2 redes-icon" />
                </a>
                <a href="https://www.linkedin.com/in/ogeidc/" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <LinkedInIcon className="footer-icon2 redes-icon" />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="card-fulano2">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEQJegmzXihzw/profile-displayphoto-shrink_800_800/0/1647425416180?e=1665014400&v=beta&t=1FtjDEhGOFIKr2kQ_oomKK51NvH88Fuw_U4gqFpYD7I"
            alt="avatar"
            className="avatar"
          />
          <Box className="card-fulano-text">
            <Button variant="text" className="botao-nav">
              Felipe
            </Button>
            <Box className="parte-texto-icones">
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-sobrenos">
                Desenvolvedor de software trainee, cursando o 4 semestre de gestão da
                tecnologia da informação na Fatec de Franco da Rocha.
              </Typography>
              <Box className="redessociais">
                <a href="https://www.linkedin.com/in/felipesilveirasp/overlay/contact-info/" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <InstagramIcon className="footer-icon redes-icon" />
                </a>
                <a href="https://github.com/felipegaldy" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <GitHubIcon className="footer-icon redes-icon" />
                </a>
                <a href="https://www.linkedin.com/in/felipesilveirasp/" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <LinkedInIcon className="footer-icon redes-icon" />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="card-fulano">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEMjUfTMFt9pw/profile-displayphoto-shrink_800_800/0/1566680216478?e=1665014400&v=beta&t=ji96xADiYbVhk1cHfe4vsDHVu2YHf581XGOIz4Hg2Rk"
            alt="avatar"
            className="avatar"
          />
          <Box className="card-fulano-text">
            <Button variant="text" className="botao-nav">
              Hericlis
            </Button>
            <Box className="parte-texto-icones">
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-sobrenos"
              >Estudante Desenvolvimento de Sistemas atualmente buscando ingressar na
                área de tecnologia da informação. Tenho conhecimentos em ferramentas de
                desenvolvimento front-end, lógica de programação e desenvolvimento back-end.
              </Typography>
              <Box className="redessociais">
                <a href="https://www.linkedin.com/in/hericlis-ventura/overlay/contact-info/" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <InstagramIcon className="footer-icon redes-icon" />
                </a>
                <a href="https://github.com/HericlisVO" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <GitHubIcon className="footer-icon redes-icon" />
                </a>
                <a href="https://www.linkedin.com/in/hericlis-ventura/" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <LinkedInIcon className="footer-icon redes-icon" />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>


        <Box className="card-fulano2">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQHNu4WbuKYSDw/profile-displayphoto-shrink_800_800/0/1658838501880?e=1665014400&v=beta&t=YbLPVFJjH0dwqqBceA_yFtrxaNifoK1J0rZfmtNnppw"
            alt="avatar"
            className="avatar"
          />
          <Box className="card-fulano-text">
            <Button variant="text" className="botao-nav">
              Isabella
            </Button>
            <Box className="parte-texto-icones">
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-sobrenos">
                Engenheira Cartógrafa e Agrimensora pela UNESP, Desenvolvedora Jr. pela Generation
                Brasil, estudante de Análise e Desenvolvimento de Sistemas e mestranda na area de
                agricultura de precisão na UNICAMP
              </Typography>
              <Box className="redessociais">
                <a href="https://www.linkedin.com/in/isabella-alves-da-cunha-a110011b9/overlay/contact-info/" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <InstagramIcon className="footer-icon redes-icon" />
                </a>
                <a href="https://github.com/isaacunha" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <GitHubIcon className="footer-icon redes-icon" />
                </a>
                <a href="https://www.linkedin.com/in/isabella-alves-da-cunha-a110011b9/" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <LinkedInIcon className="footer-icon redes-icon" />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="card-fulano">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEh8Wyx6WI7qA/profile-displayphoto-shrink_800_800/0/1654045375745?e=1665014400&v=beta&t=LIgyK4SzVKo-RrVTcCtJhiGwzyLXKGU2F423L8jvzMU"
            alt="avatar"
            className="avatar"
          />
          <Box className="card-fulano-text">
            <Button variant="text" className="botao-nav">
              Janis
            </Button>
            <Box className="parte-texto-icones">
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-sobrenos"
              >
                Estudante em Desenvolvimento Java Full Stack | Design Gráfico
              </Typography>
              <Box className="redessociais">
                <a href="https://www.linkedin.com/in/janis-silva/overlay/contact-info/" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <InstagramIcon className="footer-icon redes-icon" />
                </a>
                <a href="https://github.com/JanisSilva" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <GitHubIcon className="footer-icon redes-icon" />
                </a>
                <a href="https://www.linkedin.com/in/janis-silva/" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <LinkedInIcon className="footer-icon redes-icon" />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>


        <Box className="card-fulano2">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEmsCWHIoFQrg/profile-displayphoto-shrink_800_800/0/1625076494079?e=1665014400&v=beta&t=o7tJKHED4Sga9s7Cwj01D4d9l999TXgMbXANQOFkweA"
            alt="avatar"
            className="avatar"
          />
          <Box className="card-fulano-text">
            <Button variant="text" className="botao-nav">
              Matheus
            </Button>
            <Box className="parte-texto-icones">
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-sobrenos">
                Desenvolvedor Java Web. Formado em Analise e desenvolvimento de sistemas
              </Typography>
              <Box className="redessociais">
                <a href="https://www.linkedin.com/in/matheuslsv/overlay/contact-info/" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <InstagramIcon className="footer-icon redes-icon" />
                </a>
                <a href="https://github.com/Matheuslsv" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <GitHubIcon className="footer-icon redes-icon" />
                </a>
                <a href="https://www.linkedin.com/in/matheuslsv/" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <LinkedInIcon className="footer-icon redes-icon" />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="card-fulano">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQEAI5hDRB2W-Q/profile-displayphoto-shrink_800_800/0/1637800682157?e=1665014400&v=beta&t=ZiZF7QO4IEYYV1xDYnSnKIPqEZpjjamj343LZPrPw5o"
            alt="avatar"
            className="avatar"
          />
          <Box className="card-fulano-text">
            <Button variant="text" className="botao-nav">
              Rosa
            </Button>
            <Box className="parte-texto-icones">
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-sobrenos"
              >
                Formada em Administração de Empresas, com paixão em tecnologia, trilhando uma nova jornada
                como desenvolvedora fullstack Java, terminando o Bootcamp na Generation Brasil e
                acredito que a educação transforma vida.
              </Typography>
              <Box className="redessociais">
                <a href="https://www.linkedin.com/in/rosabrito/overlay/contact-info/" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <InstagramIcon className="footer-icon redes-icon" />
                </a>
                <a href="https://github.com/Rosahumbe" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <GitHubIcon className="footer-icon redes-icon" />
                </a>
                <a href="https://www.linkedin.com/in/rosabrito/" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <LinkedInIcon className="footer-icon redes-icon" />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>

      </Grid>
    </>
  );
}

export default SobreNos;