# Sean Stobo's Toast Exercise

I initially had some issues with create-react-app (tons of missmatched dependencies and deprection warnings).
To overcome this, I flipped over to using Vite. I carefully checked the requirements, and have not touched index.html in /public, removed any dependancies, or modified /service/*. Also, using vanilla react, just Vite as a bundler.


## Libraries used:
Vite
Tailwind for styling
Shadcn for headless UI components and Toast/Toaster
autoAnimate for a little bit of fun animation

## My process
The way I approached this code challenge was pretty straightforward. I read the requirements about 20 times, reviewed how the code functioned, tested out all the functions in the 'server', and reviewed the dependancies in the package.json.
I decided to use Tailwind, since I believe it is the best solution for styling (scalability, consistency, and just plain good looks).
I used the Shadcn component library, due to its light weight, ease of use, and modularity. I also chose to use this INSTEAD of MUI because I know that I would need to add additional functionality to the Toast component. Shadcn gives you access to all of the source code, and ive found MUI is a bit too opinionated for this task.
Once I had the toaster working I did a bit of console logging to figure out the details of the server functions. I finally added a button to the toast to 'like' form submissions, which on click, will write that submission to local storage. 
In the Content component, I query that local storage, and display the 'liked' items.
I also added a delete button, since that seems like it would be desired in the real world.

To install the repo:
npm install
npm run dev


## Thank you for your time! 
I hope you enjoy my submission!

Thanks again, Sean Stobo
www.solaire-technologies.com
https://2024-portfolio-gray.vercel.app/
