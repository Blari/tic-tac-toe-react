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

            setSquare(currentSquares);
            setCount(!count);

            isWinner(count ? "X" : "O");
            setCount(!count);
        }
    }

    const isWinner = (s) => {
        console.log(squares);
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
            {
                squares.map((item, index) => {
                    return <div
                        className="ttt-grid"
                        onClick={clickHandler}
                        data={index}
                        key={index}
                    >
                        {item}
                    </div>
                })
            }
        </div>
    )
}

export default App;
