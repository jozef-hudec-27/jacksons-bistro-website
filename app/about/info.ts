import { TimelineEra } from '../interfaces'

import restaurant1960 from '/public/assets/images/timeline/1960-restaurant.jpg'
import restaurant1980 from '/public/assets/images/timeline/1980-restaurant.jpg'
import restaurant2000 from '/public/assets/images/timeline/2000-restaurant.jpg'
import modernRestaurant from '/public/assets/images/timeline/modern-restaurant.jpg'

export const timeline: TimelineEra[] = [
  {
    title: '1960s - The Spark Ignites',
    description: `In the vibrant 1960s, Robert Jackson Sr., a passionate cook with a dream, opened a cozy diner known simply as "Jackson's." Armed with a handful of cherished family recipes and a spirit of dedication, he poured his heart into crafting hearty and soul-soothing meals that quickly won the hearts of the local community.`,
    image: restaurant1960,
  },
  {
    title: '1980s - The Next Generation',
    description: `The legacy continued as Robert Jackson Jr. took the reins in the 1980s. Drawing inspiration from his father's legacy, he combined traditional flavors with contemporary culinary techniques. The bistro evolved, offering a fusion of classic comfort and innovative delights.`,
    image: restaurant1980,
  },
  {
    title: '2000s - A Modern Marvel',
    description: `As the 21st century dawned, Jackson's Bistro underwent a transformation. Led by Emily Jackson, a visionary chef with an eye for artistry, the bistro became a haven for those seeking not just a meal, but an experience. The menu expanded, introducing global influences while maintaining a commitment to locally sourced ingredients.`,
    image: restaurant2000,
  },
  {
    title: 'Present Day - Culinary Wonderland',
    description: `Today, under the guidance of Chef Ethan Jackson, the legacy continues to flourish. Jackson's Bistro has become a culinary destination celebrated for its avant-garde presentations, impeccable service, and a menu that is a love letter to flavors from around the world. With an unyielding dedication to quality and an unwavering commitment to delighting every palate, Jackson's Bistro invites you to embark on a culinary journey that spans generations.`,
    image: modernRestaurant,
  },
]
