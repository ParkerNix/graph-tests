import './App.css'
import LineGraph from './components/line'

function App() {
  const labels = ['December', 'January', 'February', 'March', 'April', 'May'];
  const datasets = [
    {
      label: 'Parker',
      data: [1.05, 0.58, 1.00, 0.25, 0.47, 0.50],
    },
    {
      label: 'Sarah',
      data: [1.25, 1.20, 1.11, 2.00, 1.54, 1.04],
    },
    {
      label: 'Katie',
      data: [0.59, 0.59, 1.03, 0.35, 0.56, 0.53],
    },
  ];

  return (
    <div>
      <h2>Time Taken for First Elimination</h2>
      <LineGraph labels={labels} datasets={datasets} title="Performance Over Months" />
    </div>
  );
}

export default App
