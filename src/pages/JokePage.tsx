import React, { useState } from 'react';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Joke, JokeQuantity, JokeType } from '../types';
import { getUrl } from '../lib/api';
import useQuery from '../hooks/useQuery';
import { JokeTable } from '../components/JokeTable';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export function JokePage() {
    const [category, setCategory] = useState<JokeType>();
    const [quantity, setQuantity] = useState<JokeQuantity>('random');
    const url = getUrl(quantity, category);
    const { data, loading, error, refetch } = useQuery<Joke>(url);

    const buttons = [
        <Button
            key="all"
            variant={!!category ? 'outlined' : 'contained'}
            onClick={() => setCategory(undefined)}
        >
            All
        </Button>,
        <Button
            key="general"
            variant={category === 'general' ? 'contained' : 'outlined'}
            onClick={() => setCategory('general')}
        >
            General
        </Button>,
        <Button
            variant={category === 'programming' ? 'contained' : 'outlined'}
            key="programming"
            onClick={() => setCategory('programming')}
        >
            Programming
        </Button>,
    ];

    return (
        <Container maxWidth="lg">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            Jokes Generator
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',

                    '& > *': {
                        m: 1,
                    },
                }}
            >
                <ButtonGroup size="small" aria-label="filter-buttons">
                    {buttons}
                </ButtonGroup>
                <FormControlLabel
                    control={
                        <Switch
                            checked={quantity === 'random'}
                            onChange={() =>
                                setQuantity((quantityMode) =>
                                    quantityMode === 'random' ? 'ten' : 'random'
                                )
                            }
                            inputProps={{
                                'aria-label': 'one-line-mode-switch',
                            }}
                        />
                    }
                    label="One Line Mode"
                />
            </Box>

            {loading && (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <CircularProgress
                        aria-describedby="jokes-table"
                        aria-label="loading-jokes"
                    />
                </Box>
            )}
            {error && <Alert severity="warning">{error}</Alert>}
            {data && (
                <JokeTable jokes={data} id="jokes-table" loading={loading} />
            )}
            {!loading && (
                <Box
                    sx={{
                        marginY: 2,
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Button variant="contained" onClick={refetch}>
                        Refresh
                    </Button>
                </Box>
            )}
        </Container>
    );
}
