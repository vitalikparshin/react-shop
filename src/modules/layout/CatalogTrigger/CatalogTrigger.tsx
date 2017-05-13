import * as React from "react";
import { Button, Icon } from "antd-mobile";
import { compose } from "react-apollo";
import { connect } from "react-redux";
import {
  ACTION_TOOTLE_CATALOG,
} from "../../layout/constants";

class CatalogTrigger extends React.Component<any,any> {

  onClick = (e) => {
    e.preventDefault();
    this.props.dispatch({type: ACTION_TOOTLE_CATALOG});
  }

  render() {
    return (
      <div
        onClick={this.onClick}
        style={{color: "white"}}
      >КАТАЛОГ</div>
    )
  }
}

const mapStateToProps: any = (state) => ({
})

export default compose(
    connect<any, {}, any>(mapStateToProps),
)(CatalogTrigger);
