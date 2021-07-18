import React from "react";
import { Button, Icon } from "./styles";

type NavbarButtonProps = {
    label: string,
    icon: JSX.Element
}

export const NavbarButton: React.FC<NavbarButtonProps> = ({icon, label}) => {
    return (
        <Button>
            <Icon>{icon}</Icon>
            <Icon>{label}</Icon>
        </Button>
    )
}