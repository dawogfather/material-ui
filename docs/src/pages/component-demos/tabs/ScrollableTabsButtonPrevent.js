// @flow weak
/* eslint-disable react/no-multi-comp */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import PhoneIcon from 'material-ui-icons/Phone';
import FavoriteIcon from 'material-ui-icons/Favorite';
import PersonPinIcon from 'material-ui-icons/PersonPin';
import HelpIcon from 'material-ui-icons/Help';
import ShoppingBasket from 'material-ui-icons/ShoppingBasket';
import ThumbDown from 'material-ui-icons/ThumbDown';
import ThumbUp from 'material-ui-icons/ThumbUp';

const TabContainer = props =>
  <div style={{ padding: 24 }}>
    {props.children}
  </div>;

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styleSheet = createStyleSheet(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
}));

class ScrollableTabsButtonPrevent extends Component {
  state = {
    index: 0,
  };

  handleChange = (event, index) => {
    this.setState({ index });
  };

  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            index={this.state.index}
            onChange={this.handleChange}
            scrollable
            scrollButtons="off"
          >
            <Tab icon={<PhoneIcon />} />
            <Tab icon={<FavoriteIcon />} />
            <Tab icon={<PersonPinIcon />} />
            <Tab icon={<HelpIcon />} />
            <Tab icon={<ShoppingBasket />} />
            <Tab icon={<ThumbDown />} />
            <Tab icon={<ThumbUp />} />
          </Tabs>
        </AppBar>
        {this.state.index === 0 &&
          <TabContainer>
            {'Item One'}
          </TabContainer>}
        {this.state.index === 1 &&
          <TabContainer>
            {'Item Two'}
          </TabContainer>}
        {this.state.index === 2 &&
          <TabContainer>
            {'Item Three'}
          </TabContainer>}
        {this.state.index === 3 &&
          <TabContainer>
            {'Item Four'}
          </TabContainer>}
        {this.state.index === 4 &&
          <TabContainer>
            {'Item Five'}
          </TabContainer>}
        {this.state.index === 5 &&
          <TabContainer>
            {'Item Six'}
          </TabContainer>}
        {this.state.index === 6 &&
          <TabContainer>
            {'Item Seven'}
          </TabContainer>}
      </div>
    );
  }
}

ScrollableTabsButtonPrevent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ScrollableTabsButtonPrevent);
