import { ButtonGroup } from "@mui/material";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import {Button} from "@mui/material";
const Component=styled(ButtonGroup)`
margin-top:30px;
`
const StyledButton=styled(Button)`
border-radius: 50%;
`


const ButtonGroups=()=>{
return(
    
    <Component>
<StyledButton>-
</StyledButton>
<Button disabled>1
</Button>
<StyledButton>+
</StyledButton>


    </Component>
   
)
}
export default ButtonGroups;