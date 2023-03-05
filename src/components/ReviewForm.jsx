import React from 'react';

const ReviewForm = () => {
    return (
    <div>
        <div className="transformacao-form-control">
            <label htmlFor="email">E-mail: </label>
            <input type="email" name="email" id='email' size="40" placeholder='seuemail@email.com' required/>
        </div>
        <div className="transformacao-form-control">
        <label htmlFor="contato">Contato: </label>
            <label htmlFor="codigo">DDD </label>
            <input type="text" name="codigo_area" id='DDD' size="2" maxLength="2" placeholder='xx' required/> 
            <label htmlFor="celular">Celular </label>
            <input type="text" name="number" id='celular' size="9" maxLength="9" placeholder='xxxxxxxxx' required/>
        </div>
        <div className= "transformacao-form-control">
            <label htmlFor="genero">Gênero: </label>
            <select name="assunto" id="opcoes" defaultValue={"default"} >
                <option className='option' disabled value={"default"} >-- Selecione a opção</option>
                <option>Mulher (Trans ou Cis)</option>
                <option>Homem (Trans ou Cis)</option>
                <option>Gênero Não-Binário</option>
            </select>
        </div>
    </div>
    );
}

export default ReviewForm;
