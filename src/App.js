import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cover from './components/Cover';
import SelectTicket from './components/SelectTicket';
import Attendee from './components/Attendee';
import TicketConfirmation from './components/TicketConfirmation';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/select-ticket" element={<SelectTicket />} />
          <Route path="/attendee" element={<Attendee />} />
          <Route path="/ticket-confirmation" element={<TicketConfirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
