import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface CommonCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    shadow?: boolean;
    purple?: boolean;
}