import FooterFront from '../../shared/frontend/FooterFront'
import NavbarFront from '../../shared/frontend/NavbarFront'

const FrontLayout = ({ children }) => {
  return (
    <div>
      <NavbarFront />
      <main className=''>{children}</main>
      <FooterFront />
    </div>
  )
}

export default FrontLayout
