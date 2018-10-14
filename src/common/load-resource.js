import React, { Component } from "react";
import identity from "./identity";

const defaultConfig = {
  promiseChainRest: identity,
  propName: "resource"
};

const loadResource = (resource, clientConfig = {}) => (WrappedComponent) => {
  return class ResourceLoaded extends Component {
    static displayName = `ResourceLoaded(${WrappedComponent.displayName})`;

    constructor(props) {
      super(props);

      this.state = { resource: null };
    }

    config() {
      return { ...defaultConfig, ...clientConfig };
    }

    componentDidMount() {
      return this.config().promiseChainRest(
        resource().then((data) => {
          this.setState({ resource: data });
        })
      );
    }

    render() {
      const { resource } = this.state;

      const passedProps = { [this.config().propName]: resource };
      return resource === null ? <p>Loading...</p> : <WrappedComponent {...passedProps} {...this.props} />;
    }
  }
};

export default loadResource;
