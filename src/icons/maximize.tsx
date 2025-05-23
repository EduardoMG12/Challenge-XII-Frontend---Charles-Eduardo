import { HTMLProps } from "react";

export default function MaximizeIcon({ colorIcon = "#FFFFFF", onClick, className }: { colorIcon?: string, onClick: () => void, className?: HTMLProps<HTMLElement>["className"]; }) {
    return <svg fill={colorIcon} height="20" width="20" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
        className={className}
        viewBox="0 0 512 512">
        <g>
            <g>
                <path d="M175.445,336.555c-5-5.009-13.099-5.009-18.099,0L25.6,468.301V396.8c0-7.074-5.726-12.8-12.8-12.8
			C5.726,384,0,389.726,0,396.8v102.4c0,7.074,5.726,12.8,12.8,12.8h102.4c7.074,0,12.8-5.726,12.8-12.8
			c0-7.074-5.726-12.8-12.8-12.8H43.699l131.746-131.746C180.446,349.653,180.446,341.555,175.445,336.555z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M499.2,0H396.8C389.726,0,384,5.726,384,12.8c0,7.074,5.726,12.8,12.8,12.8h71.492L336.555,157.346
			c-5.001,5.001-5.001,13.099,0,18.099c5,5.001,13.099,5.001,18.099,0L486.4,43.699V115.2c0,7.074,5.726,12.8,12.8,12.8
			c7.074,0,12.8-5.726,12.8-12.8V12.8C512,5.726,506.274,0,499.2,0z"/>
            </g>
        </g>
    </svg>;
}