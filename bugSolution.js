```javascript
import { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const isMounted = useRef(true);

  useEffect(() => {
    // Correct cleanup function
    const controller = new AbortController(); 

    const fetchData = async () => {
      try {
        if (!isMounted.current) return;
          // Simulate async operation
        await new Promise(resolve => setTimeout(resolve, 1000));
        setCount(prevCount => prevCount + 1);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      isMounted.current = false; 
      controller.abort();
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```