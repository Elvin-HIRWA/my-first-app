import Expenses from "./Components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Toilet paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e3",
      title: "New TV",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e4",
      title: "Car Insurance",
      amount: 799.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e1",
      title: "Toilet paper",
      amount: 194.12,
      date: new Date(2021, 7, 14),
    },
  ];
  return (
    <div>
      <h2>Lets get started</h2>
      <Expenses
        items={expenses}
      />
    </div>
  );
}

export default App;
