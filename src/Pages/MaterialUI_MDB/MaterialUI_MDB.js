import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from  '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import LeftPanel from "../../Components/LeftPanel/LeftPanel";
import RightPanel from "../../Components/RightPanel/RightPanel";

function rand() {
    return(Math.round(Math.random() * 20) - 10);
  }

  function getModalStyle() {
    const top = 20;
    const left = 20;
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    }
  }
  
const useStyles = makeStyles(theme =>({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
    paper: {
        position: 'absolute',
        width: '450px',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
         padding: theme.spacing(2, 4, 3)
    }
  })
    );

    export default function MaterialUI_MDB() {
        const classes = useStyles();

        const [modalStyle] = React.useState(getModalStyle);

        const [open, setOpen] = React.useState(false);

        const handleOpen = () => {
            setOpen(true);
          };

          const handleClose = () => {
            setOpen(false);
          }


        return(
            <div className="container wrapper">
        {/*Header*/}
        <Header />
        <br />
        {/*MainContainer*/}
        <div className="row">
          {/*LeftPanel*/}
          <LeftPanel />
          {/*Container*/}
          {/*<Container */}
          <div className="col-sm-6 ">
            <div className="centertxt">
              <div className="row">
                <div className="col-sm-12">
                  <h1>MaterialUI_MD</h1>
                  
                  <Button variant="contained" color="primary" onClick={handleOpen}> Open Modal </Button>

                  <Modal
                              aria-labelledby="modal-title"
                              aria-describedby="modal-description"
                              open={open}
                              onClose={handleClose}
                            >
                              <div style={modalStyle} className={classes.paper}>
                              <h3> Material ui:</h3>
                              <ul>
                                <li>- it is a javascript framework, which is especially designed for reactjs; the material ui is a react ui framework;</li>
                                <li>- and this framework even works with other frameworks also (reactjs, vuejs, angular)</li>
                                <li>- let's create the sample: modal dialog box, grid table, form design, accordion, etc.,</li>
                                <li>- material-ui package - npm install --save @material-ui</li>
                                <li>- modal dialog box and form design</li>
                              </ul>
                              </div>
                            </Modal>
                </div>
              </div>
            </div>
          </div>

          {/*RightPanel*/}
          <RightPanel />
        </div>
        <br />
        {/*Footer*/}
        <Footer />
      </div>

        );
    }


   
