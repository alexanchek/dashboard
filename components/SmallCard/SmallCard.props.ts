import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    Icon: JSX.Element;
    amount: number;
    percent: string;
    renderCase: 'visits' | 'articles' | "subscriptions" | 'authors';
}

export interface IRenderCase {
    renderCase: 'visits' | 'articles' | "subscriptions" | 'authors';
} 