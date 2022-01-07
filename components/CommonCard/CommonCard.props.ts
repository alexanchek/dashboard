import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface CommonCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    width?: string;
    height?: string;
    shadow?: boolean;
    purple?: boolean;
}