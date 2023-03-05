import React from 'react';

const UserForm = () => {
    return (
    <div>
        <div className="transformacao-form-control">
            <label htmlFor="name">Nome e Sobrenome: </label>
            <input type="text" name="nomeSobre" id='nomeSobre' maxLength="20" placeholder='Digite aqui' required/>
        </div>
        <div className="transformacao-form-control">
            <label htmlFor="name">Nome Social: </label>
            <input type="text" name="nameSocial" id='nameSocial' placeholder='Digite aqui' required/>
        </div>
        <div className="transformacao-form-control">
            <label htmlFor="name">CPF: </label>
            <input type="text" name="cpf" id='campo_cpf' size='11'maxLength='11' placeholder='Digite seu CPF aqui' required/>
        </div>
        <div className="transformacao-form-control">
            <label htmlFor="name">Idade: </label>
            <input type="number" name="quantidade" id='idade' min="15" max="99" required/>
        </div>
    </div>
    );
}

export default UserForm;
