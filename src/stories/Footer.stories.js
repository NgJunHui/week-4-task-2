import React from "react";
import {Footer} from "./Component";

export default {
    title: 'Component/Footer',
    component: Footer,
}

const Template = (args)=> <Footer {...args}/>

export const WebFooter = Template.bind({});
WebFooter.args = {
    backgroundColor: "Background color"
}
