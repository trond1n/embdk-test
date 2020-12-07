import Item from './Item/Item';
import classes from './ItemList.module.css'
const shipsData = [
    {
      id: 1,
      name: "GO Ms Tree",
      image: "https://i.imgur.com/MtEgYbY.jpg",
      type: "High Speed Craft",
      home_port: "Port Canaveral",
    },
    {
      id: 2,
      name: "GO Pursuit",
      image: "https://i.imgur.com/5w1ZWre.jpg",
      type: "Cargo",
      home_port: "Port Canaveral",
    },
    {
      id: 3,
      name: "American Champion",
      image: "https://i.imgur.com/woCxpkj.jpg",
      type: "Tug",
      home_port: "Port of Los Angeles",
    },
  ];
function ItemList() {
    let shipItems = shipsData.map((ship) => (
        <Item name={ship.name} type={ship.type} value={ship.value} id={ship.id} port={ship.home_port}  />
      ));
  return <div className={classes.item__list}>
      <div>{shipItems}</div>
  </div>;
}

export default ItemList;
