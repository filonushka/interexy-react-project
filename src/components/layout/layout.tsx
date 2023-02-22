import React from 'react'
import {Outlet} from "react-router-dom";
import {Grid} from '@mui/material';
import Sidebar from '../sidebar/sidebar';
import Header from "../header/header";
import Footer from "../footer/footer";
import Aside from '../aside/aside';

import "./layout.scss"

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
                            flex: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "30px",
                        }}
                    >
                  <Outlet />
                </Grid>
                <Grid item xs={2} sx={{ minHeight: "100vh" }}>
                  <Aside/>
                </Grid>
            </Grid> 

          <Footer/>
        </Grid> 
      </Grid>
  )
}

export default Layout