import * as React from "react";
import { GroupCreate, GroupList, GroupShow } from "./groups";
import { OpinionList, OpinionCreate, OpinionShow } from "./opinions";
import { Admin, Resource } from "react-admin";
import {
  FirebaseDataProvider,
  FirebaseAuthProvider
} from "react-admin-firebase";
import CommentIcon from '@material-ui/icons/Comment';
import CustomLoginPage from './CustomLoginPage';

import { firebaseConfig as config } from './FIREBASE_CONFIG';

const options = {
  logging: true,
  rootRef: 'root_collection/some_document'
}
const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);

class App extends React.Component {
  render() {
    return (
      <Admin
        loginPage={CustomLoginPage} 
        dataProvider={dataProvider}
      >
        <Resource
          name="groups"
          list={GroupList}
          show={GroupShow}
          create={GroupCreate}
        />
        <Resource
          name="opinions"
          icon={CommentIcon}
          list={OpinionList}
          show={OpinionShow}
          create={OpinionCreate}
        />
      </Admin>
    );
  }
}

export default App;
