import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CustomerTitle } from "../customer/CustomerTitle";

export const AuditEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <div />
        <TextInput label="domain" source="domain" />
        <TextInput label="screenshot" source="screenshot" />
        <div />
        <TextInput label="website" source="website" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
