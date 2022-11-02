import React from "react";
import {Input} from "./Component";
export default {
    title: 'Component/Input',
    component: Input,
    argTypes : {
        handleChange : {action: 'handleChange'}
    }
}

const Template = (args)=> <Input {...args}/>

export const InputField = Template.bind({});
InputField.args = {
    label: 'Name',
    placeholder: 'Enter value',
    variant: 'outlined',
    id:"outlined-basic"
    
}
