import './styles.css'
import logo_praca from '../images/logo_praca.png'
import backgroung from '../images/img1.jpg'

export default function Home(){
    return(
        <>
        <div id = "background">
            <div>
                <img src={logo_praca} alt="Logo" class = "logo" />
                {/* <h1 class = "logo">Logo da praça da ciencia</h1> */}
            </div>
            <div class = "box">
                <div class = "left">
                    <h1 id = "left_box">Visitante</h1>
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