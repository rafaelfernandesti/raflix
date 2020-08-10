import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroVideo() {
  const { atualizarValores, values } = useForm({

  });
  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault(); // evento ainda não está funcionando. Verificar motivo.
        // eslint-disable-next-line no-alert
        alert('Vídeo cadastrado com sucesso');
      }}
      >
        <FormField
          label="Título do vídeo"
          name="titulo"
          value={values.titulo}
          onChange={atualizarValores}
        />
        <Button type="submit">
          Cadastrar
        </Button>
      </form>
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
