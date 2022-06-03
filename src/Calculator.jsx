import { React, useState } from "react";
import { useForm } from 'react-hook-form';
import "./index.css";

const Calculator = () => {
    const { register, handleSubmit } = useForm();
    const [weight, setWeight] = useState(`There is currently no weight loaded`);

    const plateMath = inputWeight => {
        let plate45 = 0, plate35 = 0, plate25 = 0, plateTen = 0, plate5 = 0, plateHalf = 0, currentWeight = inputWeight.weight;
        const error = `input an integer greater than 0 and divisible by 5`;
      
        const recWeight = n => {
            if(n === 0){
                return;
            }
            else if(n >= 45){
                plate45++;
                return recWeight(n - 45);
            }
            else if(n >= 35){
                plate35++;
                return recWeight(n - 35);
            }
            else if(n >= 25){
                plate25++;
                return recWeight(n - 25);
            }
            else if(n >= 10){
                plateTen++;
                return recWeight(n - 10);
            }
            else if(n >= 5){
                plate5++;
                return recWeight(n - 5);
            }
            else{
                plateHalf++;
                return recWeight(n - 2.5);
            }
        }
      
        if(currentWeight % 5 === 0 && currentWeight > 0){
            let n = (currentWeight-45)/2;
            recWeight(n);
            
            const finalize = () => {
                const weightArr = [];
                const pp = "lb plate";
        
                if(plate45 > 0){
                    if(plate45 === 1){
                        weightArr.push(` ${plate45} 45 ${pp}`);
                    }else{
                        weightArr.push(` ${plate45} 45 ${pp}s`)
                    }
                }
                if(plate35 > 0){
                    if(plate35 === 1){
                        weightArr.push(` ${plate35} 35 ${pp}`);
                    }else{
                        weightArr.push(` ${plate35} 35 ${pp}s`)
                    }
                }
                if(plate25 > 0){
                    if(plate25 === 1){
                        weightArr.push(` ${plate25} 25 ${pp}`);
                    }else{
                        weightArr.push(` ${plate25} 25 ${pp}s`)
                    }
                }
                if(plateTen > 0){
                    if(plateTen === 1){
                        weightArr.push(` ${plateTen} 10 ${pp}`);
                    }else{
                        weightArr.push(` ${plateTen} 10 ${pp}s`)
                    }
                }
                if(plate5 > 0){
                    if(plate5 === 1){
                        weightArr.push(` ${plate5} 5 ${pp}`);
                    }else{
                        weightArr.push(` ${plate5} 5 ${pp}s`)
                    }
                }
                if(plateHalf > 0){
                    if(plateHalf === 1){
                        weightArr.push(` a cookie`);
                    }else{
                        weightArr.push(`${plateHalf} cookies`)
                    }
                }
                if(weightArr.length > 1){
                    weightArr[weightArr.length -1] = ` and ${weightArr[weightArr.length -1]}`;
                    setWeight(weightArr.join(',').toString().trim());
                }else{
                    setWeight(weightArr.toString().trim());  
                }
                  
            }
            finalize();
        }else{
            setWeight(error);
        }
    }

    return (
        <div className="calcview">
            <div className="weightdisplay" >{weight}</div>
            <form className="form" onSubmit={handleSubmit(plateMath)}>
                <div><input className="textbox" type="text" {...register('weight')}/></div>
                <div><input className="button" type="submit" value="Find Plates" /></div>
            </form>
        </div>
        );
    };

export default Calculator;
