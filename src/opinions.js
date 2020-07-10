// in src/Comments.js
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  DateInput,
  DateField,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  ReferenceField,
  ReferenceInput,
  AutocompleteInput,
  SelectInput
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

export const OpinionList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField label="Group" source="group_id" reference="groups">
        <TextField source="haiku" />
      </ReferenceField>
      <ShowButton label="" />
    </Datagrid>
  </List>
);

export const OpinionShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="createdate" options={{ disabled: true }} />
      <DateField source="lastupdate" options={{ disabled: true }} />
    </SimpleShowLayout>
  </Show>
);

export const OpinionCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <ReferenceInput
          source="group_id"
          reference="groups"
          filterToQuery={searchText => ({ haiku: searchText })}>
        <AutocompleteInput optionText="haiku" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
