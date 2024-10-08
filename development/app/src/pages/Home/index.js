import React from "react"
import NumberTable from '../../components/NumberTable'
import AvailableTimes from '../../components/AvailableTimes'           
import LogoSide from '../../components/LogoSide'
import NextButton from '../../components/NextButton' 
import PrevButton from '../../components/PrevButton'
import HeaderMonth from '../../components/HeaderMonth'
import WeekDay from '../../components/WeekDay'

import {Link} from 'react-router-dom';

const Page = () => {
    return (<><meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title text-whidth="1px">Praça da Ciência</title>
        <link rel="stylesheet" href="styles/app.css" />
        <div id="background">
            <div id="week_page">
                <div id="logo_side">
                    <LogoSide/>
                </div>
                <div id="week_side">
                    <HeaderMonth/>
                    <NumberTable/>
                    <PrevButton/>
                    <NextButton/>
                </div>
                <div id = "week_day_text">
                    <WeekDay/>
                </div>
                <div id="variable_hours">
                    <AvailableTimes/>
                </div>
                <div id="vertical_line" />
                </div>
                <img
                    src="..\..\static/IMGs/Prefeitura_de_Vitória.png"
                    alt="Prefeitura de Vitória"
                    id="vix_city_hall"
                />
            </div>
        </>)
}

export default Page