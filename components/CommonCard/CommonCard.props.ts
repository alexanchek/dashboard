import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface CommonCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    width?: number;
    height?: number;
    shadow?: boolean;
}