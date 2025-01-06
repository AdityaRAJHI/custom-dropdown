import React from 'react';
    import Dropdown from './Dropdown';

    function App() {
      const items = ['First Item', 'Second Item', 'Third Item', 'Fourth Item', 'Fifth Item'];

      return (
        <div className="app">
          <Dropdown items={items} />
        </div>
      );
    }

    export default App;
