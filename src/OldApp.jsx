
import Hello from './assets/Hello.jsx'
import Contact from './assets/Contact.jsx';
import Counter from './assets/Counter.jsx';

function App() {
  const helloData = [
    {name: 'Nichapa', message: 'Hi There'},
    {name: 'Kan', message: 'Hello..'}
  ];

  return(
    <div className='App'>
      <Counter/>
      
      {helloData.map((data, index) => (
                <Hello key={index} name={data.name} message={data.message} />
            ))}

            <Contact email="kannchp@gmail.com" phone ="0655143798" />
        </div>
    );
}

export default App;
