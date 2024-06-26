import * as React from "react";
import {SvgProps} from "@/utils/types/global";
const Pen = (props : SvgProps) => (
    <svg
        fill="#000000"
        width="24px"
        height="24px"
        viewBox="0 0 0.72 0.72"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M0.66 0.217a0.03 0.03 0 0 0 -0.009 -0.021l-0.127 -0.127a0.03 0.03 0 0 0 -0.021 -0.009 0.03 0.03 0 0 0 -0.021 0.009l-0.085 0.085L0.069 0.481a0.03 0.03 0 0 0 -0.009 0.021V0.63a0.03 0.03 0 0 0 0.03 0.03h0.127a0.03 0.03 0 0 0 0.023 -0.009l0.326 -0.328L0.651 0.24a0.036 0.036 0 0 0 0.007 -0.01 0.03 0.03 0 0 0 0 -0.007 0.021 0.021 0 0 0 0 -0.004ZM0.205 0.6H0.12v-0.085l0.298 -0.298 0.085 0.085ZM0.545 0.26l-0.085 -0.085 0.043 -0.042 0.085 0.085Z" />
    </svg>
);
export default Pen;
