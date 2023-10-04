import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const AuditShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="dns" source="dns" />
        <TextField label="domain" source="domain" />
        <TextField label="ID" source="id" />
        <TextField label="screenshot" source="screenshot" />
        <TextField label="ssl" source="ssl" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="website" source="website" />
        <TextField label="whois" source="whois" />
      </SimpleShowLayout>
    </Show>
  );
};
