<br />
<div align="center">
  <a href="https://github.com/inicioMentesInovadoras/PracaDaCiencia">
    <img src="readme_files/images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Sistema Web Praça da Ciência</h3>

  <p align="center">
    Desenvolvimento de um sistema de agendamentos para a instituição Praça da Ciência (Vitória-ES) 
    <br />
    <br />
    <br />
    <a href="https://sites.google.com/edu.vitoria.es.gov.br/praca-da-ciencia/agendamento">Visite a Praça da Ciência</a>
    ·
    <a href="https://www.instagram.com/ciencia.vix/">Instagram da Praça da Ciência</a>
    <br/>
    <a href="https://github.com/inicioMentesInovadoras/PracaDaCiencia/issues/new?labels=bug&template=bug-report---.md">Reportar Bug</a>
    ·
    <a href="https://github.com/inicioMentesInovadoras/PracaDaCiencia/issues/new?labels=enhancement&template=feature-request---.md">Sugerir Melhoria</a>
  </p>
</div>


<div id="início">
<details>
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o Projeto</a>
      <ul>
        <li><a href="#desenvolvido-com">Desenvolvido Com</a></li>
      </ul>
    </li>
    <li>
      <a href="#utilizando-o-código">Utilizando o Código</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-Requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#licença">Licença</a></li>
    <li><a href="#desenvolvedores">Desenvolvedores</a></li>
  </ol>
</details>
</div>



## Sobre o Projeto

![Praca da Ciencia][praca-da-ciencia]

A Praça da Ciência é um ponto turístico de muito prestígio na região metropolitana de Vitória, Espírito Santo. Nela, crianças e adultos podem aprender mais sobre física, astronomia, biologia, história e muito mais totalmente de graça.

Apesar da bela ação praticada por eles, o local não possui um time de Tecnologia da Informação dedicado a solucionar as suas necessidades. Com isso em mente nós, estudantes do Instituto Federal de Educação, Ciências e Tecnologia do Espírito Santo (Ifes), decidimos desenvolver um sistema de agendamentos para auxiliar o ponto turístico.

<p align="right">(<a href="LEIA-ME.md#início">Voltar ao Início</a>)</p>


### Desenvolvido Com

* [![Python][Python.py]][Python-url]
* [![Django][Django.py]][Django-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]

<p align="right">(<a href="LEIA-ME.md#início">Voltar ao Início</a>)</p>



<!-- GETTING STARTED -->
## Utilizando o Código

Para utilizar o trabalho desenvolvido localmente, siga as instruções abaixo

### Pré-Requisitos
Python 3.11

### Instalação
1. Clone o Repositório
   ```sh
   git clone https://github.com/MentesInovadoras/PracaDaCiencia.git
   ```
2. Crie uma máquina virtual do python e inicie ela
   ```sh
   python -m venv my_venv_folder

   my_venv_folder\Scripts\activate
   ```
3. Instale os requirements.txt
   ```js
   pip install <- requirements.txt
   ```
4. Preencha o arquivo .env com as informações necessárias

5. Caminhe com o comando `cd` até a pasta `modules\django\site\` e execute o seguinte comando:
   ```js
   python manage.py runserver 
   ```

6. Acesse a plicação pelo endereço de IP fornecido

<p align="right">(<a href="LEIA-ME.md#início">Voltar ao Início</a>)</p>



## Licença
Distribuído sob a GNU GENERAL PUBLIC LICENSE. Veja <a href="LICENSE.txt">`LICENSE`</a> para mais informação.

<p align="right">(<a href="LEIA-ME.md#início">Voltar ao Início</a>)</p>



## Desenvolvedores
### Bruno da Fonseca Chevitarese

<details>
  <summary>Contato</summary> 
  <img src="readme_files/images/gmail.png" width="16">
  chevitarese.bruno@gmail.com 
  
  <img src="readme_files/images/github.png" width="32">
  <a href="https://github.com/chevitaresebruno"> chevitaresebruno </a>

</details>

### Caio César Coronel

<details>
  <summary>Contato</summary>
    <ul>
      <li>
        Email: chevitarese.bruno@gmail.com
      </li>
      <li>
      Github: <a href="https://github.com/chevitaresebruno"> chevitaresebruno </a>
      </li>
    </ul>
</details>

### Luiz Felipe Elizeta

<details>
  <summary>Contato</summary>
    <ul>
      <li>
        Email: chevitarese.bruno@gmail.com
      </li>
      <li>
      Github: <a href="https://github.com/chevitaresebruno"> chevitaresebruno </a>
      </li>
    </ul>
</details>

<p align="right">(<a href="LEIA-ME.md#início">Voltar ao Início</a>)</p>


[praca-da-ciencia]: readme_files/images/praca_da_ciencia.jpg
[gmail]: reademe_files/images/gmail.png

[Python.py]: https://img.shields.io/badge/Python-000000?style=for-the-badge&logo=python&logoColor=white
[Python-url]: https://www.python.org/


[Django.py]: https://img.shields.io/badge/Django-000000?style=for-the-badge&logo=Django&logoColor=white
[Django-url]: https://www.djangoproject.com/

[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com

