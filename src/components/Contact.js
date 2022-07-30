import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import { blue } from '@mui/material/colors';

const emails = ['najjarmedd@gmail.com', 'LinkedIn'];

function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = () => {
        onClose();
    };

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
        handleListItemClick();
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Contact :</DialogTitle>
            <List sx={{ pt: 0 }}>

                <ListItem button onClick={() => handleListItemClick()}>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                            <PersonIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="najjarmedd@gmail.com" />
                </ListItem>
                <ListItem button onClick={() => openInNewTab('https://www.linkedin.com/in/mohammed-najjar-3091a71a5/')}>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                            <PersonIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="LinkedIn" />
                </ListItem>
            </List>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default function Contact() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div className='text-center' style={{
            position: 'relative',
            top: 100
        }}>
            <h3 className='font-semibold text-lg'>
                Contact The Developer
            </h3>
            <br />
            <Button variant="outlined" onClick={handleClickOpen}>
                Informations
            </Button>
            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
        </div >
    );
}
