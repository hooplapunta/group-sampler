// in src/posts.js
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  ReferenceField,
  ReferenceInput,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  SelectInput,
  FileField,
  FileInput
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const GroupFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="haiku" alwaysOn />
  </Filter>
);

export const GroupList = (props) => (
  <List {...props} filters={<GroupFilter />}>
    <Datagrid>
      <TextField source="haiku" />
      <TextField source="createdate" />
      <TextField source="lastupdate" />
      <ShowButton label="" />
    </Datagrid>
  </List>
);

export const GroupShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="haiku" />
      <TextField source="createdate" />
      <TextField source="lastupdate" />
    </SimpleShowLayout>
  </Show>
);

export const GroupCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source="haiku" />
    </SimpleForm>
  </Create>
);
