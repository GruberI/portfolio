import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import image1 from './Images/book1.jpg'
import image2 from './Images/book2.jpg'
import image3 from './Images/book3.jpg'
import image4 from './Images/book4.jpg'
import image5 from './Images/book5.jpg'
import image6 from './Images/book6.jpg'
import image7 from './Images/book7.jpg'
import image8 from './Images/book8.jpg'
import image9 from './Images/book9.jpg'
import image10 from './Images/book10.jpg'
import image11 from './Images/book11.jpg'
import image12 from './Images/book12.jpg'
import image13 from './Images/book13.jpg'
import image14 from './Images/book14.jpg'

const Books = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;

    return (
        <div>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={20}
        leftChevron={'<'}
        rightChevron={'>'}
        outsideChevron
        chevronWidth={chevronWidth}
      >
      <img src={image1} alt="image1" style={{ height: 300}}/>
      <img src={image2} alt="image2" style={{ height: 300}}/>
      <img src={image3} alt="image3" style={{ height: 300}}/>
      <img src={image4} alt="image4" style={{ height: 300}}/>
      <img src={image5} alt="image5" style={{ height: 300}}/>
      <img src={image6} alt="image6" style={{ height: 300}}/>
      <img src={image7} alt="image7" style={{ height: 300}}/>
      <img src={image8} alt="image8" style={{ height: 300}}/>
      <img src={image9} alt="image9" style={{ height: 300}}/>
      <img src={image10} alt="image10" style={{ height: 300}}/>
      <img src={image11} alt="image11" style={{ height: 300}}/>
      <img src={image12} alt="image12" style={{ height: 300}}/>
      <img src={image13} alt="image13" style={{ height: 300}}/>
      <img src={image14} alt="image14" style={{ height: 300}}/>
      </ItemsCarousel>
    </div>
    )
}

export default Books;