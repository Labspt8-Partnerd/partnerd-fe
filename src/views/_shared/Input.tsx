import React from "react";
import { useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";

export const Input = ({ register, errors, name, ...rest }: any) => {
   // console.log(name);
   console.log("updated errors object: ", errors);
   console.log(`inherited ${name} props: `, rest);
   return (
      <>
         <TextField
            name={name}
            type={rest.type}
            label={rest.label}
            inputRef={register({
               required: {
                  value: rest.required || null,
                  message: "This field is required",
               },
               minLength: {
                  value: rest.minLength || null,
                  message: `This field must be at least ${rest.minLength} characters long.`,
               },
            })}
            variant="outlined"
            errors={errors}
            error={
               errors.email && name === "email"
                  ? true
                  : errors.password && name === "password"
                  ? true
                  : false
            }
            {...rest}
         />
      </>
   );
};
