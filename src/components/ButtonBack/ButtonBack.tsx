import React from "react";
import css from "./style.module.css";
import { Button } from 'antd';

interface ButtonBackProps {
    title: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    className: string;
}

export class ButtonBack extends React.Component <ButtonBackProps> {
    render() {
        return (
            <div>
                <Button 
                value="link" 
                block 
                onClick = {this.props.onClick}
                className = {this.props.className}> {this.props.title} </Button>
            </div>
         
        )
    }
}