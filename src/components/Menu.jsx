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
//https://docs.google.com/spreadsheets/d/1Rxt8GZOErNR6ZoAkDkSmYhnx3oVmVFtY-mGXZFMKqyw/edit?usp=sharing
//https://api.sheetbest.com/sheets/e3653b6f-dac4-4a68-b967-79cac00d7b20
const Menu = () => (
  <section id='menu' className='menu'>
    <div className="menu_header">MENU</div>
    {
      menu.map((item, i) => (
        <div className="menu_view" key={i}>
          <div className="view_title"><h4>{item.name}</h4></div>
          <div className="view_section">
            {(item.items).map((obj, i )=> (
              <div className="card" key={i}>
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