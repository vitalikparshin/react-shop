import * as React from "react";
import { Button, Icon } from "antd-mobile";
import { compose } from "react-apollo";
import { connect } from "react-redux";
import {
  ACTION_TOOTLE_CATALOG,
} from "../../layout/constants";
import {ILayout} from "../model";
import Ripples from "react-ripples";

interface CatalogTriggerProps {
  layout: ILayout,
  dispatch: any,
}

class CatalogTrigger extends React.Component<CatalogTriggerProps,any> {

  onClick = (e) => {
    e.preventDefault();
    this.props.dispatch({type: ACTION_TOOTLE_CATALOG});
  }

  render() {
    const { layout } = this.props;
    return (
      <Ripples>
        <Icon
          type={require("!svg-sprite!./catalog.svg")}
          size="md"
          onClick={this.onClick}
          style={{
            fill: layout.openCatalog ? "orange" : "white",
            padding: 15,
          }}
        />
      </Ripples>
    )
  }
}

const mapStateToProps: any = (state) => ({
  layout: state.layout,
})

export default compose(
    connect<any, {}, any>(mapStateToProps),
)(CatalogTrigger);
