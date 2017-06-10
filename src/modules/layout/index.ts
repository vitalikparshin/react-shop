import * as model from "./model";
import reducer from "./reducer";
import * as utils from "./utils";

import Catalog from "./Catalog/Catalog";
import CatalogTrigger from "./CatalogTrigger/CatalogTrigger";
import FlatPages from "./FlatPages/FlatPages";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import HomeTrigger from "./HomeTrigger/HomeTrigger";
import Layout from "./Layout/Layout";
import Loading from "./Loading/Loading";
import Menu from "./Menu/Menu";
import MenuTrigger from "./MenuTrigger/MenuTrigger";
import SidebarCatalog from "./SidebarCatalog/SidebarCatalog";
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import SubCatalog from "./SubCatalog/SubCatalog";
import {swipeEnabled} from "./utils";

export {
  Header,
  Layout,
  Footer,
  Loading,
  CatalogTrigger,
  Catalog,
  SubCatalog,
  SidebarCatalog,
  FlatPages,
  MenuTrigger,
  Menu,
  SidebarMenu,
  HomeTrigger,

  model,
  reducer,
  utils,
};
