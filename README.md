
# SSUI Assignment 6

## Neopets Passport
This is a travel page for the world of Neopia. from the popular children's website [http://neopets.com](http://www.neopets.com/).

[The site is hosted here: https://elegant-goodall-eb68ab.netlify.com/](https://elegant-goodall-eb68ab.netlify.com/)

Travel to 6 unique lands in Neopia including:
- **Lost Desert:** A sacred desert based on Egyptian Mythology  
- **Tyrannia:** A prehistoric region with dinosaurs  
- **Faerieland:** A floating magical city home to tiny magical creatures known as faeries  
- **Terror Mountain:** A snowy, treacherous mountain biome  
- **Virtupets Space Station:** A futuristic space station that orbits Neopia  
- **Mystery Island:** A tropical island location

### Bonus features
- At each location, **stamp your passport** to mark that you've visited.
  - Stamped locations are **saved in your local storage** so the state stays consistent even if you refresh.
  - Open your passport page (bottom left corner from world map) to **view locations you've stamped**.
  - Once all 6 locations are visited, see a **special 'congrats!' message** on your passport page.
  - **Reset your passport** to start over.
 - Passport stamp images are **randomly chosen from a thematically consistent set**, so that each time you complete your passport it will look different!
 - The following pages are **responsive**:
   - World map page
   - Passport page
   - World details pages (to some extent)
  - Implemented **modal animations** for each world details page, and for the passport page.
    - Click outside the modal or press the close button to close the modal.
   - Site is a one-page application, but each world location can also be accessed via ``/world/id`` sub-links, and the passport page can be accessed via ``/passport`` sub-link.
	   - Haven't set this up on Netlify, but this should work when the site is cloned and built via Github.

<img src="https://i.imgur.com/LDQ6BGV.png" alt="Map nof Neopia" width="500"/>
<img src="https://i.imgur.com/mliFxlp.png" alt="World details page" width="500"/>
<img src="https://i.imgur.com/wouhgq9.png" alt="Passport page button" width="500"/>
<img src="https://i.imgur.com/FT9T1md.png" alt="Passport page" width="500"/>
<img src="https://i.imgur.com/5sFciXe.png" alt="Stamped passport page" width="500"/>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!


