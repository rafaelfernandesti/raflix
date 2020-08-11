import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const { atualizarValores, values } = useForm({
    titulo: 'Vídeo padrão',
    url: 'URL padrão',
    categoria: 'Escolha a categoria',
  });
  return (
    <PageDefault>
      <h1>Cadastro de Vídeos</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: 1,
        })
          .then(() => {
            alert('Cadastrou com sucesso.');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título"
          name="titulo"
          value={values.titulo}
          onChange={atualizarValores}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={atualizarValores}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={atualizarValores}
        />
        <Button type="submit">Cadastrar</Button>
      </form>
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
