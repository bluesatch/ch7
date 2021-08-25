// import Checkbox from './Checkbox'
// import { ConsoleWriter } from 'istanbul-lib-report';
import React from 'react';
import { useAnyKeyToRender } from '../hooks/useAnyKeyToRender';
// import WordCount from './WordCount';
import '../App.css';

// const words = ['sick', 'powder', 'day'];

function App() {

  // const [val, set] = useState('');
  // const [phrase, setPhrase] = useState('example phrase');

  // const createPhrase = ()=> {
  //   setPhrase(val);
  //   set('');
  // };

  // useEffect(()=> {
  //   console.log(`typing "${val}"`);
  // }, [val]);

  // useEffect(()=> {
  //   console.log(`saved phrase: "${phrase}"`);
  // }, [phrase]);

  // can add multiple items in the dependancy array
  // useEffect(()=> {
  //   console.log('either val or phrase has changed')
  // }, [val, phrase]);

  // an empty dependancy array causes the effect to invoked only once after the initial render
  // useEffect(()=> {
  //   console.log('only once after initial render');
  // }, []);

  // useAnyKeyToRender();

  

  // useEffect(()=> {
  //   console.log('fresh render');
  // }, [words])

  // const fn = ()=> {
  //   console.log('hello');
  //   console.log('world');
  // }

  // const fn = useCallback(() => {
  //   console.log('hello');
  //   console.log('world');
  // }, [])

  // useEffect(()=> {
  //   console.log('fresh render');
  //   fn();
  // }, [fn])

  return (
    <section>
      <h1>Satch</h1>
      {/* <WordCount>You are not going to believe this but...</WordCount> */}
      {/* <Checkbox /> */}
      {/* <label>Favorite phrase:</label>
      <input
        value={val}
        placeholder={phrase}
        onChange={e => set(e.target.value)}
      />
      <button onClick={createPhrase}>send</button>
      <h1>{val}</h1> */}
    </section>

  );
}

export default App;
