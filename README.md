# 📦 Sistema de Pesagem

## 🚧 Status do projeto

Em desenvolvimento.

## 📖 Sobre o Projeto

O Sistema de Pesagem é um projeto desenvolvido com o objetivo de automatizar o cálculo do peso líquido de produtos durante processos de conferência e pesagem.

Este projeto surgiu a partir de uma necessidade observada na minha rotina profissional. Atualmente trabalho na área de prevenção e perdas e identifiquei uma oportunidade de otimizar uma atividade que era realizada manualmente por meio de planilhas.

Além de resolver um problema real, este projeto tem como principal objetivo colocar em prática os conhecimentos adquiridos durante meus estudos em desenvolvimento Front-end, utilizando tecnologias modernas como React, TypeScript e Tailwind CSS.

---

## 🎯 Objetivos

- Automatizar cálculos realizados manualmente.
- Reduzir erros durante o processo de pesagem.
- Tornar o processo mais rápido e intuitivo.
- Praticar conceitos de React e TypeScript.
- Desenvolver um projeto completo para compor meu portfólio.

---

## ⚙️ Regras de Negócio

### Peso Total das Caixas

```
Peso Total das Caixas =
Quantidade de Caixas × Peso Unitário da Caixa
```

### Peso Total das Embalagens

```
Peso Total das Embalagens =
Quantidade de Embalagens × Peso Unitário da Embalagem
```

### Peso Líquido

```
Peso Líquido =
Peso Bruto
− Peso Total das Caixas
− Peso Total das Embalagens
```

---

## 🖥️ Telas

### 1. Identificação

Responsável por registrar os participantes da pesagem.

Campos:

- Nome do Preventivo
- Nome do Conferente

Botão:

- Iniciar Pesagem

---

### 2. Pesagem

Responsável por realizar os cálculos.

Campos:

- Código do Produto
- Nome do Produto
- Peso Bruto
- Quantidade de Caixas
- Peso Unitário da Caixa
- Peso Total das Caixas
- Quantidade de Embalagens
- Peso Unitário da Embalagem
- Peso Total das Embalagens
- Peso Líquido

---

## 🚀 Funcionalidades

- Cadastro dos responsáveis pela pesagem.
- Cálculo automático dos pesos.
- Atualização dos resultados em tempo real.
- Interface simples e intuitiva.
- Validação dos campos.
- Preparado para futuras integrações com banco de dados e APIs.

---

## 🛠️ Tecnologias

- React
- TypeScript
- Tailwind CSS
- Vite
- Git
- GitHub

---

## 📚 Objetivo de Aprendizado

Este projeto faz parte da minha jornada de aprendizado em desenvolvimento Front-end.

Durante o desenvolvimento, busco aplicar boas práticas de programação, componentização, organização de código e arquitetura de aplicações React, transformando um problema do mundo real em uma solução prática desenvolvida por mim.
