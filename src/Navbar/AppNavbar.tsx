import React from "react";

import {
    Alignment,
    Button,
    Classes,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
} from "@blueprintjs/core";

export function AppNavbar(): JSX.Element {
    return (
        <Navbar className="App-navbar">
            <NavbarGroup align={Alignment.LEFT}>
                <NavbarHeading>Onshape Configurator</NavbarHeading>
                <NavbarDivider />
                <Button className={Classes.MINIMAL} icon="home" text="Create link" />
                <NavbarDivider />
                <Button className={Classes.MINIMAL} icon="home" text="Use link" />
                <NavbarDivider />
                <Button className={Classes.MINIMAL} icon="home" text="Add FeatureScript" />
            </NavbarGroup>
        </Navbar>
    );
}