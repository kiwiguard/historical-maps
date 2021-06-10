import { Button, Grid, Paper, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";


const CreateMap = () => {

    const initialFormState = {
        name: "",
        startDate: "",
        endDate: "",
        area: "",
        maker: "",
        description: "",
        link: ""
    };

    const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

    const [newMap, setNewMap] = useState(initialFormState)

    const onInputChange = (event) => {
        const { name, value } = event.target;

        setNewMap({ ...newMap, [name]: value });
    }

    const submitForm = () => {
        //console.log(newMap);
        
        fetch("api/add", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMap)
        }).then((res) => res.json())
          .then((data) => setData(data.message))
        

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
            <p>{!data ? "Loading..." : data}</p>
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