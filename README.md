# React UI Challenges

## Deployment
[https://react-ui-colabs-challenges.vercel.app/](https://react-ui-colabs-challenges.vercel.app/)

## Task

Replicate the home and services pages of [colabs.com.au](https://colabs.com.au) using React.

## Technologies

- 🚀 **NextJs 14**: react framework
- 🎨 **Tailwind CSS**: rapid and responsive styling
- 👀 **React Intersection Observer**: used to efficiently handle scroll-based interactions,
- 📱 **Swiper**: create dynamic and touch-friendly sliders
- 🧑‍🎨 **React Icons**: easy icon
- 🚀 **HTML React Parser**: some data have html element in it and need to be parsed
- 🌌 **Jarallax**: adds a parallax scrolling effect to backgrounds
- 🤹‍♂️ **clsx**: for dynamic class names

## Folder Structures

```javascript
- tailwind.config.js            // customize tailwind
- next.config.js                // customize next
- public/                       // static public file (Image and font)
- src/
    - app/                      // the main folder
        - globals.css           // css for all files
        - layout.js             // base html for the entire project
        - not-found.js          // 404 pages
        - page.js               // Home page (View NextJS docs for routing)
        - _components/          // Component for home page only
        - services/             // Service page file
            - _components/      // Component for services page only
    - components/               // shared component folder
    - context/                  // react context folder
    - hooks/                    // react hook
```

## Future work

Here are some recommendations for future improvements and enhancements to the Next.js application:

- **Optimization of Images** 🖼️: Consider implementing image optimization techniques, such as lazy loading or using responsive image formats, to improve page load times and overall performance.
- **Code Refactoring and Clean-up** 🧹: I've made this project on a rush... yeah some refactoring could make this better.
- **SEO Enhancements** 🚀: I haven't implement SEO best practice at all. only title and description
- **Stacking card section on services page** 📝: i haven't able to fully create the UI/UX of this one section in particular. i need to learn more about scroll effect and animation
- **DETAIL**: i think i cannot replicate the website to the fullest detail yet. maybe in the future i will try it

## Some Funny Stuff During This Project

So, picture this: I embarked on a wild carousel adventure with slick, react-slick, and react-responsive-carousel. It was like entering a three-ring circus, but guess what? The carousel act was a bit too tricky for those libraries to handle. 🎪

After wrestling with them, I decided to take matters into my own hands, channeling my inner CSS wizard and bringing out the useState wand. Voila! A carousel was born, not as interactive as the original, but hey, it gets the job done and keeps the amusement intact. 🎢

The same for the stacking card in service pages.

## How i feel about this project

This project has been a rollercoaster of emotions, much like trying to navigate a carnival funhouse. Next.js 14 threw some curveballs my way, especially with the whole use client and use server saga. It's like learning to ride a unicycle while juggling flaming torches — a bit precarious but oddly thrilling.

On the bright side, diving back into the frontend world after a hiatus felt like reuniting with an old friend. We reminisced about the good ol' HTML, danced with CSS, and even had a chat with React. It's been a hoot, and I'm leaving with more tricks up my sleeve than a magician at a kid's birthday party. 🎩✨

The original website's UI is like a ninja — sneaky, elusive, and hard to catch. It's been a marathon of CSS acrobatics, but I'm determined to crack the code.

In a nutshell, this project is my own personal hero's journey. there are lots of problem on the path, handling it one by one should make me stronger :).
