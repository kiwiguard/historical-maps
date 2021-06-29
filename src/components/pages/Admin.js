import { Button, Grid, Paper, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";


const CreateMap = () => {

    const initialFormState = {
        id: "",
        name: "",
        startDate: "",
        endDate: "",
        area: "",
        maker: "",
        description: "",
        link: "",
        path: ""
    };

    const [data, setData] = useState(null);    

    useEffect(() => {
        fetch("mapModels.json")
            .then((res) => res.json())
            .then((data) => {                
                console.log(data.length);
                const id = 'id';
                const newCount = data.length + 1;
                setNewMap(prevMap => ({
                    ...prevMap,
                    [id]: newCount
                }));
            });
    }, []);

    const [newMap, setNewMap] = useState(initialFormState)
    

    const onInputChange = (event) => {
        const { name, value } = event.target;

        setNewMap({ ...newMap, [name]: value });
        generateMapData();

    }

    const generateMapData = () => {
        const path = 'path';
        const minimap = 'minimap';

        setNewMap(prevMap => ({
            ...prevMap,
            [path]: `../maps/${prevMap.name}/{z}/{x}/{y}.jpg`,
            [minimap]: `images/minimaps/${prevMap.name}.jpg`,

        }));
        console.log(newMap);

    }

    const submitForm = () => {
        //console.log(newMap);
        generateMapData();

        fetch("https://himaps.org/server/server.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMap)
        }).then((res) => res.json())
            .then((data) => {
                setData('Map was added');
            })


    }


    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault();
            }}>
                <Paper style={{ padding: 16 }}>
                    <Grid
                        container
                        direction="column"
                        alignItems="flex-start"
                        spacing={2}
                    >
                        <Grid item>
                            <TextField
                                label="Name"
                                name="name"
                                value={newMap.name}
                                onChange={onInputChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Start Date"
                                name="startDate"
                                value={newMap.startDate}
                                onChange={onInputChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="End Date"
                                name="endDate"
                                value={newMap.endDate}
                                onChange={onInputChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Area"
                                name="area"
                                value={newMap.area}
                                onChange={onInputChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Maker"
                                name="maker"
                                value={newMap.maker}
                                onChange={onInputChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Description"
                                name="link"
                                value={newMap.link}
                                onChange={onInputChange}
                            />
                        </Grid>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => submitForm()}
                        >
                            Add new map
                        </Button>
                    </Grid>
                </Paper>
            </form>
            <p>{!data ? "" : data}</p>            
        </div>

    )
}

export function Admin() {
    return (
        <>
            <h2>Create New Map</h2>
            { CreateMap()}
        </>
    )
}