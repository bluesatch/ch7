// import { ConsoleWriter } from 'istanbul-lib-report';
import React, { useState, memo, useCallback } from 'react';
import Numbers from './Numbers';
import User from './User';
import Cat from './Cat';
// import Checkbox from './Checkbox'
// import { useAnyKeyToRender } from '../hooks/useAnyKeyToRender';
// import WordCount from './WordCount';
import '../App.css';

// const words = ['sick', 'powder', 'day'];

const PureCat = memo(Cat);

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

  // useLayoutEffect 
  /*
    Render cycle:

    1. Render
    2. useLayoutEffect 
    3. Browser paint
    4. useEffect 
  
  */

  // useEffect(()=> console.log('useEffect'));
  // useLayoutEffect(()=> console.log('useLayoutEffect'));

  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);

  // const setPosition = ({ x, y}) => {
  //   setX(x);
  //   setY(y);
  // };


  // useLayoutEffect(()=> {
  //   window.addEventListener('mousemove', setPosition);
  //   return ()=> window.removeEventListener('mousemove', setPosition)
  // }, []);

  const [cats, setCats] = useState(['Biscuit', 'Jungle', 'Outlaw']);

  const RenderCatOnce = memo(Cat, ()=> true);
  const AlwaysRenderCat = memo(Cat, ()=> false);



  return (
    <section className="section">
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
      {/* <div>X: {x}</div>
      <div>Y: {y}</div> */}
      <Numbers />
      <User />
      {cats.map((name, i) => (
        <PureCat key={i} name={name} meow={name=> console.log(`${name} has meowed`)} />
      ))}
      <button onClick={()=> setCats([...cats, prompt('Name a cat')])}>Add a Cat</button>

    </section>

  );
}

export default App;
