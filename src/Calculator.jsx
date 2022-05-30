import { React, useState } from "react";
import { useForm } from 'react-hook-form';
import "./index.css";

const Calculator = () => {
    const { register, handleSubmit } = useForm();
    const [weight, setWeight] = useState('There is currently no weight loaded ');

    const plateMath = inputWeight =>{
        console.log('platemath!');
        let currentWeight = inputWeight.weight;
        let plate45 = 0; let plate35 = 0; let plate25 = 0; let plate10 = 0; let plate5 = 0; let plateHalf = 0;
      
        const recWeight = n => {
          if( n === 0 ){
            console.log(plate45 + " " + plate35 + " " + plate25 + " " + plate10 + " " + plate5 + " " +     plateHalf);
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
            plate10++;
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
      
        const error = "please input a number greater than 0 and divisible by 5 for your lifts";

        if(currentWeight%5 === 0 && currentWeight>0){
          console.log("weight entered: " + currentWeight);
          let n = (currentWeight-45)/2; 
          recWeight(n);
          setWeight("The weight you're lifting today is "+plate45+ " 45 lb plate(s), "+plate35+" 35 lb plate(s), "+plate25+" 25 lb plate(s), "+plate10+" 10 lb plate(s), "+plate5+ " 5 lb plates, and "+plateHalf+" cookies");
        }
        else{
          setWeight(error);
        }
    }

    return (
        <div>     
            <form onSubmit={handleSubmit(plateMath)}>
                <div>{weight}</div>
                <div><input type="text" {...register('weight')} placeholder="Please enter a positive number divisible by 5"/></div>
                <div><input className="button" type="submit" value="Find Plates" /></div>
            </form>
        </div>
        );
    };

export default Calculator;
