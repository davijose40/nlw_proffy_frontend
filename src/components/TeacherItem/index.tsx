import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/21372050?s=60&v=4" alt="Davi José"/>
            <div>
              <strong>Davi José</strong>
              <span>Portugues</span>
            </div>
          </header>
          <p>Apoixonado pela lingua portuguesa, 
            <br/><br/>
            classicos e poemas espero poder mostrar toda beleza da nossa lingua nas nossas aulas</p>
          <footer>
            <p>
              Preço/hora
              <strong>R$ 50,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  );
}

export default TeacherItem;