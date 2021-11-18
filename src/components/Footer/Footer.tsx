import React from "react";
import css from './style.module.css'

interface FooterProps {
text: string;
}

export const Footer: React.FC<FooterProps> = ({text}) => {
return (
    <div className = {css.footer}>
        {text}
    </div>
)

}