import React from 'react'
import Form from './Form'
import { useRecoilState } from 'recoil';
import { atomData } from './recoil/atomData';
import { CardComponent } from './stories/Component';

const Display = () => {

    
    const [list, setList] = useRecoilState(atomData);

    const handleUpdate = (e, id) => {
        console.log(e, id);
        const newList = list.filter((info => info.id !== id));
        setList(newList);
    }

    return (
        <div>
            <Form/>
            {list.length > 0 ? (list.map(info => {
                console.log(info)
                return (
                    <div className='card-div' key={info.id}>
                        <CardComponent 
                        image='https://cdn-icons-png.flaticon.com/512/1950/1950715.png'
                            description={info.text}
                            delFunc={event => handleUpdate(event, info.id)}
                            
                        />
                    </div>
                )
            })) : (<></>)}


                
        </div>

    )
}

export default Display;