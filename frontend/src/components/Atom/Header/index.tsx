import { AppBar } from "@material-ui/core";
import { useColors } from "../../../assets/mui-styles/colors";

const Header = () => {
    const colors = useColors();

    return <AppBar className={`${colors.white}`}>text</AppBar>
}

export default Header;