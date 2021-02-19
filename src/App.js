import React from "react";

import BirthdayPreview from "./components/birthday-preview/birthday-preview.component";
import UsersProvider from "./context/users/users.context";

const App = () => (
  <UsersProvider>
    <BirthdayPreview />
  </UsersProvider>
);

export default App;
