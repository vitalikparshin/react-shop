import * as Sie from 'react-sidebar';
import * as React from "react";
import { compose, gql, graphql } from "react-apollo";
import { connect } from "react-redux";
import { ACTION_TOOTLE_CATALOG } from "../constants";
import { Catalog, utils } from "../index";
import { ILayout } from "../model";
import Sidebar from "react-sidebar";

interface IConnectedSideBarProps {
  layout: ILayout;
  dispatch: any;
}

const CatalogMenu = (props) => {
  return <div><Catalog isDrawer={true}/></div>;
};

class SidebarCatalog extends React.Component<IConnectedSideBarProps, any> {

  public onSetSidebarOpen = () => {
    const { dispatch } = this.props;
    dispatch({type: ACTION_TOOTLE_CATALOG});
  }

  public render() {
    const { layout } = this.props;
    return (
      <Sidebar
        touch={utils.swipeEnabled()}
        sidebar={<CatalogMenu/>}
        open={layout.openCatalog}
        touchHandleWidth={50}
        dragToggleDistance={60}
        // onOpenChange={this.onSetSidebarOpen as any}
        onSetOpen={this.onSetSidebarOpen as any}
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
    connect<IConnectedSideBarProps, {}, any>(mapStateToProps),
)(SidebarCatalog);
