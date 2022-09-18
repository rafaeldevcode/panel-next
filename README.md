# Painel de login e dashboard com Next JS
<div align="center">
    <img src='https://github.com/rafaeldevcode/panel-next/blob/main/public/assets/images/logo.png' width="300" >
</div>

Este projeto foi desenvolvido com o intuito de ampliar meu conecimento em Next JS e também já possuir uma estrutura base para projetos futuros, obtento assim mais agilidade.

## 🚀 Começando
Antes de começar certifique de ter o Node JS instalado em sua máquina com versão 16 ou superior.

## 📋 Pré-requisitos
- Node JS Versão 16 ou mais

## 🔧 Instalação
 - Primeiro passo é baixar o projeto fazendo dawnload do arquivo zip, ou usando o comando abaixo:
 ```
    git clone https://github.com/rafaeldevcode/panel-next.git
 ```

 - Depois do projeo ter sido clonado naveque até o diretório criado e instale as dependências:
 ```
    npm install
 ```

 - Rodar aplicação em modo develope:
 ```
    npm run dev
 ```

 - Simular ambiente de produção:
 ```
    npm run build
 ```
 ```
    npm start
 ```
 
## 🖇 Dependências
- @tinymce/tinymce-react => 4.2.0 ou mais
- bootstrap              => 5.1.3 ou mais
- bootstrap-icons        => 1.8.3 ou mais
- jquery                 => 3.6.0 ou mais
- next                   => 12.1.0 ou mais
- nookies                => 2.5.2 ou mais
- react                  => 17.0.2 ou mais
- react-dom              => 17.0.2 ou mais
- sass                   => 1.52.3 ou mais

## 🖇 Dependências de desenvolvimento
- laravel-mix        => 6.0.49 ou mais
- resolve-url-loader => 5.0.0 ou mais
- sass               => 1.52.3 ou mais
- sass-loader        => 12.1.0 ou mais
- webpack            => 5.73.0 ou mais
- webpack-cli        => 4.10.0 ou mais

## ⚙ Desenvolvimento
Este projeto utiliza o [Laravel Mix](https://laravel-mix.com/docs/6.0/installation) e [Webpack](https://webpack.js.org/concepts/) para poder transferir os arquivos js, css, fonts e etc... de plugins para o dirrtório público do projeto, tornado assim mais fácil o gerenciamento desses arquivos e um memlhor aproveitamento do recusrsos do [Bootstrap](https://getbootstrap.com/).

##### Oque você pode fazer
- Transferir arquivos de node_modules para o diretório público.
    - Identifique o arquivo [webpack.mix.js](https://github.com/rafaeldevcode/panel-next/blob/main/webpack.mix.js), e adicione o caminho original do arquivo para o caminho que deseja adicionar o arquivo, sempre especificando o tipo de arquivo de destino, EX:
        - Javascript:
        ```
            scripts('caminho original do arquivo', 'caminho de destino')
        ```
        - CSS:
        ```
            css('caminho original do arquivo', 'caminho de destino')
        ```

        ###### Para mais informações consulte a sessão de links úteis no final do arquivo.

    - Depois das alterações feitas rodar o comando:
    ```
        npm run mix
    ```

- Alterar as variaveis sass do Bootstrap:
    - Identifique o arquivo [style.scss](https://github.com/rafaeldevcode/panel-next/blob/main/public/libs/sass/style.scss), e faça as alterações que deseja deixando sempre o '@import  "~bootstrap/scss/bootstrap"', no final do arquivo.

    - Depois das alterações feitas rodar o comando:
    ```
        npm run mix
    ```

- Alterar a cor principal do projeto:
    - Identifique os sequintes arquivos 
        - [style.scss](https://github.com/rafaeldevcode/panel-next/blob/main/public/libs/sass/style.scss);
        - [_variables.sass](https://github.com/rafaeldevcode/panel-next/blob/main/src/styles/_variables.sass)
        
    - E altere o valor da variável '$color-main', para q cor que deseja.

    - Depois das alterações feitas rodar o comando:
    ```
        npm run mix
    ```


## 📦 Produção
Para subir esse projeto em produção reocomendo utilizar a [Vercer](https://vercel.com/), vantagens:
- Por ser a empresa responsável por criar e manter o Next
- Já entrega seu site para DNSs espalhados pelo mundo
- 0 configurações com servidores, basta se conectar ultilizando git
- Versão gratuita com até 3 sites

Mas caso opte por não ultilizar a vercel, e caso sua ospedagem não tenha um pacote de instalaçõa com Node JS, você deverá instalar um gerenciador de aplicação Node,
Aqui vou rocomendar o [PM2](https://pm2.keymetrics.io/):
- Documentação => https://pm2.keymetrics.io/docs/usage/quick-start/
   - Acessar o servidor via terminal instalar as dependências:
    ```
        npm install
    ```

   - Buildar a aplicação:
    ```
        npm run build
    ```
    - Executar o PM2

## 🛠️ Construído com
* [HTML](https://html.com/) - Linguagem de marcação
* [Bootstrap](https://getbootstrap.com/) - Estilização
* [Java Script](https://www.javascript.com/) - Linguagem
* [Next JS](https://nextjs.org/docs) - Fremework para front-end
* [Git](https://git-scm.com/doc) - Gerenciador de versão

## ✒️ Autores
* **Rafael Vieira** - *Trabalho Inicial* 
    - [Github Principal](https://github.com/rafaeldevcode) 

## 📄 Licença
Este projeto está sob a licença (MIT) - veja o arquivo [LICENSE.md](https://github.com/rafaeldevcode/panel-next/blob/main/LICENCE.md) para detalhes.

## 🎁 Expressões de gratidão
* Conte a outras pessoas sobre este projeto 📢
* Obrigado publicamente 🤓.

## 🔗 Links úteis
- [Documentação Sass](https://sass-lang.com/documentation/)
- [Documentação Next JS](https://nextjs.org/docs)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Documentação Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
- [Documentação JQuery](https://api.jquery.com/)
- [Documentação Tinymce](https://www.tiny.cloud/docs/tinymce/6/)
- [Nookies](https://github.com/maticzav/nookies)
- [Documentação React](https://pt-br.reactjs.org/docs/getting-started.html)
- [Documentação Laravel Mix](https://laravel-mix.com/docs/6.0/installation)
- [Documentação Webpack](https://webpack.js.org/concepts/)

---
⌨️ com ❤️ por [Rafael Vieira](https://github.com/rafaeldevcode) 😊
