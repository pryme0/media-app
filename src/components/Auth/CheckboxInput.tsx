import React from "react";
import { useField } from "formik";
import {
    Checkbox,
    CheckboxProps,
    FormControlLabel,
    withStyles,
} from "@material-ui/core";

interface Props {
    name: string;
    label: string;
    color: "primary" | "secondary" | "default" | undefined;
}

const CustomCheckbox = withStyles({
    root: {
        color: "#2F80ED",
        "&$checked": {
            color: "2971cf",
        },
    },
    checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const CheckboxInput = ({ label, color, ...props }: Props): JSX.Element => {
    const [field, meta] = useField(props);
    return (
        <FormControlLabel
            // className={classes.remember}
            control={
                <CustomCheckbox
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
