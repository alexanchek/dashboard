import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

export interface InputProps  extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    loupe?: boolean;
    placeholder: string;
    typeField: string;
}