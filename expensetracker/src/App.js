import IncomeExpense from "./Components/IncomeExpense";
import History from "./Components/History";
import Transaction from "./Components/Transaction";

import AppContextState from "./AppContextState";

function App() {
  return (
    <div className="bg-slate-50">
      <div className="w-1/4 sm:mx-auto">
        <AppContextState>
          <header className="header py-6">
              <h1 className="text-left font-medium text-2xl text-gray-800">Expense Tracker</h1>            
          </header>
          <IncomeExpense />
          <History />
          <Transaction />
        </AppContextState>
      </div>
    </div>
  );
}

export default App;
