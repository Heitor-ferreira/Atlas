import "./Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    return (
        <div className="footer-conteiner">
            <div className="footer-sections">
                <div className="footer-section">
                    <h4>Sobre</h4>
                    <p> Bem-vindo ao nosso Atlas dos Ossos do Corpo Humano! Este projeto foi desenvolvido com muito carinho pela turma 4INF1M
                        para o evento IFRNXP. Nosso objetivo é proporcionar uma compreensão básica da anatomia humana,</p>
                </div>
                <div className="footer-section">
                    <h4>Referências</h4>
                    <p>MOORE, Keith L; DALLEY, Arthur F; AGUR, Anne M.R. Moore Anatomia orientada para a clínica. 7. ed. Rio de Janeiro: Guanabara Koogan, 2014.</p>
                </div>
                <div className="footer-section">
                    <h4>Agradecimentos</h4>
                    <p>Gostaríamos de expressar nossa profunda gratidão ao campus Macau por proporcionar um ambiente de aprendizado tão inspirador.</p>
                    <p>Um agradecimento especial ao Professor Guilherme Leal pela sua orientação e apoio incondicional durante nossa jornada acadêmica.</p>
                </div>
                <div class="footer-section">
                    <h4>Redes Sociais</h4>
                    <div class="social-icons">
                        <a href="https://www.instagram.com/turrma.top/">4INF1M - TOP <InstagramIcon  sx={{ fontSize: 20 }} /></a>
                        <a href="https://www.instagram.com/ifrn.macau/">IFRN MACAU <InstagramIcon  sx={{ fontSize: 20 }} /></a>
                        <a href="https://www.instagram.com/guilherme.leal.s/">GUILHRME LEAL <InstagramIcon  sx={{ fontSize: 20 }} /></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Atlas dos Ossos. Todos os direitos reservados.</p>
            </div>
        </div>
    );
}