import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    amount: number;
    percent: string;
    renderCase: 'visits' | 'articles' | "subscriptions" | 'authors';
}