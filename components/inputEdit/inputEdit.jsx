import { forwardRef } from "react";


// eslint-disable-next-line react/display-name
const Input = forwardRef(({ label, defaultValue="", ...props}, ref) => {
    return (
        <div>
            <label>{label}</label>
            <input label={label} {...props} ref={ref} />
        </div>
    )
})
  export default Input
