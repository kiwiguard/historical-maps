import { Grid, Paper, TextField } from "@material-ui/core";
import { useState } from "react";

const CreateMap = () => {

    const initialFormState = {
        name: "",
        startdate: "",
        endDate : "",
        area : "",
        maker : "",
        description : "",
        link : "",
        
    };

    const [newMap, setNewMap] = useState(initialFormState)

    const onInputChange = (event) => {
        const { name, value } = event.target;

        setNewMap({...newMap, [name]: value});
    }

    

    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault();
            }}>
                <Paper >
                    <Grid
                        container
                        direction="column"
                        alignItems="flex-start"
                        spacing={2}
                    >
                        <Grid item>
                            <TextField 
                             label = "Name"
                             name= "name"
                             value={newMap.name}
                             onChange={onInputChange}
                            />
                        </Grid>

                    </Grid>
                </Paper>
            </form>
        </div>
    )
}

export function Admin() {
    return (
        <>
        <h2>Create New Map</h2>
        { CreateMap() }
        </>
    )
}