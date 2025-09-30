import StudentCard from './components/StudentCard';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          <StudentCard name="Khalid" id={20217848} dept="Software Engineering" />
          <StudentCard name="Mohammed" id={7263622} dept="Computer Science" />
          <StudentCard name="Omar" id={22323241} dept="Information Systems" />
        </div>
      </main>
    </div>
  );
}

export default App;