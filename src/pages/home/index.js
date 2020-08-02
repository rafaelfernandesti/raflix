import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{backgroundColor: "#141414"}}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[4].videos[0].titulo}
        url={dadosIniciais.categorias[4].videos[0].url}
        videoDescription={"Sem mais..."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel        
        category={dadosIniciais.categorias[1]}
      />
      <Carousel        
        category={dadosIniciais.categorias[2]}
      />
      <Carousel        
        category={dadosIniciais.categorias[3]}
      />
      <Carousel        
        category={dadosIniciais.categorias[4]}
      />
      <Footer></Footer>
    </div>

  );
}

export default Home;
