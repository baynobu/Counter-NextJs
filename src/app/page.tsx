"use client"
import React from 'react';
import CounterLogic from './CounterLogic';
import './App.css'; // Import file CSS untuk menangani aturan grid

function App() {
  const {
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
  } = CounterLogic();

  return (
    <div className="App text-stone-900 p-4 bg-white">
      <h1 className='text-2xl text-center mb-4'>Counter App</h1>

      {/* Tampilan kotak-kotak yang akan ditampilkan atau disembunyikan */}
      <div className='overflow-auto h-80 rounded-lg shadow-lg container'>{boxes}</div>

      <div className="flex flex-col items-center space-y-4">

        {/* Tampilan nilai counter */}
        <div className="rounded-full w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-3xl shadow-lg mt-8">
          {counter}
        </div>

        {/* Tombol untuk menambah dan mengurangi nilai counter */}
        <div className="flex space-x-4">
          <button
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg text-2xl transition duration-300 transform hover:scale-110"
            onClick={incrementCounter}
          >
            +
          </button>
          <button
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg text-2xl transition duration-300 transform hover:scale-110"
            onClick={decrementCounter}
          >
            -
          </button>
        </div>

        {/* Tombol untuk mereset counter dan menampilkan/ menyembunyikan kotak-kotak */}
        <div className="flex space-x-4">
          <button
            className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg shadow-lg text-xl transition duration-300"
            onClick={resetCounter}
          >
            Reset
          </button>
          <button
            className={`px-6 py-3 ${showBoxes ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white rounded-lg shadow-lg text-xl transition duration-300`}
            onClick={toggleShowBoxes}
          >
            {showBoxes ? 'Hide Boxes' : 'Show Boxes'}
          </button>
        </div>

        {/* Input untuk mengubah nilai counter */}
        <div className="flex items-center space-x-4">
          <input
            type="number"
            placeholder="Enter Value"
            value={inputValue}
            onChange={(event) => changeCounterValue(event.target.value)}
            onKeyUp={(event) => {
              if (event.key === 'Enter') applyNewIncrementer();
            }}
            className="border border-gray-400 p-2 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
          />
          <button
            className="bg-gradient-to-b w-max mx-auto text-blue-500 font-semibold from-slate-50 to-blue-100 px-10 py-2 rounded-2xl shadow-blue-400 shadow-md border-b-4 hover border-blue-200 hover:shadow-sm transition-all duration-500"
            //className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-lg text-xl transition duration-300"
            onClick={applyNewIncrementer}
          >
            Apply
          </button>
        </div>
      </div>

    </div>
  );
}

export default App;
