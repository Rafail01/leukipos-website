import { Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const NewsPage = () => {
    return (
        <div style={{padding:"20px"}}>
            <Card 
            sx={{
                width: "100%",
                borderRadius: "20px",
            }}
            elevation={9}>
                <TableContainer 
                    sx={{
                        maxHeight: "calc(100vh - 15rem)",
                        maxWidth: "90vw",
                        overflowX: "auto",
                    }}
                >
                    <Table
                    sx={{ minWidth: 750 }}
                    size={"medium"}
                    stickyHeader
                    >
                        <TableHead>
                            <TableRow style={{textAlign: "center", color: "orange"}}>
                                <h2> Ανακοινώσεις</h2>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Ανακοίνωση 1η</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </div>
    )
}


export default NewsPage;