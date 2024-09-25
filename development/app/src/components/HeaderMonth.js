export default function HeaderMonth(){
    const current_date = new Date(); 
    const ptBRDateFormater = new Intl.DateTimeFormat('pt-BR', {
        month: 'long',
        year:  'numeric',
    });
    return(
    <header>
          <h2 className="main_title"> {ptBRDateFormater.format(current_date)}</h2>
    </header>
    );
}