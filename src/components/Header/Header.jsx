import classes from './Header.module.css'
function Header() {
  return <div className={classes.header}>
      <h1 className={classes.header__title}>SpaceX Ships</h1>
  </div>;
}

export default Header;
