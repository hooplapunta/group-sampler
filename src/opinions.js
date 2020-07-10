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
  RadioButtonGroupInput,
  ShowButton,
  ReferenceField,
  ReferenceInput,
  AutocompleteInput,
  CheckboxGroupInput
} from "react-admin";
import RichTextInput from "ra-input-rich-text";


const aljunied = [
  { _id: 'PAP' },
  { _id: 'WP' },
];

const bishan_toapayoh = [
  { _id: 'PAP' },
  { _id: 'SPP' },
];

const bukitpanjang = [
  { _id: 'PAP' },
  { _id: 'SDP' },
];

const eastcoast = [
  { _id: 'PAP' },
  { _id: 'WP' },
];

const hongkahnorth = [
  { _id: 'PAP' },
  { _id: 'PSP' },
];

const jalanbesar = [
  { _id: 'PAP' },
  { _id: 'PV' },
];

const kebunbaru = [
  { _id: 'PAP' },
  { _id: 'PSP' },
];

const marineparade = [
  { _id: 'PAP' },
  { _id: 'WP' },
];

const marymount = [
  { _id: 'PAP' },
  { _id: 'PSP' },
];

const neesoon = [
  { _id: 'PAP' },
  { _id: 'PSP' },
];

const pioneer = [
  { _id: 'PAP' },
  { _id: 'PSP' },
  { _id: 'IND'}
];

const punggolwest = [
  { _id: 'PAP' },
  { _id: 'WP' },
];

const sembawang = [
  { _id: 'PAP' },
  { _id: 'NSP' },
];

const tampines = [
  { _id: 'PAP' },
  { _id: 'NSP' },
];

const westcoast = [
  { _id: 'PAP' },
  { _id: 'PSP' },
];

const yuhua = [
  { _id: 'PAP' },
  { _id: 'SDP' },
];

const angmokio = [
  { _id: 'PAP' },
  { _id: 'RP' },
];

const bukitbatok = [
  { _id: 'PAP' },
  { _id: 'SDP' },
];

const chuachukang = [
  { _id: 'PAP' },
  { _id: 'PSP' },
];

const holland_bukittimah = [
  { _id: 'PAP' },
  { _id: 'SDP' },
];

const hougang = [
  { _id: 'PAP' },
  { _id: 'WP' },
];

const jurong = [
  { _id: 'PAP' },
  { _id: 'RDU' },
];

const macpherson = [
  { _id: 'PAP' },
  { _id: 'PPP' },
];

const marsiling_yewtee = [
  { _id: 'PAP' },
  { _id: 'SDP' },
];

const mountbatten = [
  { _id: 'PAP' },
  { _id: 'PV' },
];

const pasirris_punggol = [
  { _id: 'PAP' },
  { _id: 'PV' },
  { _id: 'SDA'},
];

const potongpasir = [
  { _id: 'PAP' },
  { _id: 'SPP' },
];

const radinmas = [
  { _id: 'PAP' },
  { _id: 'RP' },
];

const sengkang = [
  { _id: 'PAP' },
  { _id: 'WP' },
];

const tanjongpagar = [
  { _id: 'PAP' },
  { _id: 'PSP' },
];

const yiochukang = [
  { _id: 'PAP' },
  { _id: 'PSP' },
];

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
          helperText="Submitting to a group? Enter it here."
          reference="groups"
          filterToQuery={searchText => ({ haiku: searchText })}>
        <AutocompleteInput optionText="haiku" />
      </ReferenceInput>
      <RadioButtonGroupInput source="aljunied" choices={aljunied} optionText="_id" optionValue="_id"  />
      <RadioButtonGroupInput source="angMoKio" choices={angmokio} optionText="_id" optionValue="_id"  />
      <RadioButtonGroupInput source="bishan_ToaPayoh" choices={bishan_toapayoh} optionText="_id" optionValue="_id"  />
      <RadioButtonGroupInput source="bukitBatok" choices={bukitbatok} optionText="_id" optionValue="_id"  />
      <RadioButtonGroupInput source="bukitPanjang" choices={bukitpanjang} optionText="_id" optionValue="_id"  />
      <RadioButtonGroupInput source="chuaChuKang" choices={chuachukang} optionText="_id" optionValue="_id"  />
      <RadioButtonGroupInput source="eastCoast" choices={eastcoast} optionText="_id" optionValue="_id"  />
      <RadioButtonGroupInput source="holland_BukitTimah" choices={holland_bukittimah} optionText="_id" optionValue="_id"  />
      <RadioButtonGroupInput source="hongKahNorth" choices={hongkahnorth} optionText="_id" optionValue="_id"  />
      <RadioButtonGroupInput source="hougang" choices={hougang} optionText="_id" optionValue="_id"  />
      <RadioButtonGroupInput source="jalanBesar" choices={jalanbesar} optionText="_id" optionValue="_id"  />
      <RadioButtonGroupInput source="jurong" choices={jurong} optionText="_id" optionValue="_id"  />
      <RadioButtonGroupInput source="kebunBaru" choices={kebunbaru} optionText="_id" optionValue="_id"  />
      <RadioButtonGroupInput source="macPherson" choices={macpherson} optionText="_id" optionValue="_id"  />
      <RadioButtonGroupInput source="marineParade" choices={marineparade} optionText="_id" optionValue="_id"  />
      <RadioButtonGroupInput source="marsiling_YewTee" choices={marsiling_yewtee} optionText="_id" optionValue="_id"  />
      <RadioButtonGroupInput source="marymount" choices={marymount} optionText="_id" optionValue="_id"  />
      <RadioButtonGroupInput source="mountbatten" choices={mountbatten} optionText="_id" optionValue="_id"  />
      <RadioButtonGroupInput source="neeSoon" choices={neesoon} optionText="_id" optionValue="_id"  />
      <RadioButtonGroupInput source="pasirRis_punggol" choices={pasirris_punggol} optionText="_id" optionValue="_id"  />
      <RadioButtonGroupInput source="pioneer" choices={pioneer} optionText="_id" optionValue="_id"  />
      <RadioButtonGroupInput source="potongPasir" choices={potongpasir} optionText="_id" optionValue="_id"  />
      <RadioButtonGroupInput source="punggolWest" choices={punggolwest} optionText="_id" optionValue="_id"  />
      <RadioButtonGroupInput source="radinMas" choices={radinmas} optionText="_id" optionValue="_id"  />
      <RadioButtonGroupInput source="sembawang" choices={sembawang} optionText="_id" optionValue="_id"  />
      <RadioButtonGroupInput source="sengkang" choices={sengkang} optionText="_id" optionValue="_id"  />
      <RadioButtonGroupInput source="tampines" choices={tampines} optionText="_id" optionValue="_id"  />
      <RadioButtonGroupInput source="tanjongPagar" choices={tanjongpagar} optionText="_id" optionValue="_id"  />
      <RadioButtonGroupInput source="westCoast" choices={westcoast} optionText="_id" optionValue="_id"  />
      <RadioButtonGroupInput source="yioChuKang" choices={yiochukang} optionText="_id" optionValue="_id"  />
      <RadioButtonGroupInput source="yuhua" choices={yuhua} optionText="_id" optionValue="_id"  />
    </SimpleForm>
  </Create>
);
