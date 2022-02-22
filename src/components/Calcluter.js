import React, { useState } from 'react';
import './Calcluter.scss';

const Calcluter = () => {
    const [inputValue, setvalue] = useState('');
    function disp (value){
        setvalue( inputValue + value)
    }
    function calclute (){
        var answer = eval(inputValue);
        setvalue(answer);
    }
    function clear(){
        setvalue('')
    }

    return (
        <div className='row justify-content-center'>
            <div className='col-3'>
                <h1> React Calcluter</h1>
                <table>
                    <tr>
                        <td>
                            <input type='text' value={inputValue} />
                            <button >C</button>
                            <button onClick={()=>clear()}>C</button>
                        </td>
                    </tr>
                    <tr>
                        <td >
                        <button onClick={()=>disp('1')}>1</button>
                        <button onClick={()=>disp('2')}>2</button>
                        <button onClick={()=>disp('3')}>3</button>
                        <button onClick={()=>disp('/')}>/</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <button onClick={()=>disp('4')}>4</button>
                        <button onClick={()=>disp('5')}>5</button>
                        <button onClick={()=>disp('6')}>6</button>
                        <button onClick={()=>disp('-')}>-</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <button onClick={()=>disp('7')}>7</button>
                        <button onClick={()=>disp('8')}>8</button>
                        <button onClick={()=>disp('9')}>9</button>
                        <button onClick={()=>disp('+')}>+</button>
                        </td>
                    </tr>
                    <tr>
                    <td>
                        <button onClick={()=>disp('.')}>.</button>
                        <button onClick={()=>disp('0')}>0</button>
                        <button onClick={()=>calclute()}>=</button>
                        <button onClick={()=>disp('*')}>*</button>
                    </td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Calcluter;