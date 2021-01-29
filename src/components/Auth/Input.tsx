import React, { ChangeEvent } from "react";
import { Grid, TextField, InputAdornment, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { ErrorMessage, useField } from "formik";

interface Props {
    name: string;
    label: string;
    half?: boolean;
    type?: string;
    autoFocus?: boolean;
    handleShowPassword?: () => void;
}

const Input = ({
    label,
    half,
    type,
    autoFocus,
    handleShowPassword,
    ...props
}: Props) => {
    const [field, meta] = useField(props);
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField
                error={!!meta.touched && !!meta.error}
                type={type}
                label={label}
                variant="outlined"
                required
                fullWidth
                autoFocus={autoFocus}
                helperText={meta.error}
                {...field}
                {...props}
                InputProps={
                    field.name === "password"
                        ? {
                              endAdornment: (
                                  <InputAdornment position="end">
                                      <IconButton onClick={handleShowPassword}>
                                          {type === "password" ? (
                                              <Visibility />
                                          ) : (
                                              <VisibilityOff />
                                          )}
                                      </IconButton>
                                  </InputAdornment>
                              ),
                          }
                        : undefined
                }
            />
        </Grid>
    );
};

export default Input;
