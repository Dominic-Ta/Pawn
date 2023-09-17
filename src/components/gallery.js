import React, {useState} from 'react';
import { Box, Button, CardActionArea, CardActions, Grid, Card, CardMedia, Modal, Zoom } from '@mui/material';
import {FCateg} from '../constant_vales/landing'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
function Gallery({title, gallerytext, filters, filteritems}) {
    const [openModal, setOpenModal] = useState(Array(filteritems.length).fill(false));
    // const [checked, setChecked] = React.useState(false);

    // const handleChange = () => {
    //   setChecked((prev) => !prev);
    // };
    const handleOpen = (index) => {
        const newOpenModal = [...openModal];
        newOpenModal[index] = true;
        setOpenModal(newOpenModal);
    };

    const handleClose = (index) => {
        const newOpenModal = [...openModal];
        newOpenModal[index] = false;
        setOpenModal(newOpenModal);
    };
    const [selectedFilter, setSelectedFilter] = useState('All');
    const handleFilterSelect = (filter) => {
        setSelectedFilter(filter);
      };
      
    return (
        <div className="container">
            <div className="section-title">
                <h2>Gallery</h2>
            </div>
            <div className="row">
                <div className="col-lg-12">
                <ul id="portfolio-flters">
                    {FCateg.map((filter) => (
                        <li key={filter} onClick={() => handleFilterSelect(filter)} className={`filter-item ${selectedFilter === filter ? 'filter-active' : ''}`} >
                            {filter}
                        </li>
                        ))
                    }
                    </ul>
                </div>
            </div>
            <div className="row portfolio-container m-3 p-3">
                    <Box sx={{ display: 'inherit', alignItems: 'center'}}>
                        <Grid container spacing={1} rowSpacing={3} columnSpacing={{ xs: 1}}>
                            {filteritems.map((filter,index)=>
                                selectedFilter === 'All' || selectedFilter === filter.filter ? (
                                    <Zoom in={true} key={filter.id} style={{ transitionDelay: `${index * 35}ms` }}>
                                        <Grid item xs={12} sm={6} md={3} lg={3}>
                                            <Card variant="outlined" sx={{ maxWidth: '100%' }} color="success">
                                                <div className="img-fluid">
                                                    <CardActionArea>
                                                        <CardMedia onClick={() => handleOpen(index)} component="img" height="50%" mwidth="100%" image={filter.img} alt={filter.imgName} />
                                                        <Modal open={openModal[index]} onClose={() => handleClose(index)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
                                                            <Box sx={style}>
                                                                <CardMedia component="img" height="100%" mwidth="100%" image={filter.img} alt={filter.imgName} />
                                                            </Box>
                                                        </Modal>
                                                    </CardActionArea>
                                                </div>
                                                <CardActions>
                                                    <Button href="https://www.google.com" size="small" color="primary">
                                                        Share
                                                    </Button>
                                                    {/* <Button href="https://www.google.com" size="small" color="primary">
                                                        Copy Link
                                                    </Button> */}
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    </Zoom>
                                ): null
                            )}
                        </Grid>
                    </Box>
            </div>
        </div>
    );
}
export default Gallery;