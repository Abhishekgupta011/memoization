import React, { useState, useCallback, useMemo } from 'react';
import './App.css';
import DemoList from './Component/Demo/DemoList';
import Button from './Component/UI/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [isDescending, setIsDescending] = useState(true); // Set initial state to descending

  const changeTitleHandler = useCallback((newTitle) => {
    setListTitle(newTitle);
  }, []);

  const toggleOrderHandler = useCallback(() => {
    setIsDescending((prevState) => !prevState);
  }, []);

  // Use useMemo with initialListItems in the dependency array
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  // Create a new listItems state that will store the sorted list based on the sorting order
  const sortedListItems = useMemo(() => {
    return isDescending ? [...listItems].sort((a, b) => b - a) : [...listItems].sort((a, b) => a - b);
  }, [isDescending, listItems]);

  return (
    <div className="app">
      <DemoList title={listTitle} items={sortedListItems} />
      <Button onClick={() => changeTitleHandler('New Title')}>Change List Title</Button>
      <Button onClick={toggleOrderHandler}>
        {isDescending ? 'Change to Ascending Order' : 'Change to Descending Order'}
      </Button>
    </div>
  );
}

export default App;
