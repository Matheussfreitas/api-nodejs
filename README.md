## FinAPI - Financeira


### Requisitos

- [x] Deve ser possível criar uma conta
- [x] Deve ser possível buscar extrato bancário do cliente
- [x] Deve ser possível realizar um depósito
- [x] Deve ser possível realizar um saque
- [] Deve ser possível buscar extrato bancário do cliente por data
- [] Deve ser possível atualizar os dados da conta do cliente
- [] Deve ser possível obter dados da conta do cliente
- [] Deve ser possível deletar uma conta

---

### Regras de negócio

- [x] Não deve ser possível cadastrar uma conta com CPF existente
- [x] Não deve ser possível fazer depósito em uma conta não existente
- [x] Não deve ser possível buscar extrato em uma conta não existente
- [x] Não deve ser possível fazer saque em uma conta não existente
- [x] Não deve ser possível fazer saque quando o saldo for insuficiente
- [] Não deve ser possível excluir uma conta não existente