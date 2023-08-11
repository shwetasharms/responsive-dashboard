import { ExpandMore, MoreVert } from '@mui/icons-material';
import { Avatar, Card, CardContent, CardHeader, CardMedia, Collapse, IconButton, Modal, Paper, Slide, Typography } from '@mui/material';
import React, { useState } from 'react'

function CreateAssessment() {
    // const { open, onClose } = props;

    // const handleModalClose = () => {
    //   onClose();
    // };

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    const paper = {
        // width:"50px"
    }
    const box = {
        position: 'absolute',
        top: '50px',
        left: '30%',
        left: '30%',

        // transform: 'translate(-50%, -50%)',
        // width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };
    return (
        <>
            <button onClick={openModal}>Open Modal</button>

            <Modal
                open={modalOpen}
                onClose={closeModal}
                aria-labelledby="bottom-to-middle-modal"
                aria-describedby="bottom-to-middle-modal-description"
            >
                <Slide direction="up" in={modalOpen} mountOnEnter unmountOnExit >
                    {/* <Paper> */}
                    <Card style={box}>
                        <CardHeader

                            action={
                                <IconButton aria-label="settings">
                                    <MoreVert

                                    />
                                </IconButton>
                            }
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image="/static/images/cards/paella.jpg"
                            alt="Paella dish"
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
