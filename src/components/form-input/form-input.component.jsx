import { FormInputLable, Group, Input } from "./form-input.styles.jsx";

const FormInput = function ({ label, ...otherProps }) {
  return (
    <Group>
      <Input required {...otherProps} />

      {label && (
        <FormInputLable shrink={otherProps.value.length}>
          {label}
        </FormInputLable>
      )}
    </Group>
  );
};

export default FormInput;
