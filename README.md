# 📝 Lista de Tarefas

Aplicação de lista de tarefas feita com **React** e **Vite**, com persistência no navegador via `localStorage`.

## Funcionalidades

- Adicionar tarefas
- Excluir tarefas
- Salvar as tarefas automaticamente no `localStorage`
- Carregar as tarefas salvas ao abrir a página
- Mensagem quando a lista está vazia
- Validação para não adicionar tarefas vazias

## Tecnologias

- React
- Vite
- JavaScript (ES6+)
- CSS
- localStorage (Web Storage API)
- ESLint

## Conceitos praticados

- Estados com `useState`
- Efeitos colaterais com `useEffect`
- Lazy initializer no `useState`
- Eventos de formulário e de clique
- Renderização de listas com `map` e `key`
- Imutabilidade de estado (`filter`, spread operator)
- Serialização com `JSON.stringify` e `JSON.parse`

## Como rodar

Pré-requisito: Node.js instalado.

```bash
git clone https://github.com/pedrofigueiredojsx/brutal-todo-list.git
cd brutal-todo-list
npm install
npm run dev
```

Acesse a URL exibida no terminal (normalmente `http://localhost:5173`).

## Estrutura

```
├── public/            # Arquivos estáticos
├── src/
│   ├── TodoApp.jsx    # Componente principal
│   ├── TodoApp.css    # Estilos
│   └── main.jsx       # Ponto de entrada
├── index.html
└── vite.config.js
```

## Próximos passos

- Inc...

## Autor

Feito por Pedro, em Cuiabá/MT.
