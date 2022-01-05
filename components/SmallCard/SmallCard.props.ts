import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    Icon: any;
    TrendIcon: any;
    amount: number;
    percent: string;
    renderCase: 'visits' | 'articles' | "subscriptions" | 'authors';
}