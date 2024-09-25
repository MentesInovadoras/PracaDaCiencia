import React, { useState } from 'react';

export default function NumberTable() {
    const daysOfWeek = ["Dom.", "Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sab."];
    const currentDate = new Date(); 

    const [selectedDayIndex, setSelectedDayIndex] = useState(0); // Estado para o dia selecionado

    function getDayOfWeek(date) {
        if (!(date instanceof Date)) {
            throw new Error("O argumento deve ser um objeto Date.");
        }
        const day = date.getDay();
        return daysOfWeek[day];
    }

    const days = Array.from({ length: 7 }, (_, i) => {
        const nextDate = new Date(currentDate);
        nextDate.setDate(currentDate.getDate() + i);
        return {
            date: nextDate,
            dayOfWeek: getDayOfWeek(nextDate),
            dayOfMonth: nextDate.getDate()
        };
    });

    const handleDayClick = (index) => {
        setSelectedDayIndex(index); /* Atualiza o índice do dia selecionado*/
        console.log("data atual: "+currentDate);
        console.log("Index do dia na semana: "+currentDate.getDay());
        console.log("Dia selecionado: ", days[index].dayOfMonth); /* Mostra o dia do mês selecionado*/
    };

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        {days.map((d, index) => (
                            <th key={index}>{d.dayOfWeek}</th>
                        ))}
                    </tr>
                    <tr>
                        {days.map((d, index) => (
                            <td 
                                key={index} 
                                className={index === selectedDayIndex ? "selected_day" : ""}
                                onClick={() => handleDayClick(index)} // Adiciona o manipulador de clique
                            >
                                {d.dayOfMonth}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
