import { useState } from "react";

export const useForm = (objForm = {}) => {

    const [formValue, setformValue] = useState(objForm);

    const handdleChangeInput = ({target}) => {

        setformValue({
            ...formValue,
            [target.name]: target.value,
        })
    } 

    return [formValue, handdleChangeInput];
}
