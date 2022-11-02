import React, { useState } from 'react'
import { InputField } from './stories/Input.stories';
import { Large } from './stories/Button.stories';
import { Typography } from '@mui/material';
import { useRecoilState } from 'recoil';
import { atomData } from "./recoil/atomData";


const Form = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [idVal, setIdVal] = useState(0);
    const [val, setAtomData] = useRecoilState(atomData);

    const addData = () => {
        if (description) {
            setIdVal(prevVal => prevVal + 1)
            setAtomData((list) => [...list, {
                text: description,
                id: idVal,
            }

            ]);
        }
    }

    const valChange = (e) => {
        if (e.target.id == 'name') {
            setName(e.target.value);
        }
        if (e.target.id == "description") {
            setDescription(e.target.value);
        }
    }

    return (
        <div className='text-container'>
            <Typography variant='h4' gutterBottom>To-do List</Typography>
            <InputField
                type={'text'}
                id={'description'}
                label={'To-do List'}
                placeholder={'Enter a task'}
                onChange={valChange}

            />
            <p className='submit-btn'><Large label={'Submit'} onClick={addData} backgroundColor={'aqua'} /></p>
        </div>

    )
}

export default Form;
