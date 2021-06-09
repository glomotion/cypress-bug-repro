import React from 'react';
import { mount } from '@cypress/react';

import {
  AppHeaderBarNavItem,
  ERROR_TEXT,
} from './app-header-bar-nav-item.component';

describe('<AppHeaderBarNavItem />', () => {
  // @NOTE: stop all JS uncaught exceptions just for this suite,
  // because we will be using the error messages for assertions below:
  before(() => {
    Cypress.on('uncaught:exception', () => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });

  // @NOTE clear Cypress.on binding once test suite is complete...
  after(() => {
    Cypress.on('uncaught:exception', () => {
      return true;
    });
  });

  it('should throw error, when a fragment is supplied as children', done => {
    cy.on('uncaught:exception', err => {
      expect(err.message).to.include(ERROR_TEXT);
      done();
      return false;
    });
    mount(
      <AppHeaderBarNavItem testId="nav1">
        <>moo</>
      </AppHeaderBarNavItem>,
    );
  });

  it('should throw error, when a plain DOM element is supplied as children', done => {
    cy.on('uncaught:exception', err => {
      expect(err.message).to.include(ERROR_TEXT);
      done();
      return false;
    });
    mount(
      <AppHeaderBarNavItem testId="nav1">
        <div>moo</div>
      </AppHeaderBarNavItem>,
    );
  });
});
