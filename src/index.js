import express from "express"
import { v4 as uuidv4 } from "uuid"

const app = express();
app.use(express.json())

const customers = [];

function verificaContaCPF(request, response, next) {
  const { cpf } = request.headers; //substituindo token

  const customer = customers.find((customer) => customer.cpf === cpf);

  if (!customer) {
    return response.status(400).json({ error: "Cliente não existe" });
  };
  request.customer = customer;

  return next();
}

app.post("/account", (request, response) => {
  const { cpf, name } = request.body;
  const id = uuidv4();
  const cpfExists = customers.some((customer) => customer.cpf === cpf);
  
  if (cpfExists) {
    return response.status(400).json({ error: "Cliente com CPF já existente!" })
  }

  customers.push({
    id,
    name,
    cpf,
    statement: []
  });

  return response.status(201).send();
});

// app.use(verificaContaCPF); todas requisições abaixo do use chamaram o middleware

app.get("/statement/", verificaContaCPF, (request, response) => {
  const { customer } = request;
  return response.json(customer.statement)
})

app.post("/deposit", verificaContaCPF, (request, response) => {
  const { description, amount } = request.body;
  const { customer } = request;
  const statementOperation = {
    description,
    amount,
    create_at: new Date(),
    type: "credit"
  }
  customer.statement.push(statementOperation);
  return response.status(201).send();
})

app.post("withdraw", verificaContaCPF, (request, response) => {
  const { amount } = request.body;
  const { customer } = request;
  
})

app.listen(3333);

