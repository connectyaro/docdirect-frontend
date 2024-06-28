import { Button, Group, Paper } from "@mantine/core"
import { useNavigate } from "react-router"

function  Header(){
    const navigate=useNavigate()
    return <Group justify="space-between" p="xs">
         <Paper> Logo </Paper>
         <Button onClick={()=>navigate("/login")}>Login</Button>
        </Group>
}
export {Header}