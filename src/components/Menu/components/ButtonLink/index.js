import React from 'react';

function ButtonLink(props) {
  // props é um objeto que traz várias coisas do componente...
  // props => { className: "o que alguém passar", href: "valor recebido"}
  console.log(props);
  return (
    <a href={props.href} className={props.className}>
      {props.children}
    </a>

  );
}

export default ButtonLink;
