import { Link, Typography, Stack } from '@mui/material';

const AuthFooter = () => {
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" component={Link} href='#' >
            SmartFARM Technology
        </Typography>
        <Typography variant="subtitle2" component={Link} href='#' >
           &copy; 2024 smartfarm.com
        </Typography>
    </Stack>
}

export default AuthFooter;