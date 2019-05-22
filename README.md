# Modelagem

### Diagrama de Classes
<p align="center">
    <img src="https://github.com/gps20191/api-denuncia/blob/master/documentation/App-denuncia%20Class%20Diagram.png?raw=true">
</p>

### Diagrama ER
<p align="center">
    <img src="https://github.com/gps20191/api-denuncia/blob/master/documentation/Modelo-ER.png?raw=true">
</p>

# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
