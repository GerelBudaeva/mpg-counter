import {useState} from 'react';

function App() {

    const [tank, setTank] = useState(0);
    const [mpg, setMpg] = useState(0);
    const [distance, setDistance] = useState(0);
    const [result, setResult] = useState('');

    const onTankChange = (e) => {
        setTank(e.target.value);
        calculate()
    }

    const onMpgChange = (e) => {
        setMpg(e.target.value);
        calculate()
    }

    const onDistanceChange = (e) => {
        setDistance(e.target.value);
        calculate()
    }

    const calculate = () => {
        const carDistance = tank * mpg;
        if (carDistance >= distance) setResult('We arrived!')
        else setResult('We did not arrive!')
    }

    return (
        <div className="App">

            <div>
                <label for="tank">Tank, Gal</label>
                <input value={tank} onChange={onTankChange} name="tank" type="number"/>
            </div>
            <div>
                <label htmlFor="mpg">Mpg</label>
                <input value={mpg} onChange={onMpgChange} name="mpg" type="number"/>
            </div>
            <div>
                <label htmlFor="distance">Distance, Miles</label>
                <input value={distance} onChange={onDistanceChange} name="distance" type="number"/>
            </div>

            <hr/>

            <div>{tank}</div>
            <div>{mpg}</div>
            <div>{distance}</div>

            <hr/>
            {result}
        </div>
    );
}

export default App;
