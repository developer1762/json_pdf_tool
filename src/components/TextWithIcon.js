import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import { Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

export default function TestWithIcon(props) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                borderRadius: 1,
                alignItems: "center",
                border: "0px solid blue",
            }}
        >
            {!props.icon!==undefined? props.icon : <EmailIcon />}
            <Typography variant="caption">{props.text}</Typography>

        </Box>
    );
}
