const menu_pizzas = [
  {
    id: 1,
    name: `Margheritta`,
    description: `Basil and fior di latte.`,
    img: require(`../images/pizza.jpg`),
    price: '$28'
  },
  {
    id: 1,
    name: `Margheritta`,
    description: `Basil and fior di latte.`,
    img: require(`../images/pizza.jpg`),
    price: '$28'
  },
  {
    id: 1,
    name: `Margheritta`,
    description: `Basil and fior di latte.`,
    img: require(`../images/pizza.jpg`),
    price: '$28'
  },
  {
    id: 1,
    name: `Margheritta`,
    description: `Basil and fior di latte.`,
    img: require(`../images/pizza.jpg`),
    price: '$28'
  },
  {
    id: 1,
    name: `Margheritta`,
    description: `Basil and fior di latte.`,
    img: require(`../images/pizza.jpg`),
    price: '$28'
  },
  {
    id: 1,
    name: `Margheritta`,
    description: `Basil and fior di latte.`,
    img: require(`../images/pizza.jpg`),
    price: '$28'
  },
  {
    id: 1,
    name: `Margheritta`,
    description: `Basil and fior di latte.`,
    img: require(`../images/pizza.jpg`),
    price: '$28'
  },
  {
    id: 1,
    name: `Margheritta`,
    description: `Basil and fior di latte.`,
    img: require(`../images/pizza.jpg`),
    price: '$28'
  },
  {
    id: 1,
    name: `Margheritta`,
    description: `Basil and fior di latte.`,
    img: require(`../images/pizza.jpg`),
    price: '$28'
  },
]

const Menu = () => (
    <section className='menu'>
        <div className="menu_header">MENU</div>
        <div className="menu_pizzas">
            <div className="menu_title"><h4>PIZZAS</h4></div>
            <div className="pizzas_section">
                {menu_pizzas.map(item => (
                    <div className="pizza">
                    <div className="pizza_img">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="pizza_text">
                        <div className="pizza_name">{item.name}</div>
                        <div className="pizza_description">{item.description}</div>
                        <div className="pizza_price">{item.price}</div>
                    </div>
                </div>
                ))}
            </div>
        </div>
        {/* <div className="menu_pizzas">
            <div className="menu_title">PASTAS</div>
        </div>
        <div className="menu_pizzas">
            <div className="menu_title">STARTERS</div>
        </div>
        <div className="menu_pizzas">
            <div className="menu_title">SIDES</div>
        </div>
        <div className="menu_pizzas">
            <div className="menu_title">SMALL PLATES</div>
        </div>
        <div className="menu_pizzas">
            <div className="menu_title">DESSERTS</div>
        </div> */}
    </section>
);

export default Menu;