import './styles.css'
import logo_desenho from '../images/logo_desenho.png'
import logo_texto from '../images/logo_texto.png'
import backgroung from '../images/img1.jpg'

export default function Home(){
    return(
        <>
        <div id = "background">
            <div>
                <img src={logo_desenho} alt="Logo" class = "logo_desenho" />
                <img src={logo_texto} alt="Logo" class = "logo_texto" />
                {/* <h1 class = "logo">Logo da praça da ciencia</h1> */}
            </div>
            <div class = "box">
                <div class = "left">
                    <h1 id = "left_box">Pessoa</h1>
                    <h2 class = "button">Agendamento Online</h2>
                </div>
                <div class = "right">
                    <h1 id = "right_box">Escolas, grupos ou instiuições</h1>
                    <h2 class = "button">Agendamento Online</h2>
                </div>
            </div>
        </div>
        </>
    );
}