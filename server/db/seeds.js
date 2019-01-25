use quitsmoking;
db.dropDatabase();

db.cigarettes.insertMany([
  {
    brand: 'Lambert and Butler',
    cost: 10,
    daily: 20,
    datetime: "2019-01-25 09:00:00"
  },
  {
    brand: 'Marlboro',
    cost: 11,
    daily: 15,
    datetime: "2019-01-25 09:00:00"
  },
  {
    brand: 'Lucky Strike',
    cost: 8,
    daily: 30,
    datetime: "2019-01-25 09:00:00"
  },
]);
