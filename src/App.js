import React, {useState} from 'react';
import './App.css';

function App() {

    const [squares, setSquare] = useState([{data: null},{data: null},{data: null},{data: null},{data: null},{data: null},{data: null},{data: null},{data: null}]);
    const [count, setCount] = useState(true);

    const clickHandler = event => {

        const data = event.target.getAttribute('data');

        const currentSquares = [...squares];
        console.log(currentSquares)
        const x = count ? "X" : "O";

        if (currentSquares[data].data === null) {
            currentSquares[data].data = x;

            setSquare(currentSquares);


            setCount(!count);
            isWinner(x);
        }
    }

    //Расчет выигрышных комбинаций

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
            if (squares[line[0]].data === s
                && squares[line[1]].data === s
                && squares[line[2]].data === s) {
                alert (s + ' win');
                setTimeout(() => {
                    setSquare([{data: null},{data: null},{data: null},{data: null},{data: null},{data: null},{data: null},{data: null},{data: null}])
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
                        {item.data}
                    </div>
                })
            }
        </div>
    )
}

export default App;
