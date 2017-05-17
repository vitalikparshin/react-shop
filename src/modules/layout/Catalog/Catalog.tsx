import * as React from "react";
import { gql, compose, graphql } from "react-apollo";
import { connect } from "react-redux";
import {
  Drawer,
  List,
  NavBar,
  Icon,
  WingBlank,
  Carousel,
  Flex,
  Card,
  Grid
} from "antd-mobile";
import { StickyContainer, Sticky } from "react-sticky";
import { Link } from "react-router-dom";
import { Loading, SubCatalog } from "../../layout/index";
import { ACTION_TOOTLE_CATALOG } from "../../layout/constants";
import { HEIGHT } from "../../layout/Header/Header";

export const CATALOG_QUERY = gql`
  query categories {
    categories {
      name
      id
      alias
      parent {
        id
      }
      image
    }
  }
`;


class Catalog extends React.Component<any,any> {
  onStickyStateChange = (isSticky) => {
    console.log(`Am I sticky?: ${ isSticky ? 'Yep!' : 'Nope!'}`);
  }

  render() {
    const { isDrawer, data } = this.props;
    const { loading, categories } = data;
    if (loading == true) {
      return <Loading/>
    }

    const startCats: any = [];
    const childrenMap: any = {};
    for (let cat of categories) {
      if (cat.parent) {
        const key = cat.parent.id;
        if (!(key in childrenMap)) {
          childrenMap[key] = [];
        }
        childrenMap[key].push(cat);
      } else {
        startCats.push(cat);
      }
    }

    let style = {}
    if (isDrawer === true) {
      style["width"] = window.innerWidth * 0.9;
      style["background"] = "aliceblue";
      style["padding"] = "20px 10px 10px 10px";
    }

    return (
      <div style={style}>
        {startCats.map((parent, i) => (
          <StickyContainer>
            <Sticky
              topOffset={HEIGHT * 3}
              stickyStyle={{top: HEIGHT}}
              onStickyStateChange={this.onStickyStateChange}
            >
              <header>
                <h2 style={{textAlign:"center", background: "parent", zIndex: 10000}}>{parent.name}</h2>
              </header>
            </Sticky>
            <SubCatalog
              categories={childrenMap[parent.id]}
              isDrawer={isDrawer}
            />
          </StickyContainer>
        ))}
      </div>
    )

  }
}

const mapStateToProps: any = (state) => ({})

export default compose(
    connect<any, {}, any>(mapStateToProps),
    graphql(CATALOG_QUERY),
)(Catalog);
