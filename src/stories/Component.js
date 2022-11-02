import React from "react";
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, TextField, Button} from '@mui/material';
import { AiFillYoutube, AiFillLinkedin, AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai'
import './component.css';

export const Input = ({ id, variant, type, label, name, placeholder, onChange }) => {
    return (
        <>
            <TextField
                className="input-text"
                type={type == 'text' ? 'text' : 'number'}
                id={id}
                variant={variant}
                label={label}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
            />
        </>
    )
}

export const CardComponent = ({ delFunc, description, alt, image }) => {
    return (
        <Card sx={{ maxWidth: 200, ml:2, mb:2 }}>
            <CardContent>
                <Typography>Task:</Typography>
                <Typography variant="h6" color="text.secondary">
                    {description}
                </Typography>
                <Button onClick={delFunc}>Delete</Button>
            </CardContent>
        </Card>

    )
}

export const Footer = ({ backgroundColor,color,...props }) => {

    return (
        <footer 
        style={backgroundColor && { backgroundColor }}
        {...props}
        >
            <div className="footer-content">
                <ul className="socials">
                    <li><a href="#"><AiFillLinkedin /></a></li>
                    <li><a href="#"><AiFillFacebook /></a></li>
                    <li><a href="#"><AiFillYoutube /></a></li>
                    <li><a href="#"><AiFillTwitterSquare /></a></li>
                    <li><a href="#"><AiFillInstagram /></a></li>
                </ul>
                <div className="footer-bottom">
                    <p>Copyright &copy;2022 JH. Designed by <span>Jun Hui</span></p>
                </div>
            </div>
        </footer>
    )
}

Input.propTypes = {
    type: PropTypes.oneOf(['text', 'number']),
    id: PropTypes.string,
    variant: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func
}

Input.defaultProps = {
    type: 'text',
    id: 'outlined-basic',
    variant: 'outlined',
    name: 'Enter a value',
    label: 'Enter label',
    placeholder: 'Enter a value',
    onChange: undefined
}

CardComponent.propTypes = {
    alt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

CardComponent.defaultProps = {
    alt: "This is an image",
    image: "empty image",
}

Footer.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
}

Footer.defaultProps = {
    backgroundColor: null,
}
