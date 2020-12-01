import React from "react";
import { Grid } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import './css/HeaderNavigation.css';


function HeaderNavigation({ title, leftComponent, rightComponent }: { title: string, leftComponent: any, rightComponent: any }) {
  return (
    <Grid container alignItems="center" className="navigation">
      <Grid item xs={2}>
        <div className="navigation__button">
          {leftComponent}
        </div>
      </Grid>
      <Grid item xs={8}>
        <h1 className="navigation__title">
          {title}
        </h1>
      </Grid>
      <Grid item style={{display: "flex", justifyContent: "flex-end"}} xs={2}>
        <div className="navigation__button">
          {rightComponent}
        </div>
      </Grid>
    </Grid>
  );
}

export default HeaderNavigation;