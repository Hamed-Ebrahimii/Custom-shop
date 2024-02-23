import {HTMLAttributes} from "react";

const YouTube = (props : HTMLAttributes<HTMLOrSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={33}
        height={21}
        viewBox="0 0 33 21"
        fill="none"
        {...props}
    >
        <g clipPath="url(#clip0_9328_13038)">
            <rect x={0.5} y={0.5} width={32} height={20} rx={4} fill="white"/>
            <path
                d="M31.8313 3.62307C31.4633 2.39371 30.3791 1.42565 29.0022 1.0971C26.5067 0.5 16.5 0.5 16.5 0.5C16.5 0.5 6.49333 0.5 3.9978 1.0971C2.62102 1.42565 1.53665 2.39371 1.16868 3.62307C0.5 5.85118 0.5 10.5 0.5 10.5C0.5 10.5 0.5 15.1488 1.16868 17.3771C1.53665 18.6063 2.62102 19.5743 3.9978 19.903C6.49333 20.5 16.5 20.5 16.5 20.5C16.5 20.5 26.5067 20.5 29.0022 19.903C30.3791 19.5743 31.4633 18.6063 31.8313 17.3771C32.5 15.1488 32.5 10.5 32.5 10.5C32.5 10.5 32.5 5.85118 31.8313 3.62307Z"
                fill="white"
            />
            <path
                d="M13.2266 14.7188L21.5902 10.4982L13.2266 6.27722V14.7188Z"
                fill="#242424"
            />
        </g>
        <defs>
            <clipPath id="clip0_9328_13038">
                <rect x={0.5} y={0.5} width={32} height={20} rx={4} fill="white"/>
            </clipPath>
        </defs>
    </svg>
);
export default YouTube;
