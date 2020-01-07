# DB-POSTGRES

## Requisitos

* Docker
* Nodejs

## Instalação

```bash
docker-compose up -d
```

```bash
yarn
```

```bash
cp .env.example .env
```

```bash
yarn sequelize db:create; yarn sequelize db:migrate;
```

```bash
yarn dev
```