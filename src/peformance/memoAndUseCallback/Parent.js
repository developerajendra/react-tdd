import React,{useState, useCallback} from 'react'

import Counter from './Counter';
import Title from './Title';
import Count from './Count';
import Button from './Button';

 

function Parent() {
     const [age, setage] = useState(25);
     const [salary, setsalary] = useState(50000);

     const increnmentAge = useCallback(()=>{
        setage(age + 1);
     },[]);

     const inrenmentSalary = useCallback( () =>{
      setsalary(salary + 1000);
     },[])

    return (
        <div>
          <Counter/>
          <Title/>
          <Count text="age" count={age} />
          <Button handleClick={increnmentAge} > Increnment Age</Button>
          <Count text="Salary" count={salary} />
          <Button handleClick={inrenmentSalary} > Increnment Salary</Button>
        </div>
    )
}

export default Parent
