import { useEffect, useState } from 'react';
import axios from 'axios';

function transformData(data) {
  const grouped = {};

  data.forEach(item => {

    const { category, name, description, price } = item;

    if (!grouped[category]) {
      grouped[category] = [];
    }

    grouped[category].push({
      name,
      description,
      img: item.img_url,
      price
    });
  });

  return Object.keys(grouped).map(category => ({
    name: category,
    items: grouped[category]
  }));
}
//https://docs.google.com/spreadsheets/d/1Rxt8GZOErNR6ZoAkDkSmYhnx3oVmVFtY-mGXZFMKqyw/edit?usp=sharing
//https://api.sheetbest.com/sheets/e3653b6f-dac4-4a68-b967-79cac00d7b20
const Menu = () => {

  const [menuItems, setMenuItems] = useState([]);

  const apiResponse = async () => {
    await axios.get('https://api.sheetbest.com/sheets/e3653b6f-dac4-4a68-b967-79cac00d7b20')
      .then((response) => {
        setMenuItems(transformData(response.data));
      })
      .catch(error => {
        console.error(`error1`);
      });
  }

  useEffect(() => {
    apiResponse()
  }, []);

  return (
    <section id='menu' className='menu'>
      <div className="menu_header">MENU</div>
      {
        menuItems.map((item, i) => (
          <div className="menu_view" key={i}>
            <div className="view_title"><h4>{item.name}</h4></div>
            <div className="view_section">
              {
                (item.items).map((obj, i) => (
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
                ))
              }
            </div>
          </div>
        ))
      }
      {/* {
        menu.map((item, i) => (
          <div className="menu_view" key={i}>
            <div className="view_title"><h4>{item.name}</h4></div>
            <div className="view_section">
              {(item.items).map((obj, i) => (
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
      } */}
    </section>
  )
};

export default Menu;