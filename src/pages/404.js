import * as React from "react";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'

const NotFoundPage = () => (
  <Layout>
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container content has-text-centered">
          <p>
            <FontAwesomeIcon icon={faSkullCrossbones} size="4x" />
          </p>
          <h1 className="title is-size-1 is-size-3-touch has-text-centered is-uppercase">Page not found</h1>
          <p>You just hit a route that doesn't exist... the sadness.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
