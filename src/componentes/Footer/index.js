//src/componentes/Rodape/index.js

import "./Footer.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/gustavo.costa.37819959/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <img src="/imagens/fb.png" alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/GustavoCosta29"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src="/imagens/github-logo.png" alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/gus.hcosta/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <img src="/imagens/ig.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/imagens/lolfooter.png" alt="" />
      </section>
      <section>
        <p>Developed by Gustavo Costa</p>
      </section>
    </footer>
  );
};

export default Rodape;
