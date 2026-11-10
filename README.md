# 📝 Lista de Tarefas

Aplicação de lista de tarefas feita com React, com persistência no navegador via `localStorage`.

## Funcionalidades

- Adicionar tarefas
- Excluir tarefas
- Salvar as tarefas automaticamente no `localStorage`
- Carregar as tarefas salvas ao abrir a página
- Mensagem quando a lista está vazia
- Validação para não adicionar tarefas vazias

## Tecnologias

- React
- JavaScript (ES6+)
- CSS
- localStorage (Web Storage API)

## Conceitos praticados

- Estados com `useState`
- Efeitos colaterais com `useEffect`
- Lazy initializer no `useState`
- Eventos de formulário e de clique
- Renderização de listas com `map` e `key`
- Imutabilidade de estado (`filter`, spread operator)
- Serialização com `JSON.stringify` e `JSON.parse`

## Como rodar

```bash
# clonar o repositório
git clone <url-do-repositorio>

# entrar na pasta
cd <nome-da-pasta>

# instalar dependências
npm install

# rodar em modo desenvolvimento
npm run dev
```

## Estrutura

```
src/
├── TodoApp.jsx
├── TodoApp.css
└── main.jsx
```

## Próximos passos

- [ ] Marcar tarefa como concluída
- [ ] Editar tarefa
- [ ] Filtrar por todas / pendentes / concluídas
- [ ] Testes com Vitest e Testing Library
- [ ] Migrar para TypeScript

## Autor

Feito por Pedro, em Cuiabá/MT.
