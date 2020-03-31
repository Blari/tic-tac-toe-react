import React, {useState} from 'react';
import './App.css';

function App() {
    let initState = Array(9).fill(null);

    const [squares, setSquare] = useState(initState);
    const [count, setCount] = useState(true);



    const clickHandler = event => {
        const data = event.target.getAttribute('data');
        const currentSquares = [...squares];

        if (currentSquares[data] === null) {
            currentSquares[data] = count ? "X" : "O";
            setCount(!count);

            setSquare(currentSquares);

            console.log(squares)
            console.log(currentSquares)

            isWinner(currentSquares[data]);
        }
    }


    const isWinner = (s) => {
        const winnerLine = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]
        for (let i = 0; i < 8; i++) {
            let line = winnerLine[i];
            if (squares[line[0]] === s
                && squares[line[1]] === s
                && squares[line[2]] === s) {
                alert (s + ' win');
                setTimeout(() => {
                    setSquare(initState)
                }, 3000)
            }
        }
    }

    return (
        <div className="tic-tac-toe">
            <div className="ttt-grid" onClick={clickHandler} data="0">{squares[0]}</div>
            <div className="ttt-grid" onClick={clickHandler} data="1">{squares[1]}</div>
            <div className="ttt-grid" onClick={clickHandler} data="2">{squares[2]}</div>
            <div className="ttt-grid" onClick={clickHandler} data="3">{squares[3]}</div>
            <div className="ttt-grid" onClick={clickHandler} data="4">{squares[4]}</div>
            <div className="ttt-grid" onClick={clickHandler} data="5">{squares[5]}</div>
            <div className="ttt-grid" onClick={clickHandler} data="6">{squares[6]}</div>
            <div className="ttt-grid" onClick={clickHandler} data="7">{squares[7]}</div>
            <div className="ttt-grid" onClick={clickHandler} data="8">{squares[8]}</div>
        </div>
    )
}

export default App;
