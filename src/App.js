import { Typography } from "@mui/material";
import Expenses from "./ExpensesColumns/ExpensesColumns";

function App() {
  return (
    <div className="App">
      <Typography variant="h4" component="h2" align="center">
        Manage Your Expenses
      </Typography>
      <Expenses />
    </div>
  );
}

export default App;
