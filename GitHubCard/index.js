/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const cardMaker = (object) => {
  const card = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const userLocation = document.createElement('p');
  const userProfile = document.createElement('p');
  const userAddress = document.createElement('a');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');

  card.classList.add('card')
  cardInfo.classList.add('card-info')
  name.classList.add('name')
  userName.classList.add('username')

  userImg.setAttribute('src', object.avatar_url);


  name.textContent = object.name;
  userName.textContent = object.login;
  userLocation.textContent = `Location: ${object.location}`;
  userProfile.textContent = 'Profile:';
  userAddress.textContent = object.html_url;
  userFollowers.textContent = `Followers: ${object.followers}`;
  userFollowing.textContent = `Following: ${object.following}`;
  userBio.textContent = object.bio;

  card.appendChild(userImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(userProfile);
  userProfile.appendChild(userAddress);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);

  return card;
};

const newCardMaker = document.querySelector('.cards');


axios.get("https:api.github.com/users/JEGJ93")
.then(response => {
  console.log('api response', response)
  newCardMaker.appendChild(cardMaker(response.data));
})
.catch(err => {
  console.log('error', err)
})



const followersArray = [];

followersArray.push('tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell');

followersArray.forEach(names => {
  axios.get('https:api.github.com/users/'+`${names}`)
  .then(response => {
    console.log('api response', response)
    newCardMaker.appendChild(cardMaker(response.data));
  })
  .catch(err => {
    console.log('error', err)
  })
});


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
