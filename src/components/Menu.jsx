const menu = [
  {
    name: 'PIZZAS',
    items: [
      {
        name: `Margheritta`,
        description: `Basil and fior di latte.`,
        img: require(`../images/pizza.jpg`),
        price: '$28'
      },
      {
        name: `Margheritta`,
        description: `Basil and fior di latte.`,
        img: require(`../images/pizza.jpg`),
        price: '$28'
      },
      {
        name: `Margheritta`,
        description: `Basil and fior di latte.`,
        img: require(`../images/pizza.jpg`),
        price: '$28'
      },
      {
        name: `Margheritta`,
        description: `Basil and fior di latte.`,
        img: require(`../images/pizza.jpg`),
        price: '$28'
      },
      {
        name: `Margheritta`,
        description: `Basil and fior di latte.`,
        img: require(`../images/pizza.jpg`),
        price: '$28'
      },
    ]
  },
  {
    name: 'PASTAS',
    items: [
      {
        name: `Margheritta`,
        description: `Basil and fior di latte.`,
        img: require(`../images/pizza.jpg`),
        price: '$28'
      },
      {
        name: `Margheritta`,
        description: `Basil and fior di latte.`,
        img: require(`../images/pizza.jpg`),
        price: '$28'
      },
    ]
  },
  {
    name: 'STARTERS',
    items: [
      {
        name: `Margheri888tta`,
        description: `Basil and fior di latte.`,
        img: require(`../images/pizza.jpg`),
        price: '$28'
      },
      {
        name: `Margheritta`,
        description: `Basil and fior di latte.`,
        img: require(`../images/pizza.jpg`),
        price: '$28'
      },
    ]
  },
  {
    name: 'SMALL PLATES',
    items: [
      {
        name: `Margheritta`,
        description: `Basil and fior di latte.`,
        img: require(`../images/pizza.jpg`),
        price: '$28'
      },
      {
        name: `Margheritta`,
        description: `Basil and fior di latte.`,
        img: require(`../images/pizza.jpg`),
        price: '$28'
      },
      {
        name: `Margheritta`,
        description: `Basil and fior di latte.`,
        img: require(`../images/pizza.jpg`),
        price: '$28'
      },
      {
        name: `Margheritta`,
        description: `Basil and fior di latte.`,
        img: require(`../images/pizza.jpg`),
        price: '$28'
      },
      {
        name: `Margheritta`,
        description: `Basil and fior di latte.`,
        img: require(`../images/pizza.jpg`),
        price: '$28'
      },
    ]
  },
  {
    name: 'SIDES',
    items: [
      {
        name: `Margheritta`,
        description: `Basil and fior di latte.`,
        img: require(`../images/pizza.jpg`),
        price: '$28'
      },
      {
        name: `Margheritta`,
        description: `Basil and fior di latte.`,
        img: require(`../images/pizza.jpg`),
        price: '$28'
      },
    ]
  },
  {
    name: 'DESSERTS',
    items: [
      {
        name: `Margheritta`,
        description: `Basil and fior di latte.`,
        img: require(`../images/pizza.jpg`),
        price: '$28'
      },
      {
        name: `Margheritta`,
        description: `Basil and fior di latte.`,
        img: require(`../images/pizza.jpg`),
        price: '$28'
      },
    ]
  },
]

const Menu = () => (
  <section className='menu'>
    <div className="menu_header">MENU</div>
    {
      menu.map(item => (
        <div className="menu_view">
          <div className="view_title"><h4>{item.name}</h4></div>
          <div className="view_section">
            {(item.items).map(obj => (
              <div className="card">
                <div className="card_img">
                  <img src={obj.img} alt="" />
                </div>
                <div className="card_text">
                  <div className="card_name">{obj.name}</div>
                  <div className="card_description">{obj.description}</div>
                  <div className="card_price">{obj.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))
    }
  </section>
);

export default Menu;