import { InstagramPost, NavLink } from './interfaces'

// Instagram posts
import chefKitchen from '/public/assets/images/instagram-posts/chef-kitchen.jpg'
import chefSlice from '/public/assets/images/instagram-posts/chef-slice.jpg'
import insideRestaurant from '/public/assets/images/instagram-posts/inside-restaurant.jpg'
import meal from '/public/assets/images/instagram-posts/meal.jpg'
import pastaPan from '/public/assets/images/instagram-posts/pasta-pan.jpg'
import waiter from '/public/assets/images/instagram-posts/waiter.jpg'


export const navLinks: NavLink[] = [
  { label: 'Home', path: '/', divider: true },
  { label: 'Menu', path: '/menu' },
  { label: 'About Us', path: '/about' },
  { label: 'Reservations', path: '/reservations' },
  { label: 'Contact', path: '/contact' },
]

export const instagramPosts: InstagramPost[] = [
  {
    image: chefKitchen,
    alt: 'Chef cooking in the kitchen',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia arcu in neque fermentum, ac maximus dui lobortis. In facilisis ultricies sapien vel interdum. Phasellus maximus sed orci non porta. Praesent luctus convallis tellus. Curabitur vel sodales nulla. Mauris volutpat nisl sed risus sodales, at tempor lectus ultricies. Vivamus pulvinar, magna at aliquam cursus, justo ante imperdiet nunc, at vestibulum risus dolor ut tortor.',
  },
  {
    image: chefSlice,
    alt: 'Chef slicing vegetables with a knife',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia arcu in neque fermentum, ac maximus dui lobortis. In facilisis ultricies sapien vel interdum. Phasellus maximus sed orci non porta. Praesent luctus convallis tellus. Curabitur vel sodales nulla. Mauris volutpat nisl sed risus sodales, at tempor lectus ultricies. Vivamus pulvinar, magna at aliquam cursus, justo ante imperdiet nunc, at vestibulum risus dolor ut tortor.',
  },
  {
    image: insideRestaurant,
    alt: 'Restaurant interior',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia arcu in neque fermentum, ac maximus dui lobortis. In facilisis ultricies sapien vel interdum. Phasellus maximus sed orci non porta. Praesent luctus convallis tellus. Curabitur vel sodales nulla. Mauris volutpat nisl sed risus sodales, at tempor lectus ultricies. Vivamus pulvinar, magna at aliquam cursus, justo ante imperdiet nunc, at vestibulum risus dolor ut tortor.',
  },
  {
    image: meal,
    alt: 'Cooked meal',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia arcu in neque fermentum, ac maximus dui lobortis. In facilisis ultricies sapien vel interdum. Phasellus maximus sed orci non porta. Praesent luctus convallis tellus. Curabitur vel sodales nulla. Mauris volutpat nisl sed risus sodales, at tempor lectus ultricies. Vivamus pulvinar, magna at aliquam cursus, justo ante imperdiet nunc, at vestibulum risus dolor ut tortor.',
  },
  {
    image: pastaPan,
    alt: 'Pan with pasta and vegetables',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia arcu in neque fermentum, ac maximus dui lobortis. In facilisis ultricies sapien vel interdum. Phasellus maximus sed orci non porta. Praesent luctus convallis tellus. Curabitur vel sodales nulla. Mauris volutpat nisl sed risus sodales, at tempor lectus ultricies. Vivamus pulvinar, magna at aliquam cursus, justo ante imperdiet nunc, at vestibulum risus dolor ut tortor.',
  },
  {
    image: waiter,
    alt: 'Waiter holding a plate with finished meal',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia arcu in neque fermentum, ac maximus dui lobortis. In facilisis ultricies sapien vel interdum. Phasellus maximus sed orci non porta. Praesent luctus convallis tellus. Curabitur vel sodales nulla. Mauris volutpat nisl sed risus sodales, at tempor lectus ultricies. Vivamus pulvinar, magna at aliquam cursus, justo ante imperdiet nunc, at vestibulum risus dolor ut tortor.',
  },
]
