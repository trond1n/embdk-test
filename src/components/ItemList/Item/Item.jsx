/* eslint-disable jsx-a11y/heading-has-content */
import classes from "./Item.module.css";
import { NavLink } from "react-router-dom";
function Item(props) {
  return (
    <div className={classes.item}>
      {/* <NavLink to={"/model/" + props.id}> */}
        <div className={classes.item__header}>
          <h2>{props.name}</h2>
          <p>&#10132</p>
        </div>
        <div className={classes.item__body}>
          <div className={classes.item__type}>
            <p className={classes.item__type_field}>Тип</p>
            <p className={classes.item__type_value}>{props.type}</p>
          </div>
          <div className={classes.item__port}>
            <p className={classes.item__port_field}>Порт</p>
            <p className={classes.item__port_value}>{props.port}</p>
          </div>
        </div>
      {/* </NavLink> */}
    </div>
  );
}

export default Item;
