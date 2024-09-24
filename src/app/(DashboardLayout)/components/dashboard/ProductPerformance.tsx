
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip
} from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)//components/shared/DashboardCard';

const products = [
    {
        id: "1",
        name: "Apfel",
        post: "Obst, Frucht",
        pname: "Obst, Frucht",
        priority: "Gut",
        pbg: "success.main",
        budget: "",
    },
    {
        id: "2",
        name: "Hafer",
        post: "Getreide, Korn",
        pname: "Getreide, Korn",
        priority: "Schlecht",
        pbg: "error.main",
        budget: "Durchfall",
    },
    {
        id: "3",
        name: "Weizen",
        post: "Getreide, Korn",
        pname: "Getreide, Korn",
        priority: "Gut",
        pbg: "success.main",
        budget: "",
    },
    {
        id: "4",
        name: "Käse",
        post: "Käse, Milchprodukt",
        pname: "Käse, Milchprodukt",
        priority: "Schlecht",
        pbg: "error.main",
        budget: "",
    },
    {
        id: "5",
        name: "Salami",
        post: "Fleisch",
        pname: "Fleisch",
        priority: "Schlecht",
        pbg: "error.main",
        budget: "",
    },
    {
        id: "6",
        name: "Parmesan",
        post: "Käse, Milchprodukt",
        pname: "Käse, Milchprodukt",
        priority: "Schlecht",
        pbg: "error.main",
        budget: "",
    },
    {
        id: "7",
        name: "Firschkäse",
        post: "Käse, Milchprodukt",
        pname: "Käse, Milchprodukt",
        priority: "Schlecht",
        pbg: "error.main",
        budget: "",
    },
    
];


const ProductPerformance = () => {
    return (

        <DashboardCard title="Nahrungsmittel">
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Id
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Nahrungsmittel
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Kategorie
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Verträglichkeit
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Notiz
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.name}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {product.id}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                {product.name}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                sx={{
                                                    fontSize: "13px",
                                                }}
                                            >
                                                {product.post}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.pname}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        sx={{
                                            px: "4px",
                                            backgroundColor: product.pbg,
                                            color: "#fff",
                                        }}
                                        size="small"
                                        label={product.priority}
                                    ></Chip>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="h6">{product.budget}</Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default ProductPerformance;
