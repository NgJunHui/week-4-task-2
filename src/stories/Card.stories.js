import React from "react";
import {CardComponent} from "./Component";

export default {
    title: 'Component/Card',
    component: CardComponent,
}

const Template = (args)=> <CardComponent {...args}/>

export const CardFeature = Template.bind({});
CardFeature.args = {
    alt: "Insert alternate text for image",
    image:"Insert image link",
}