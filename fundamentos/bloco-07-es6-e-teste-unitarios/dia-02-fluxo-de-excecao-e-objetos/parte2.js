const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R.${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;
};

const impressão = customerInfo(order);
console.log(impressão);

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.payment.total = 'R$ 50,00';
  return `Olá ${order.name}, o total do seu pedido de ${
    Object.keys(order.order.pizza)[0]
  }, ${Object.keys(order.order.pizza)[1]} e ${order.order.drinks.coke.type} é ${
    order.payment.total
  } `;
};

const impressao2 = orderModifier(order);
console.log(impressao2);
