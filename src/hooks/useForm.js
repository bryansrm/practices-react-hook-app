import { useState } from "react"

export const useForm = ( initialState = {} ) => {

    const [values, setValues] = useState(initialState);

    // Se desestructura el valor del event con { target }
    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }

    return [ values, handleInputChange];
}
