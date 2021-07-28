import './App.css';

import Layout from './hoc/Layout/Layout';

import scullyIcon from './assets/images/scullyicon.png';

function App() {
  return (
    <div className="App">
      <div className="Name"><img className="MyIcon" src={scullyIcon} width="60" display="inline"/> Scully Liu</div>
      <Layout />
    </div>
  );
}

export default App;
