import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
// import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import SubCard from '../../ui-component/cards/SubCard';
import TextField from '@mui/material/TextField';
import { addAnimal } from '../../api-service/api';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

export default function AddAnimals() {
  const [open, setOpen] = React.useState(false);
  const [animal, setAnimal] = React.useState({
    name: '',
    tag_id: '',
    breed: '',
    dob: '',
    weight: ''
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setAnimal({
        ...animal,
        [e.target.name]: e.target.value,
    });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        addAnimal(animal)
        .then(data =>{
            console.log('Success', data);
            handleClose();
        });
    };

  return (
    <div>
      <Button onClick={handleOpen}>New Animal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500
          }
        }}
      >
        <Fade in={open}>
          <SubCard title="Add New Animals" sx={style}>
            {/* <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}

            <form onSubmit={handleSubmit}>
              <TextField name="name" label="Name" value={animal.name} onChange={handleChange} fullWidth />
              <TextField name="tag_id" label="Tag ID" value={animal.tag_id} onChange={handleChange} fullWidth />
              <TextField name="breed" label="Breed" value={animal.breed} onChange={handleChange} fullWidth />
              <TextField
                name="dob"
                label="Date of Birth"
                type="date"
                value={animal.dob}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
              <TextField name="weight" label="Weight in Kgs" type="number" value={animal.weight} onChange={handleChange} fullWidth />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </SubCard>
        </Fade>
      </Modal>
    </div>
  );
}
