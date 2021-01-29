import React from "react";
import { useField } from "formik";
import { Checkbox, FormControlLabel } from "@material-ui/core";

interface Props {
    name: string;
    label: string;
    color: "primary" | "secondary" | "default" | undefined;
}

const CheckboxInput = ({ label, color, ...props }: Props) => {
    const [field, meta] = useField(props);
    return (
        <FormControlLabel
            // className={classes.remember}
            control={
                <Checkbox
                    color={color}
                    checked={field.value}
                    // color="primary"
                    {...field}
                    {...props}
                />
            }
            label={label}
        />
    );
};

export default CheckboxInput;
