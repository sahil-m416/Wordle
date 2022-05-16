import React from 'react'

export default function Modal({ isCorrect, turn, solution }) {
    return (
        <div className='modal' >
            {isCorrect && (
                <div>
                    <h1>You Win</h1>
                    <p className="solution">The word - {solution}</p>
                    <p>You found solution in {turn} guesses</p>
                </div>
            )}

            {!isCorrect && (
                <div>
                    <h1>Oops !!!</h1>
                    <p className="solution">The correct solution is {solution}</p>
                    <p>Better luck next time.</p>
                </div>
            )}


        </div>
    )
}
