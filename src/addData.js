import React, { useState } from "react";
import { useRecoilState } from 'recoil';
import { atomData } from "./recoil/atomData";

let id = 0;
function getId() {
    return id++;
}

export const AddData = () => {
    const [inputValue, setInputValue] = useState("");
    const [val, setAtomData] = useRecoilState(atomData);//access atom data
    console.log(val);

    const onChange = (e) => {
        //validation
        setInputValue(e.target.value);
    }

    // to update atom
    const addData = () => {
        if (inputValue) {
            setAtomData((list) => [...list, {
                id: getId(),
                text: inputValue,
            }
            ]);
            setInputValue('');
            console.log(val)
        }
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={onChange} />
            <button onClick={addData}>Add Data</button>
        </div>
    )

}