import { Cancel, Close, ExpandMore, MoreVert } from '@mui/icons-material';
import { Avatar, Card, CardContent, CardHeader, CardMedia, Collapse, FormControl, IconButton, InputAdornment, MenuItem, Modal, OutlinedInput, Paper, Select, Slide, Typography } from '@mui/material';
import React, { useState } from 'react'

function CreateAssessment(props) {
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

    const closeModal = () => {
        props.setModalOpen(false);
    };

    const box = {
        position: 'absolute',
        top: '50px',
        left: '30%',
        left: '30%',
        width: "591px",
        borderRadius:"8px",
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
                                    <Close onClick={closeModal}
                                    />
                                </IconButton>
                            }
                            title={<Typography sx={{ color: "#1C4980", fontSize: "20px" }}>Create new assessment</Typography>}
                            sx={{ border: " 1px solid #DADCE0" }}
                        />

                        <CardContent>
                            <FormControl sx={{ width: "100%" }} variant="outlined">
                                <Typography sx={{ fontSize: "16px", color: "#1C4980", mb: 1 }}>Name of assessment</Typography>
                                <OutlinedInput
                                    id="outlined-adornment-weight"
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        'aria-label': 'weight',
                                    }}
                                    placeholder="Type Here"
                                    sx={{ width: "100%" }}
                                />
                            </FormControl>
                            <FormControl sx={{ width: "100%" ,mt:2}}>
                            <Typography sx={{ fontSize: "16px", color: "#1C4980", mb: 1 }}>Purpose of the  test is </Typography>
                                <Select
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        Select
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl sx={{ width: "100%",mt:2 }}>
                            <Typography sx={{ fontSize: "16px", color: "#1C4980", mb: 1 }}>Purpose of the  test is </Typography>

                                <Select
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        Select
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
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
