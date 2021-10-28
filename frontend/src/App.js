import React from 'react';

import styles from './App.module.css';

import GameTable from './components/pages/index';

const App = () => {
  return (
    <div className="bg-gray-200 p-10 min-h-full">
      <div className={styles.body}>
        <GameTable />
      </div>
    </div>
  );
};

export default App;
