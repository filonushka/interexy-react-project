import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

function DropDown() {
  return (
    <PopupState variant="popper" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <Button
            sx={{ border: "1px solid #f2f3f4", color: "#f2f3f4" }}
            size="medium"
            {...bindTrigger(popupState)}
          >
            Dropdown
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Item 1</MenuItem>
            <MenuItem onClick={popupState.close}>Item 2</MenuItem>
            <MenuItem onClick={popupState.close}>Item 3</MenuItem>
          </Menu>
        </>
      )}
    </PopupState>
  );
}

export default DropDown;
