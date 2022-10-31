import React from 'react';
import './App.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function App() {
  return (
    <div className="App">
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Setup</TableCell>
                        <TableCell>Punchline</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            Why do C# and Java developers keep breaking their keyboards?
                        </TableCell>
                        <TableCell>
                            Because they use a strongly typed language.
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  );
}

export default App;
