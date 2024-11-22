# PROJETO CADASTRO LOGIN

![](/resources/imagens/cadastro.png)




#### Siga esses passo para rodar o projeto




instalar as dependencias do node `node`

```bash
npm install 
```

instalar as dependecias do `composer`

```bash
composer install
```
no arquivo `.env.exemple` duplique e renomei para `.env` e abra o arquivo. 

```php
DB_CONNECTION=sqlite
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=laravel
# DB_USERNAME=root
# DB_PASSWORD=
```

tire os comentarios e configure de acordo com as credenciais do seu banco de dados.

```php
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=cadastro
DB_USERNAME=root
DB_PASSWORD=senha
```

utilize o comando para gerar a chave
```bash
php artisan key:generate
```
no arquivo `.env`verificar se foi prenchido automaticamente ao executar o comando 

```php
APP_KEY=
```

exemplo após rodar o comando:

```php
APP_KEY=base64:6vLYHRp9KziGqBG3TlZn35Oec2Cl57VGugRjHGhlX90=
```

excutar as migrations 
```bash
php artisan migrate
```


#### Excutando projeto 
em um terminal execute o comando
```bash
npm run dev 
```

deve carregar algo parecido com isso
```bash
  VITE v5.4.11  ready in 379 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

  LARAVEL v11.31.0  plugin v1.0.6

  ➜  APP_URL: http://localhost
 
```

em um novo terminal execute
```bash
php artisan serve 
```
deve carregar algo parecido com isso
```bash
INFO  Server running on [http://127.0.0.1:8000].
```
Basta acessar o endereço no seu navegador para utilizar o projeto, Ou usar o atalho do teclado `Ctrl + Click`.