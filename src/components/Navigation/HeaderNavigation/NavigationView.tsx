import React from "react";
import { Grid } from '@material-ui/core';

import { StyledGrid, NavigationButtonWrap, NavigationTitle } from './NavigationStyle';


function NavigationView({ title, leftComponent, rightComponent }: { title: string, leftComponent: any, rightComponent: any }) {
  return (
    <StyledGrid container alignItems="center">
      <Grid item xs={2}>
        <NavigationButtonWrap>
          {leftComponent}
        </NavigationButtonWrap>
      </Grid>
      <Grid item xs={8}>
        <NavigationTitle>
          {title}
        </NavigationTitle>
      </Grid>
      <Grid item style={{display: "flex", justifyContent: "flex-end"}} xs={2}>
        <NavigationButtonWrap>
          {rightComponent}
        </NavigationButtonWrap>
      </Grid>
    </StyledGrid>
  );
}

export default NavigationView;