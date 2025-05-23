import { HTMLProps } from "react";

export function XIcon({ colorIcon = "#FFFFFF", onClick, className }: { colorIcon?: string, onClick?: () => void, className?: HTMLProps<HTMLElement>["className"]; }) {
    return (
        <svg
            width="12"
            height="13"
            viewBox="0 0 12 13"
            xmlns="http://www.w3.org/2000/svg"
            fill={colorIcon}
            className={className}
            onClick={onClick}
        >
            <path
                d="M11.8334 1.70874L10.6584 0.533737L6.00008 5.19207L1.34175 0.533737L0.166748 1.70874L4.82508 6.36707L0.166748 11.0254L1.34175 12.2004L6.00008 7.54207L10.6584 12.2004L11.8334 11.0254L7.17508 6.36707L11.8334 1.70874Z"
                fill={colorIcon}
            />
        </svg>
    );
}
