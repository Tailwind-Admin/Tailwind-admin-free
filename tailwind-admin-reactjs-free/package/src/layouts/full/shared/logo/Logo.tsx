
import { Link } from 'react-router'
import LogoIcon from 'src/assets/images/logos/logo-icon.svg'

const Logo = () => {
    return (
        <Link to={'/'}>
            <img src={LogoIcon} alt="logo" />
        </Link>
    )
}

export default Logo
