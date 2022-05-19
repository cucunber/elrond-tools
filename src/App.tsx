import React, { ChangeEventHandler } from 'react';
import './App.css';
import { useAbiProvider } from './contexts';

function App() {

  const { setNewAbiFile } = useAbiProvider();

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const files = e.currentTarget.files;
    if(files?.length){
      setNewAbiFile(files[0]);
    }
  }

  return (
    <div className="App">
     <input type="file" onChange={onChange} accept=".json" multiple={false} />
    </div>
  );
}

export default App;
