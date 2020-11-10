import React from "react";

import layoutStyles from "./layout.module.css";

export interface LayoutProps {
    children?: React.ReactNode;
}
export function Layout({ children }: LayoutProps) {
    return (<div className={layoutStyles.layout}>
        {children}
    </div>);
}

export interface ContainerProps {
    style?: React.HTMLAttributes<HTMLDivElement>["style"];
    children?: React.ReactNode;
}
export function Container({ style, children }: ContainerProps) {
    return (<div className={layoutStyles.container} style={style}>
        {children}
    </div>);
}
