import './App.css';
import Logo from './components/LogoSide.js'
import HeaderMonth from './components/HeaderMonth.js';
import NumberTable from './components/NumberTable.js';
import PrevButton from './components/PrevButton.js';
import NextButton from './components/NextButton.js';
function App() {

  return (
  <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title text-whidth="1px">Praça da Ciência</title>
  {/* <link href="{% static 'WeekCalendarProps.css' %}" rel="stylesheet"/> */}
  <link rel="stylesheet" href="styles/app.css" />
  <div id="background">
    <div id="week_page">
      <div id="logo_side">
        <Logo />
      </div>
      <div id="week_side">
        <HeaderMonth/>
        {/*Não ta pronto ainda, não conseguir definir uma sequencia de dias da semana para exebir na tela em ordem */}
        <NumberTable/>
        <PrevButton/>
        <NextButton/>
      </div>
      <div id="variable_hours">
        <h2 className="selected_data">Dia da semana, data(dd/mm)</h2>
        <table id="available_times">
          <tbody>
            <tr>
              <td className="available_hours">08:00</td>
              <td className="available_hours">09:30</td>
            </tr>
            <tr>
              <td className="available_hours">13:30</td>
              <td className="available_hours">15:00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="vertical_line" />
    </div>
    <img
      src="..\..\static/IMGs/Prefeitura_de_Vitória.png"
      alt="Prefeitura de Vitória"
      id="vix_city_hall"
    />
  </div>
  </>

  );
}

export default App;