# cs110-lab4


Components:

Create components for Articles, Sidebar, and the Title.

App.js should only house the components being rendered.

 

React Hooks:

UseState() - Is used to manage a state within a component which allows one to render and update data consistently based on the changed that are made

This will be used for the header and and sidebar as well as displaying the posts 

UseEffect() - Is used as side effects within your component, ensuring they occur at the right times and cleaning up resources when the component unmounts(not used)

Wrap this in the async function you create in order to update on the chosen filter to be clicked on by the user. 


New Features for Your Site:

1. More than 5 articles

Create an search field above the radio buttons in the sidebar.

If you enter a value higher than 15 then you should get an alert saying “number is higher than 15”.

Also include the text inside the input.

If there's an error in getting one of the 15 articles, you MUST display an empty article item where the title says "Article not available". You're encouraged to polish this by having a placeholder image, the abstract containing error information, etc.

2. Reactive Title

When selecting filters from the radio buttons, it should update the text at the top. For example, if the user selects "Most Viewed" and "Day" the text at the top should read "Most Viewed - Day". 

3. 2 columns

All odd articles should appear on the left column, and all even articles should appear on the right (see example above). You must be able to support 3 articles in each column. Any after will be subject to pagination.

4. Pagination

Pagination is essentially the concept of grabbing a bunch of data and splitting it into smaller chunks of data. This is often used to to increasing optimization in websites to allows large amounts of data to be loaded but only when that user is viewing it 

In this lab you should display at most 6 articles and have at most 3 pages (15 articles can be displayed max)

How to implement: 

useState()

const [currentPage, setCurrentPage] useState(1)- tracks the page it is at 

const [articlesPerPage, setArticlesPerPage] useState(6) - determine how many articles can be displayed in a page

Logic: 

The logic to handle pagination is more simple than it sounds. You need to calculate the index of the first and last articles to display on the current page.

Changing Pages:

To change pages we should implement a button where a function argument updates the current page state which will then rerender the articles.

Responsiveness

When the window gets smaller it should turn into one column so the structure should look like this, if the screen width is less than 900px:

Getting Articles
Luckily, the AJAX ideas we practiced in Lab 4 can still be applied here! Here's the structure that we recommend to fetching in react:

const getArticles = async () => {

      try {

        const response = await fetch(‘URLl`);

        const data = await response.json();

        console.log(data); // you can view if a response went through in developer mode. 

        setArticles(data.results); // it should at most display 15 articles 

      } catch (error) {

        console.error('Error fetching articles:', error);

      }

    };

You'll notice that it follows very similar principles to what you might have in lab 4.

You can use the slice() functionLinks to an external site. for arrays to modify how any articles should be displayed
