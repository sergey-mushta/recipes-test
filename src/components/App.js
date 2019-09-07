import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from "./Header";
import ManageCategories from "./ManageCategories";
import ManageRecipes from "./ManageRecipes";

import ModalConfirmDelete from "./ModalConfirmDelete";

function App() {
  return (
      <Router>
          <Header />
          <div className="container mt-3">
              <Route path="/"  render={() => <h3>Welcome to recipes backend</h3>}  exact />
              <Route path="/manage_categories/" component={ManageCategories} />
              <Route path="/manage_recipes/" component={ManageRecipes} />
          </div>
          <ModalConfirmDelete show={false} />
      </Router>
  );
}

export default App;
