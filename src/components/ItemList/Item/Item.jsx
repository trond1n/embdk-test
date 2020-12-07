/* eslint-disable jsx-a11y/heading-has-content */
import classes from "./Item.module.css";
// import { NavLink } from "react-router-dom";
function Item(props) {
  return (
    <div className={classes.item}>
      {/* <NavLink to={"/model/" + props.id}> */}
      <div className={classes.item__header}>
        <h2 className={classes.item__header_title}>{props.name}</h2>
        <p className={classes.item__arrow}>&#10132;</p>
      </div>
      <div className={classes.item__body}>
        <p className={classes.item__field}>Тип</p>
        <p className={classes.item__value}>{props.type}</p>
        <p className={classes.item__field}>Порт</p>
        <p className={classes.item__value}>{props.port}</p>
      </div>
      {/* </NavLink> */}
    </div>
  );
}

export default Item;
