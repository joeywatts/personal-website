import React from "react";

export interface LayoutProps {
    children?: React.ReactNode;
}
export function Layout({ children }: LayoutProps) {
    return (<div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    }}>
        {children}
    </div>);
}

export interface ContainerProps {
    style?: React.HTMLAttributes<HTMLDivElement>["style"];
    children?: React.ReactNode;
}
export function Container({ style, children }: ContainerProps) {
    return (<div style={{
        ...style,
        display: "flex",
        flexDirection: "column",
        flex: 1,
        overflow: "scroll",
        maxHeight: "100vh"
        //maxWidth: 650
    }}>{children}</div>);
}
