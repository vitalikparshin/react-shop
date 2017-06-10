import * as React from "react";
import { compose, gql, graphql } from "react-apollo";
import { connect } from "react-redux";
import Sidebar from "react-sidebar";
import {ACTION_TOOTLE_CATALOG, ACTION_TOOTLE_MENU} from "../constants";
import {Menu, utils} from "../index";

class SidebarMenu extends React.Component < any, any > {

  public onSetSidebarOpen = () => {
    const { dispatch } = this.props;
    dispatch({type: ACTION_TOOTLE_MENU});
  }

  public render() {
    const { layout } = this.props;

    return (
      <Sidebar
        touch={utils.swipeEnabled()}
        touchHandleWidth={utils.swipeEnabled() ? 0 : undefined}
        sidebar={<Menu/>}
        open={layout.openMenu}
        onSetOpen={this.onSetSidebarOpen as any}
        contentClassName="sidebar"
      >
        {this.props.children}
      </Sidebar>
    );
  }
}

const mapStateToProps: any = (state) => ({
  layout: state.layout,
});

export default compose(
    connect<any, {}, any>(mapStateToProps),
)(SidebarMenu);
