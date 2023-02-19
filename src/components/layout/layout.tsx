import React from 'react'
import {  Outlet } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Sidebar from '../sidebar/sidebar';

import Header from "../header/header";
import Footer from "../footer/footer";
import Aside from '../aside/aside';

import "./layout.scss"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: "100vh",


}));

function Layout() {
  return (
      <Grid container sx={{ flexGrow: 1 }} spacing={1} component={"div"} >
        <Sidebar/>
        <Grid container item>

          <Header/> 
           <Grid container spacing={1} sx={{ flexGrow: 1 }}>
              <Grid container
                        item
                        xs={10}
                        sx={{
                            flexGrow: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "30px",
                        }}
                    >
                  <Outlet />
                </Grid>
                <Grid item xs={2} sx={{ height: "100%" }}>
                  <Aside/>
                </Grid>
              </Grid> 
          <Footer/>
        </Grid> 
      </Grid>
  )
}

export default Layout