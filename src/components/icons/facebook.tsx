import React from 'react';
import { IconProps } from './logoHeaderMyRide';

const Facebook:React.FC<IconProps> = ({style}) => {
    return (
        <svg style={style} width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.2855 1.59448C8.59054 1.59448 0.731445 9.45357 0.731445 19.1485C0.731445 28.8435 8.59054 36.7026 18.2855 36.7026C27.9804 36.7026 35.8395 28.8435 35.8395 19.1485C35.8395 9.45357 27.9804 1.59448 18.2855 1.59448ZM22.4436 13.7251H19.805C19.4923 13.7251 19.1449 14.1365 19.1449 14.6832V16.5886H22.4454L21.9462 19.3058H19.1449V27.4629H16.0309V19.3058H13.2058V16.5886H16.0309V14.9904C16.0309 12.6974 17.6217 10.8341 19.805 10.8341H22.4436V13.7251Z" fill="white" />
        </svg>

    );
};

export default Facebook;