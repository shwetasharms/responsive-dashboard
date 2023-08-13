import { CardActions, CardContent, CardHeader, Container, IconButton, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Edit, Favorite, Phone, Share } from '@mui/icons-material';
import candidates from "../../assests/images/candidates.svg"
import candidateSource from "../../assests/images/candidateSource.svg"
import totalAssessment from "../../assests/images/totalAssessment.svg"
import totalPurpose from "../../assests/images/totalPurpose.svg"
import dashboard from "../../assests/images/dashboard.svg"
import assessment from "../../assests/images/assessment.svg"
import myLibrary from "../../assests/images/myLibrary.svg"
import admin_meds from "../../assests/images/admin_meds.svg"
import phone from "../../assests/images/phone.svg"
import newAssessments from "../../assests/images/newAssessments.svg"
import math from "../../assests/images/math.svg"
import lp from "../../assests/images/lp.svg"
import share from "../../assests/images/share.svg"





import CreateAssessment from '../assessment/CreateAssessment';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const container = {
  backgroundColor: "aliceblue"
}
const header = {
  backgroundColor: "white",
  borderBottom: 1, borderColor: 'divider',
  borderRadius: "8px",
  display: "flex",
  justifyContent: "space-between",
  // padding: "10px"  
}
const sidebar = {
  height: "100vh",
  backgroundColor: "white",
  // maxWidth: '140px'
}
const innerBox = {
  display: "flex",
  alignItems: "center",
  padding: "0px 20px 0px 20px"
}
const main = {
  backgroundColor: "white",
  borderRadius: "8px",
  height: "80vh"
}
const Item = styled(Paper)(({ theme }) => ({

  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  border: "1px solid #DADCE0",
  borderRadius: 12,
  color: theme.palette.text.secondary,
}));
function Dashboard() {
  const [value, setValue] = React.useState(0);

  const [modalOpen, setModalOpen] = React.useState(false);

  const openModal = () => {
      setModalOpen(true);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // }));

  const heading = {
    fontSize: "20px",
    fontWeight: 600,
    color: "#1C4980",
    padding: "0px 20px 0px 0px"
  }
  return (
    <Grid container spacing={2} style={container}>
      <Grid item xs={12} md={1.5} style={sidebar}>
        <Box
          // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
        >
          <List sx={{ padding: "16px 20px 20px 30px" }}>
            <ListItem sx={{ display: "flex", flexDirection: "column" }}>
              <img src={dashboard} />
              <Typography sx={{ fontSize: "12px" }}> Dashboard</Typography>
            </ListItem>
            <ListItem sx={{ display: "flex", flexDirection: "column" }}>
              <img src={assessment} />
              <Typography sx={{ fontSize: "12px" }}> Assessment</Typography>
            </ListItem>
            <ListItem sx={{ display: "flex", flexDirection: "column" }}>
              <img src={myLibrary} />
              <Typography sx={{ fontSize: "12px" }}> My Library</Typography>
            </ListItem>
            <ListItem sx={{ display: "flex", flexDirection: "column", padding: "10px 20px 10px 20px", border: "2px solid #0073E6", borderRadius: "8px", }} selected>
              <img src={admin_meds} />
              <Typography sx={{ fontSize: "12px" }}> Round Status</Typography>
            </ListItem>
          </List>

        </Box>
      </Grid>
      <Grid item xs={12} md={10.5} >
        <Grid sx={main}>
          <Grid >
            <Box sx={header}>
              <Box sx={innerBox}>
                <Typography style={heading}>Assessment</Typography> <Divider orientation="vertical" variant="middle" flexItem />
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
                  <Tab label="My Assessments" {...a11yProps(0)} sx={{ textTransform: "none" }} />
                </Tabs>
              </Box>
              <img src={phone} />
            </Box>
          </Grid>
          <Grid>
            <Box sx={{ padding: "20px" }}>
              <Typography sx={{ fontSize: "18px", color: "#1C4980", paddingBottom: "16px" }}>Assessment Overview</Typography>



              <Box > 
                <Grid container sx={{ height:{lg:130,xs:"100%"}, border: "1px solid #DADCE0", borderRadius: "12px" }}>

                  <Grid xs={6} sm={12} md={4} lg={1.5} order={{ xs: 1, sm: 1 ,lg:1}} sx={{height:"100%",borderRight:"1px solid #DADCE0 "}}>
                <Grid item   sx={{width:"100%",height:"100%",paddingLeft:"20px",display:"grid",alignContent:"Center",justifyContent:"left"}}>
                  <Typography variant='body2' sx={{ fontSize: "14px", color: "#1C4980" }}>Total Assessment</Typography>

                      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <img src={totalAssessment} alt="total Assessment" />
                        <CardContent sx={{ flex: '1 0 auto' }}>
                          <Typography style={{ fontSize: "20px", fontWeight: 600 }}>
                            34
                          </Typography>
                        </CardContent>
                      </Box>
                    </Grid>
                  </Grid>

                <Grid xs={12} sm={12} md={4} lg={4} order={{ xs: 3, sm: 3 ,lg:2}} sx={{height:"100%", borderRight: { lg: '1px solid #DADCE0' },borderTop: { lg:'none', xs: '1px solid #DADCE0' }}}>
                <Grid item    sx={{height:"100%",paddingLeft:"20px",display:"grid",alignContent:"center" ,justifyContent:"start"}}>
                  <Typography variant='body2' sx={{ fontSize: "14px" }}>Candidates Source</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <img src={candidates} alt="candidates" />
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography variant="body2" style={{ fontSize: "20px", fontWeight: 600, display: "flex", alignItems: "center" }}>
                        11,145<Typography style={{ fontSize: "12px", color: "#05C165", paddingLeft: "2px" }}>+89</Typography>
                      </Typography>
                      <Typography style={{ fontSize: "12px" }}>
                        Total Candidate
                      </Typography>
                    </CardContent>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography variant="body2" style={{ fontSize: "20px", fontWeight: 600, display: "flex", alignItems: "center" }}>
                        1,14<Typography style={{ fontSize: "12px", color: "#05C165", paddingLeft: "2px" }}>+89</Typography>
                      </Typography>
                      <Typography style={{ fontSize: "12px" }}>
                        Who Attempt
                      </Typography>
                    </CardContent>
                  </Box>
                </Grid>
                </Grid>


                <Grid xs={12} sm={12} md={5} lg={5} order={{ xs: 4, sm: 4,lg:3}} sx={{height:"100%",borderRight: { lg: '1px solid #DADCE0' },borderTop: { lg:'none', xs: '1px solid #DADCE0' }}}>
                <Grid item   sx={{width:"100%",height:"100%",paddingLeft:"20px",display:"grid",alignContent:"Center",justifyContent:"start"}}>
                  <Typography variant='body2' sx={{ fontSize: "14px" }}>Candidates Source</Typography>

                      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <img src={candidateSource} alt="candidateSource" />
                        <CardContent sx={{ flex: '1 0 auto' }}>
                          <Typography variant="body2" style={{ fontSize: "20px", fontWeight: 600, display: "flex", alignItems: "center" }}>
                            11,000<Typography style={{ fontSize: "12px", color: "#05C165", paddingLeft: "2px" }}>+89</Typography>
                          </Typography>
                          <Typography style={{ fontSize: "12px" }}>
                            E-mail
                          </Typography>
                        </CardContent>
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <CardContent sx={{ flex: '1 0 auto' }}>
                          <Typography variant="body2" style={{ fontSize: "20px", fontWeight: 600, display: "flex", alignContent: "center" }}>
                            145<Typography style={{ fontSize: "12px", color: "#05C165", paddingLeft: "2px" }}>+89</Typography>
                          </Typography>
                          <Typography style={{ fontSize: "12px" }}>
                            Social Share
                          </Typography>
                        </CardContent>
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <CardContent sx={{ flex: '1 0 auto' }}>
                          <Typography variant="body2" style={{ fontSize: "20px", fontWeight: 600, display: "flex", alignItems: "center" }}>
                            145<Typography style={{ fontSize: "12px", color: "#05C165", paddingLeft: "2px" }}>+89</Typography>
                          </Typography>
                          <Typography style={{ fontSize: "12px" }}>
                            Unique Link
                          </Typography>
                        </CardContent>
                      </Box>
                    </Grid>
                  </Grid>


                <Grid xs={6} sm={6}  md={6} lg={1.5} order={{ xs: 2, sm: 2 ,lg:4}} sx={{height:"100%"}}>
                <Grid item   sx={{width:"100%",height:"100%",paddingLeft:"20px",display:"grid",alignItems:"Center",justifyContent:"start"}} >
                  <Typography variant='body2' sx={{ fontSize: "14px" }}>Total Purpose</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <img src={totalAssessment} alt="total Assessment" />
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography variant="body2" style={{ fontSize: "20px", fontWeight: 600 }}>
                        34
                      </Typography>
                    </CardContent>
                  </Box>
                </Grid>
                </Grid>

                </Grid>
              </Box>

            </Box>
            <Box sx={{ padding: "0px 20px 20px 20px " }}>
              <Typography sx={{ fontSize: "18px", color: "#1C4980", paddingBottom: "16px" }}>My Assessment</Typography>
              <Box>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4} >
                    <Item sx={{ backgroundColor: "#F6F8FA", textAlign: "center", p: 4 }}>
                      <img src={newAssessments} alt="total Assessment" onClick={openModal} style={{cursor:"pointer"}}/>
                      <Typography variant='body2' sx={{ fontSize: "18px", color: "#1C4980", fontWeight: 500 }}>New Assessment</Typography>
                      <Typography variant='body2' sx={{ fontSize: "14.52px", color: "#1C4980", marginTop: 2 }}>From here you can add questions of multiple types like MCQ's, subjective (text pr paragrapgh)!</Typography>
                      {/* <Typography variant='body2'>Total Assessment</Typography> */}
                    </Item>

                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Item sx={{ p: 2 }}>
                      <img src={math} alt="total Assessment" />
                      <Typography variant='body2' sx={{ fontSize: "18px", color: "#1C4980", fontWeight: 500, mt: 1 }}>Math Assessment</Typography>
                      <Typography variant='body2' sx={{ fontSize: "14.52px", color: "#1C4980", pb: 3, pt: 1 }}>Job</Typography>
                      <Divider />
                      <CardActions disableSpacing sx={{ justifyContent: 'space-between' }}>
                        <Box sx={{ display: "flex" }}>
                          <Box sx={{paddingRight:2}}>
                            <Typography variant='body2' sx={{ fontSize: "18px", color: "#1C4980", fontWeight: 500, mt: 1 }}>00</Typography>
                            <Typography variant='body2' sx={{ fontSize: "14.52px", color: "#1C4980" }}>Duration</Typography>
                          </Box>
                          <Box>
                            <Typography variant='body2' sx={{ fontSize: "18px", color: "#1C4980", fontWeight: 500, mt: 1 }}>00</Typography>
                            <Typography variant='body2' sx={{ fontSize: "14.52px", color: "#1C4980" }}>Questions</Typography>
                          </Box>
                        </Box>
                        <Box >
                          <img src={share} style={{paddingRight:8}}/>
                          <img src={lp} />
                        </Box>
                      </CardActions>
                    </Item>
                  </Grid>
                  <Grid item xs={12} md={4} >
                    <Item sx={{ p: 2 }}>
                      <img src={math} alt="total Assessment" />
                      <Typography variant='body2' sx={{ fontSize: "18px", color: "#1C4980", fontWeight: 500, mt: 1 }}>Math Assessment</Typography>
                      <Typography variant='body2' sx={{ fontSize: "14.52px", color: "#1C4980", pb: 3, pt: 1 }}>Job</Typography>
                      <Divider />
                      <CardActions disableSpacing sx={{ justifyContent: 'space-between' }}>
                        <Box sx={{ display: "flex" }}>
                          <Box sx={{paddingRight:2}}>
                            <Typography variant='body2' sx={{ fontSize: "18px", color: "#1C4980", fontWeight: 500, mt: 1 }}>00</Typography>
                            <Typography variant='body2' sx={{ fontSize: "14.52px", color: "#1C4980" }}>Duration</Typography>
                          </Box>
                          <Box>
                            <Typography variant='body2' sx={{ fontSize: "18px", color: "#1C4980", fontWeight: 500, mt: 1 }}>00</Typography>
                            <Typography variant='body2' sx={{ fontSize: "14.52px", color: "#1C4980" }}>Questions</Typography>
                          </Box>
                        </Box>
                        <Box >
                          <img src={share} style={{paddingRight:8}} />
                          <img src={lp} />
                        </Box>
                      </CardActions>
                    </Item>
                  </Grid>
                </Grid></Box>
              <CreateAssessment modalOpen={modalOpen} setModalOpen={setModalOpen}/>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Dashboard
