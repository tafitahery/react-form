import { useRef, useState } from 'react';
import './app.css';
import FormInput from './components/FormInput';

function App() {
  // const [username, setUsername] = useState('');

  console.log('re-rendered');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <FormInput name="username" placeholder="Username" />
        <FormInput name="email" placeholder="Email" />
        <FormInput name="fullame" placeholder="Full Name" />
        <FormInput name="sth" placeholder="Sth else" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
