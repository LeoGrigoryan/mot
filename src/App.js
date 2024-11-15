import './App.css';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

function Item({ index }) {
  const ref = useRef(null);
  const isView = useInView(ref, { once: false });
  const mot = useAnimation();

  useEffect(() => {
    if (isView) {
      mot.start('end');
    } else {
      mot.start('start');
    }
  }, [isView, mot]);

  const variants = {
    start: { opacity: 0, scale: 0, y: 10 },
    end: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="start"
      animate={mot}
    >
      <div className="coverer">
        <h2>{index + 1}</h2>
        <h2>.</h2>
      </div>
    </motion.div>
  );
}

function App() {
  const items = new Array(30).fill('');

  return (
    <div className="App">
      {items.map((_, index) => (
        <Item key={index} index={index} />
      ))}
    </div>
  );
}

export default App;
