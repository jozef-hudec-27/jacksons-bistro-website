import { PhilosophyEntry, TeamMember, TimelineEra } from '../interfaces'

// Our Story
import restaurant1960 from '/public/assets/images/timeline/1960-restaurant.jpg'
import restaurant1980 from '/public/assets/images/timeline/1980-restaurant.jpg'
import restaurant2000 from '/public/assets/images/timeline/2000-restaurant.jpg'
import modernRestaurant from '/public/assets/images/timeline/modern-restaurant.jpg'

// Our Team
import chef from '/public/assets/images/team/chef.jpg'
import pastryChef from '/public/assets/images/team/pastry-chef.jpg'
import waiter from '/public/assets/images/team/waiter.jpg'

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

export const team: TeamMember[] = [
  {
    image: chef,
    name: 'Chef',
    description: `A visionary culinary artist with a knack for marrying diverse flavors. Chef Ethan is a trailblazer in the kitchen, infusing global inspirations into every dish. His creativity and dedication shine through in each plate, making dining at Jackson's Bistro an unforgettable experience.`,
  },
  {
    image: pastryChef,
    name: 'Pastry Chef',
    description: `A master of sweet alchemy, Olivia adds a touch of magic to every dessert she creates. Her exquisite pastries and innovative treats are a delightful finale to every meal, leaving guests craving for more.`,
  },
  {
    image: waiter,
    name: 'Head Waiter',
    description: `Luis embodies the essence of gracious service at Jackson's Bistro. His professionalism, warmth, and extensive menu knowledge create an engaging dining experience that leaves guests wanting to return.`,
  },
]

export const philosophy: PhilosophyEntry[] = [
  {
    title: 'Sourcing Excellence',
    description:
      'We are committed to the pursuit of excellence, starting with the ingredients we choose. We source locally whenever possible, forging relationships with farmers and artisans who share our dedication to quality and sustainability. Every bite tells a tale of meticulous selection and careful curation.',
    path: "bg-[url('/assets/images/philosophy/sourcing/sourcing_lg.avif')]",
  },
  {
    title: 'Global Inspiration, Local Heart',
    description:
      "We draw inspiration from the world's cuisines, celebrating the diverse tapestry of flavors that enrich our global culinary heritage. But at our core, we remain rooted in our local community. Our goal is to transport you on a gastronomic journey while making you feel at home, surrounded by the warmth of familiar hospitality.",
    path: "bg-[url('/assets/images/philosophy/inspiration/inspiration_lg.avif')]",
  },
  {
    title: 'Memories Shared, Moments Created',
    description:
      "For us, dining is more than a meal—it's an experience woven with care, designed to create memories that linger long after the last bite. Whether it's a romantic evening, a family gathering, or a celebration of milestones, we take pride in being a part of your cherished moments.",
    path: "bg-[url('/assets/images/philosophy/memories/memories_lg.avif')]",
  },
]
