import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function SignCards() {
  return (
    <div className='cards'>
      <h1>Welcome to my personal travel blog!</h1>
      <h1>&nbsp;</h1>
      <h1 className="year">2013</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/newport.jpg'
              text='Newport Aquarium was such an amazing place to discover the world under the sea. Definetly a one of the memorable experience from when I was young.'
              label='Newport Aquarium'
              path='https://www.newportaquarium.com/?utm_source=google_ads&utm_medium=PMax-naq&gad_source=1'
            />
            <CardItem
              src='images/zoo.jpg'
              text='The Cincinnati Zoo definetly fascinated me with huge collection of animals they had to offer. All the animals seemed to be well treated and happy to see us visit them. Definetly lives up to the Inernationally Acreddited Title.'
              label='Cincinnati Zoo'
              path='https://cincinnatizoo.org/?gad_source=1'
            />
          </ul>
        </div>
      </div>
      <h1 className="year">2014</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='images/chicago.jpg'
              text='Exploring Chicago was such a fun experience because it is such a big city. My highlights were Willis Tower which was one of the largest buildings in the world. 
              The pier had many cool attractions like the ferris wheel from where you can get an amazing view of the city. The Deep Dish Pizza is not for everyone and that is okay!'
              label='Chicago'
              path='https://www.choosechicago.com/'
            />
            <CardItem
              src='images/Pitt.jpg'
              text='My first time here left me speechless. So much that I came back to this amazing city many times later. The Carnegie Mellon Science Center and the Duquesne Incline
               that takes you to the top of the city left me coming back for more. Just walking around the city and exploring the surplus of local parks and bridges is an attraction of in itself. 
               Highly recommend taking a visit to this beautiful city.'
              label='Pittsburgh'
              path='https://www.visitpittsburgh.com/'
            />
            <CardItem
              src='images/Hocking.jpg'
              text='Rented one of the cabins here and it is the best way to experience the Hocking Hills National Park. Ziplining and taking a scenic walk through 
              one of the many walking trails that this park has to offer will leave you wanting to extend your stay here.'
              label='Hocking Hills'
              path='https://www.hockinghills.com/'
            />
            <CardItem
              src='images/Hershey.jpeg'
              text='Hershey Park has definetly been one of my favorite amusement parks I have ever been to. The Chocolate Factory, Hershey Amusement park, 
              and Winter Lights Show are the best things they have to offer. I have only been to this park only in the winter but what is great about this place is that it still has a lot to offer all year-round.'
              label='Hershey Park'
              path='https://www.hersheypark.com/'
            />
          </ul>
        </div>
      </div>
      <h1 className='year'>2016</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Dayton.jpg'
              text='My intial aspiration of becoming a commercial airline pilot was born in this museum. This place has every airplane you can possibly imagine. All your airplane curiosities will be answered here.'
              label='Dayton Airforce Museum'
              path='https://www.nationalmuseum.af.mil/'
            />
            <CardItem
              src='images/wash.jpeg'
              text='My family came here for a visit for the July 4th weekend. Capital Hill, White House, National Mall, Lincoln Memorial, are all musts when it comes to exploring this patriotic area.
              I learned a lot about how this amazing country came to be through the wonderful staff at the Smithsonian Museum. The fireworks show was also very fun to watch.'
              label='Washington D.C.'
              path='https://washington.org/'
            />
          </ul>
        </div>
      </div>
      <h1 className='year'>2018</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/saguatuck.jpg'
              text='My dad spontaneously decided that we were going to this beach for a day trip. That was one of the best decisions 
              he had ever made when it came to vacations because Saguatuck was one of the best beaches I had ever been to. The white sand was so soft, the water was 
              the perfect temperature, and it was a very clean beach. It also had quite a bit of waves for a lake.'
              label='Saguatuck Beach'
              path='https://saugatuck.com/business/oval-beach/'
            />
          </ul>
        </div>
      </div>
      <h1 className='year'>2019</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/niagara.webp'
              text='I have been to these majestic waterfalls both on the Canadian and U.S. side and after further anaylysis I can conclude that the Canadian side is better. 
              If you are on the Canadian side I would recommend taking a visit to the tunnels that go underneath the HorseShoe falls and the Boat Tour that gets close enough to where you will get drenched.'
              label='Niagara Falls'
              path='https://www.niagarafallsstatepark.com/'
            />
            <CardItem
              src='images/diego.jpg'
              text='Absolutely gorgeous city. The San-Diego Zoo was so massive that people were taking buses just to get around. The sunset boat cruise along the coast of San Diego was a site to see. '
              label='San Diego'
              path='https://www.niagarafallsstatepark.com/'
            />
          </ul>
        </div>
      </div>
      <h1 className='year'>2023</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/munnar.jpg'
              text='I could not be more serious when I say this place looks exactly like the pictures. Even just the road trip to this mountaneous tea garden preserve left me speechless.
              When we were not drooling over the views we took a tour of the tea factory and jeep tours through this beautiful landscape. If you want to take a hot air baloon trip I would book a couple days in advance.
              Also we had hired a driver to take us around because the roads are really narrow and our local driver took us to the best food and tourist spots. '
              label='Munnar India'
              path='https://www.niagarafallsstatepark.com/'
            />
          </ul>
        </div>
      </div>
      <h1 className='year'>2024</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/myrtle.jpg'
              text='I went here during late March and the water was still way too cold to be swimming in it. So we explored the local cuisine and mini golf courses. 
              There was suprisingly a lot of mini-golf courses around here. We also went to this burger restaurant call River City Cafe which was fantastic. 
              Definetly recommend here in the summer when it is warmer and everything is open.'
              label='Myrtle Beach'
              path='https://www.visitmyrtlebeach.com/'
            />
            <CardItem
              src='images/clear.jpeg'
              text='Highly recommend renting a beachside condo if your coming with a big family. We rented ours at Sea Oats Resort and it was spacious and clean. We spent most of our time on the beach and the pool.
              The gulf water was suprisingly warm and the sunsets were definetly something to write home about.'
              label='RedShores Beach'
              path='https://www.sandiego.org/explore/things-to-do.aspx'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SignCards;
