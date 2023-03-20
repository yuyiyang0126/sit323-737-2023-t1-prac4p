//curl --header "Content-Type: application/json" --request POST --data '{"calculation":"OPERATION","n1":NUM,"n2":NUM}' http://localhost:3000/calculate

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Microservice running, Ready to calculate'); // testing for microservices
});
app.post('/calculate', (req, res) => {
  const { calculation, n1, n2 } = req.body;

  // Catching Error
  if (isNaN(n1) || isNaN(n2)) {
    res.status(400).send('Invalid inputs!'); // error handling for invalid inputs
    return;
  }

  let result;

  switch (calculation) {
    case 'add':
      result = n1 + n2;
      break;//breakpoint
    case 'subtract':
      result = n1 - n2;
      break;//breakpoint
    case 'multiply':
      result = n1 * n2;
      break;//breakpoint
    case 'divide':
      result = n1 / n2;
      break;//breakpoint
    default:
      res.status(400).send('Invalid calculation'); //error handling for calculation
      return;
  }

  res.json({ result });
});

app.listen(port, () => {
  console.log(`Calculator Microservice is listening at http://localhost:${port}`);
});
