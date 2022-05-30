import { React, useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import "./index.css";

const Calculator = () => {
    const { register, handleSubmit } = useForm();
    const [time, setTime] = useState(0);
    const [weight, setWeight] = useState('');

    useEffect(() => {
        let interval = 0;

    }, [weight]);

    return (
        <div>     
            <form>
                <div><input type="text" {...register("hidden")} /></div>
                <div><input className="button" type="submit" value="Submit" /></div>
            </form>
        </div>
        );
    };

export default Calculator;
