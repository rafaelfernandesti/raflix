import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
//função de teste
function CadastroCategoria(){
  const valoresIniciais = {
    nome:'',
    descricao:'',
    cor:'',      
  }
  const [values, setValues] = useState(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]:valor,
    })
  }

  function atualizarValores(infoDoEvento){
    //const { getAttribute, value } = infoDoEvento.target; //não consegui fazer funcionar (Aula 03 - 57'01'')
    setValue(
      infoDoEvento.target.getAttribute('name'),
      infoDoEvento.target.value
      //getAttribute('name'),
      //value
    );
      //console.log(infoDoEvento.target.value);
  }
    
    return (
      
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>
        
        <form onSubmit={function handleSubmit(infosDoEvento){
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais);
        }}>
          <FormField
            label="Nome da categoria: "
            type="text"
            name="nome"
            value={values.nome}
            onChange={ atualizarValores }
          />
          <div>
            <label>
              Descrição da Categoria:
              <textarea
                type="text"
                name="descricao"
                value={values.descricao}
                onChange={ atualizarValores }
                
              />
            </label>
          </div>
          <FormField
            label="Cor da categoria: "
            type="color"
            name="cor"
            value={values.cor}
            onChange={ atualizarValores }
          />
          <button>
            Cadastrar
          </button>
        </form>
        <ul>
          {categorias.map((categoria, indice)=>{
            return (
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>
        <Link to="/">
          Ir para Home
        </Link>
      </PageDefault>
    );
  }

  export default CadastroCategoria;