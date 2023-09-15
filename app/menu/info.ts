import { MenuSection } from '../interfaces'

// Appetizers
import chickenWings from '/public/assets/images/menu/appetizers/chicken-wings.jpg'
import frenchFries from '/public/assets/images/menu/appetizers/french-fries.jpg'
import fruitBowl from '/public/assets/images/menu/appetizers/fruit-bowl.jpg'
import miniBurger from '/public/assets/images/menu/appetizers/mini-burger.jpg'

// Soups & Salads
import tomatoSoup from '/public/assets/images/menu/soups/tomato-soup.jpg'
import breadSoup from '/public/assets/images/menu/soups/bread-soup.jpg'
import chilliSoup from '/public/assets/images/menu/soups/chilli-soup.jpg'
import beetrootSoup from '/public/assets/images/menu/soups/beetroot-soup.jpg'
import salad1 from '/public/assets/images/menu/soups/salad1.jpg'
import salad2 from '/public/assets/images/menu/soups/salad2.jpg'

// Main Courses
import italianPizza from '/public/assets/images/menu/main/italian-pizza.jpg'
import jacksonsBurger from '/public/assets/images/menu/main/jacksons-burger.jpg'
import salmonWithVegetables from '/public/assets/images/menu/main/salmon-with-vegetables.jpg'
import steakWithFries from '/public/assets/images/menu/main/steak-with-fries.jpg'

// Kids' Menu
import applePie from '/public/assets/images/menu/kids/apple-pie.jpg'
import iceCream from '/public/assets/images/menu/kids/ice-cream.jpg'
import vegetableSandwich from '/public/assets/images/menu/kids/vegetable-sandwich.jpg'

const mealDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia arcu in neque fermentum, ac maximus dui lobortis. In facilisis ultricies sapien vel interdum. Phasellus maximus sed orci non porta. Praesent luctus convallis tellus. Curabitur vel sodales nulla. Mauris volutpat nisl sed risus sodales, at tempor lectus ultricies. Vivamus pulvinar, magna at aliquam cursus.'

export const menu: MenuSection[] = [
  {
    title: 'Appetizers',
    meals: [
      { name: 'Chicken Wings', description: mealDescription, image: chickenWings },
      { name: 'French Fries', description: mealDescription, image: frenchFries },
      { name: 'Fruit Bowl', description: mealDescription, image: fruitBowl },
      { name: 'Mini Burger', description: mealDescription, image: miniBurger },
    ],
  },
  {
    title: 'Soups & Salads',
    meals: [
      { name: 'Tomato Soup', description: mealDescription, image: tomatoSoup },
      { name: 'Bread Soup', description: mealDescription, image: breadSoup },
      { name: 'Chilli Soup', description: mealDescription, image: chilliSoup },
      { name: 'Beetroot Soup', description: mealDescription, image: beetrootSoup },
      { name: 'Vegetable Salad', description: mealDescription, image: salad1 },
      { name: 'Mixed Salad', description: mealDescription, image: salad2 },
    ],
  },
  {
    title: 'Main Courses',
    meals: [
      { name: 'Italian Pizza', description: mealDescription, image: italianPizza },
      { name: "Jackson's Burger", description: mealDescription, image: jacksonsBurger },
      { name: 'Salmon with Vegetables', description: mealDescription, image: salmonWithVegetables },
      { name: 'Steak with Fries', description: mealDescription, image: steakWithFries },
    ],
  },
  {
    title: "Kids' Menu",
    meals: [
      { name: 'Apple Pie', description: mealDescription, image: applePie },
      { name: 'Ice Cream', description: mealDescription, image: iceCream },
      { name: 'Vegetable Sandwich', description: mealDescription, image: vegetableSandwich },
    ],
  },
]
