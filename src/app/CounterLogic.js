import { Train_One } from 'next/font/google';
import React, { useState, useMemo } from 'react';

function CounterLogic() {
  // State untuk menyimpan nilai counter
  const [counter, setCounter] = useState(0);
  // State untuk menyimpan nilai incrementer
  const [incrementer, setIncrementer] = useState(1);
  // State untuk menyimpan nilai input
  const [inputValue, setInputValue] = useState("");
  // State untuk mengatur tampilan kotak-kotak
  const [showBoxes, setShowBoxes] = useState(true);

  // Fungsi untuk menambah nilai counter
  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + incrementer);
  };

  // Fungsi untuk mengurangi nilai counter
  const decrementCounter = () => {
    setCounter((prevCounter) => prevCounter - incrementer);
    // Juga bisa menggunakan Math.max jika ingin nilai yang dikurangi tidak kurang dari 0 atau sampai bilangan minus
    // setCounter((prevCounter) => Math.max(prevCounter - incrementer, 0));
  };

  // Fungsi untuk mengatur ulang nilai counter, incrementer, dan menyembunyikan kotak-kotak
  const resetCounter = () => {
    setCounter(0);
    setIncrementer(1);
    setShowBoxes(true);
  };

  // Fungsi untuk mengubah nilai input
  const changeCounterValue = (value) => {
    setInputValue(value);
  };

  // Fungsi untuk menerapkan nilai incrementer baru
  const applyNewIncrementer = () => {
    setIncrementer((prevIncrementer) => parseInt(inputValue, 10));
  };

  // Fungsi untuk mengganti tampilan kotak-kotak
  const toggleShowBoxes = () => {
    setShowBoxes((prevShowBoxes) => !prevShowBoxes);
  };

  // Fungsi untuk mendapatkan warna acak
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Menggunakan useMemo untuk mengoptimalkan rendering kotak-kotak
  const boxes = useMemo(() => {
    const boxElements = [];
    for (let i = 0; i < counter; i++) {
      boxElements.push(
        <div
          key={i}
          style={{
            width: '50px',
            height: '50px',
            margin: '5px 5px',
            backgroundColor: showBoxes ? getRandomColor() : 'transparent',
          }}
        />
      );
    }
    return boxElements;
  }, [counter, showBoxes]);

  // Mengembalikan nilai-nilai dan fungsi-fungsi yang digunakan oleh komponen CounterLogic
  return {
    counter,
    incrementer,
    inputValue,
    showBoxes,
    incrementCounter,
    decrementCounter,
    resetCounter,
    changeCounterValue,
    applyNewIncrementer,
    toggleShowBoxes,
    boxes,
  };
}

export default CounterLogic;