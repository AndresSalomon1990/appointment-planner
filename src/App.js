import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {

  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);
  
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContact = (name, phone, email) => {
    const newContact = { 
      name,
      phone,
      email
    };

    setContacts(prev => ([
      ...prev,
      newContact
    ]));
  };

  const addAppoinment = (title, contact, date, time) => {
    const newAppointment = {
      title,
      contact,
      date,
      time,
    };

    setAppointments(prev => ([
      ...prev,
      newAppointment
    ]));
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage contacts={contacts} addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage contacts={contacts} appointments={appointments} addAppoinment={addAppoinment} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
