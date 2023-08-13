import { ExpandMore, MoreVert } from '@mui/icons-material';
import { Avatar, Card, CardContent, CardHeader, CardMedia, Collapse, IconButton, Modal, Paper, Slide, Typography } from '@mui/material';
import React, { useState } from 'react'

function CreateAssessment(props) {
    // const { open, onClose } = props;

    // const handleModalClose = () => {
    //   onClose();
    // };

    const closeModal = () => {
        props.setModalOpen(false);
    };
   
    const box = {
        position: 'absolute',
        top: '50px',
        left: '30%',
        left: '30%',
        width:"591px",
        // transform: 'translate(-50%, -50%)',
        // width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };
    return (
        <>
           

            <Modal
                open={props.modalOpen}
                onClose={closeModal}
                aria-labelledby="bottom-to-middle-modal"
                aria-describedby="bottom-to-middle-modal-description"
            >
                <Slide direction="up" in={props.modalOpen} mountOnEnter unmountOnExit >
                    {/* <Paper> */}
                    <Card style={box}>
                        <CardHeader
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVert
                                    />
                                </IconButton>
                            }
                            title={<Typography sx={{color:"#1C4980",fontSize:"20px"}}>Create new assessment</Typography>}
                            sx={{border:" 1px solid #DADCE0"}}
                        />
                      
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography>
                        </CardContent>


                    </Card>
                    {/* </Paper> */}
                </Slide>
            </Modal>
        </>
    )
}

export default CreateAssessment
