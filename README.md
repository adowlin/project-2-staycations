# In the Éire - Find "staycations" in Ireland

[View the deployed site here.](https://adowlin.github.io/project-2-staycations/)

In the Éire is a website where users can search for holiday destinations within Ireland. This website was created for my second milestone project as part of the Diploma in Full Stack Software Development course with Code Institute. The website is responsive on all device sizes.

<img src="readme-assets/images/staycations-mockups.png" alt="responsive site mockups">
 
## User Experience (UX)

With international travel restrictions throughout the COVID-19 pandemic, "staycations" - holidays within Ireland - have grown in popularity. This website will allow users to search for holiday destinations within Ireland, providing information about accommodation, restaurants, and attractions in that they search for. The website will advance the user's goals of finding holiday destinations in Ireland by providing this search feature. It will also advance the site owner's goals of promoting Irish businesses, and finding holiday destinations being a user of the site themselves.

### User Stories

- As a first-time visitor, I want to:
    - Search for holiday destinations in Ireland.
    - See places of interest and attractions near my preferred destination.
    - Find & book accomodation & restaurants near my preferred destination.
    - Contact the site owner with any questions.

- As a returning visitor, I want to:
    - Search for new holiday destinations in Ireland.
    - Find restaurants & attractions near my current location, if I am already on holiday.

### Design

- Colour Scheme:

    <img src="/readme-assets/images/staycations-palette.png" alt="color palette" style="width:400px;height:300px;">

    - Colour palette was generated using [coolors.co](https://coolors.co/). I chose this colour scheme as it offers sufficient contrasts, and aligns with the Irish theme of the site by using colours similar to the Irish Tricolour.

- Typography:
    - Using [Google Fonts](https://fonts.google.com/), I chose [Merriweather](https://fonts.google.com/specimen/Merriweather) for the site's logo and headings, paired with [Merriweather Sans](https://fonts.google.com/specimen/Merriweather+Sans) for the site's main text.

### Wireframes

- Wireframes were created using [Balsamiq](https://balsamiq.com/):

    - [Wireframes PDF](/readme-assets/staycations-wireframes.pdf)

- Flowchart created using [draw.io](https://app.diagrams.net/):

    - [Flowchart PDF](/readme-assets/staycations-flowchart.pdf)

## Features

### Existing Features

- **Front Page with image carousel & lead text:** Allows users to see various sites around Ireland, while the lead text briefly explains the purpose of the site to new users.
- **Collapsable nav bar links:** Allows users to navigate between the home page & contact page without needing to use their browser navigation buttons. Nav links collapse into a hamburger button on smaller screens to improve responsiveness.
- **Dark mode theme slider:** Included in the nav bar links, allows users to toggle between dark & light mode themes of the site, depending on their preference.
- **Searchbar input & buttons:** Allows users to search for their desired locations within Ireland, buttons allow users to filter the returned search results by food, accomodation, and attractions.
- **Google Map window:** Centers over the user's search location, and re-centers over each place in search results list when that result is clicked on in the list. Allows users to visualise the location of each place as they work down through the list of search results.
- **Google Places search results list:** Returns a list of nearby food establishments, accomodation, or tourist attractions, nearby to the location which the user has searched. Allows users to click on the list item for each result to display that place on the map. Also included a "Load More Results" button to allow the user to extend the list to include more search results.
- **"Details" link on each search result item:** Allows users to find out more information about, and possibly book, the places in the  results list. Opens a Google search for the place in a new browser tab.
- **Footer:** Contains links to the Contact page, and links to the hypothetical social media profiles for the website/site owner, allowing for easy navigation.
- **Contact Page image carousel with lead text:** Displays more photos from sites around Ireland, and explains the purpose of the Contact Page.
- **Contact form with EmailJS:** Allows users to send an email to the site owner, while validating the informaiton input into the form.
- **Success/Failure alert box for contact form:** Displays a message to users to inform them of whether their attempt to send an email via the form was successful or not.

### Features Left to Implement

- **Dark mode slider - save setting upon navigation to another site page:** Would save the user's dark mode preferences when they navigate to another page on the website. This would allow them to enable dark mode on one page, and have dark mode automatically enabled on another page that they navigate to, until dark mode is disabled.

## Technologies Used

- Languages Used:
    - [HTML5](https://en.wikipedia.org/wiki/HTML5)
    - [CSS3](https://en.wikipedia.org/wiki/CSS)
    - [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

- Frameworks, Libraries, Programs Used:
    - [Bootstrap v5.0](https://getbootstrap.com/docs/5.0):
        - Used to help with styling, responsiveness & structure of site.
    - [JQuery v3.6.0](https://jquery.com/):
        - Used to help reduce complexity of JavaScript code in places.
    - [Google Fonts](https://fonts.google.com/):
         - Used to import [Merriweather](https://fonts.google.com/specimen/Merriweather) and [Merriweather Sans](https://fonts.google.com/specimen/Merriweather+Sans) fonts.
    - [FontAwesome](https://fontawesome.com/):
        - Used to add social media icons to footer links.
    - [Gitpod](https://www.gitpod.io/):
        - Used for the site's development environment.
    - [Git](https://git-scm.com/):
        - Used via the Gitpod terminal to make regular commits, and push to GitHub.
    - [GitHub](https://github.com/) & [GitHub Pages](https://pages.github.com/):
        - Used to store the site's code & to host the deployed site.

## Testing


### Testing User Stories from User Experience (UX) section


### Further Testing


### Known Bugs


### Bugs Found & Fixed


## Deployment


### GitHub Pages


### Local Deployment


## Credits

### Content

- JavaScript for map search functionality[0], styled map types functionality[1], night mode map styling[2], and nearby search functionality with pagination[3] adapted from Google Developer Docs: <br>
    [0] https://developers.google.com/maps/documentation/javascript/examples/places-searchbox#maps_places_searchbox-html <br>
    [1] https://developers.google.com/maps/documentation/javascript/examples/maptype-styled-simple <br>
    [2] https://developers.google.com/maps/documentation/javascript/examples/style-array#maps_style_array-javascript
    [3] https://developers.google.com/maps/documentation/javascript/examples/place-search-pagination#maps_place_search_pagination-css 


### Media


### Acknowledgements
