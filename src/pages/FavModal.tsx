import React, { useContext } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { JokeTable } from '../components/JokeTable';
import { FavoriteContext } from './util';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

type Props = {
    isOpen: boolean;
    dismiss: () => void;
};
export function FullScreenDialog({ isOpen, dismiss }: Props) {
    const { favorite } = useContext(FavoriteContext);
    return (
        <div>
            <Dialog fullScreen open={isOpen} TransitionComponent={Transition}>
                <Container maxWidth="lg">
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static">
                            <Toolbar>
                                <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{ flexGrow: 1 }}
                                >
                                    My Favorite
                                </Typography>
                                <Button color="inherit" onClick={dismiss}>
                                    X
                                </Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        {favorite.length > 0 ? (
                            <JokeTable
                                jokes={favorite}
                                id="jokes-table"
                                loading={false}
                            />
                        ) : (
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1 }}
                            >
                                No Favorite, Please go back
                            </Typography>
                        )}
                    </Box>
                </Container>
            </Dialog>
        </div>
    );
}
