// Tell us a story - happy or sad - from your time in SE!
let SE_STORYTIME = [];

// Can you share your favourite moment from 2021 or 2022?
let FAVOURITE_2021_2022_MOMENT = [];

// Can you share your favourite moment from first year?
let FAVOURITE_FIRST_YEAR_MOMENT = [];

// Any other fun first year stories?
let OTHER_FIRST_YEAR_STORIES = [];

// Can you share a funny story about interviewing or co-op?
let INTERVIEW_COOP_STORY = [];

// What was your favourite co-op experience?
let COOP_STORY = [];

// Share your best party story (Git Lit, Full SEnd, etc) (slighty edited for anonimity + brevity)
let PARTY_STORY = ["chugged a part of a bottle of vodka dring a full send, went home and threw up in front of our bathroom D:",
  "Got naked miled, had to drink half a bottle of pink whitney", "A few years ago, I played beer pong with some random I just got introduced to. While playing, they gestured by putting their hand on their elbow to tell me that I was reaching over the table. I didn't know that was a rule though, so I interpreted the gesture as challenging me to get a ball in by hitting it with my elbow so I tried doing that. They laughed their ass off and called me stupid which my drunk ass got super offended by so I went up and said \"DO YOU WANNA FIGHT ??\", which they just told me to calm down and we split up. 10 minutes later I found them again and we were both just like \"aye that was a fun game and you're actually pretty cool\", hugged it out, and just vibed for a while. Wish I could remember their face or name, though.", "Loved all SE parties", "Had a party at V1 that was so bad the host almost got kicked out of residence.", "My friend passed out early in the bathroom and I had to periodically send guys to the bathroom to check up on him", "Lmao I don't go to parties", "I hosted a party, was too drunk to go to Phil's after, then woke up having peed the bed."];

// How did COVID-19 affect your personal relationships (friends, family, romantic, or otherwise)? (slighty edited for anonimity + brevity)
let COVID_RELATIONSHIPS = ["Changed type of interactions, arguably they got stronger", "Hard to meet new people", "I was able to see my parents and partner more often", "I am a, very ironically, anti-technology person. So I without in-person interaction it went from \"I could walk into any room and find people I hang out with\" to \"there are like 2 people I talk to regularly\".", "Got time to be closer with family", "Hung out more with high school friends", "Lost touch with a few friends", "I love my family, so staying at home was good. However, I missed seeing my friends, and having fun in extracurriculars. Also I had one relationship online but it was a bit unhealthy, so I'm glad it didn't have the chance to make its way to in-person.", "Honestly really bad, relationship and friends and family all fell apart :(", "No affect, got a girlfriend during COVID", "Built closer friendships with close friends are lost touch with more distant friends", "I became closer to people who matter the most and I'm forever grateful for that!", "Encouraged me to end a non-fulfilling long-term romantic relationship", "Had to put more intentional effort into reaching out and scheduling calls with the people I wanted to stay in touch with", "I think I ended up talking to people more frequently since video calling became more of a thing", "I feel like I did not get to know people in our cohort as well as I could have, since we spent so much of undergrad remote.", "I got closer with the most important people in my life currently. Before COVID-19, I had a lot of friends, but not a lot of close friends that I had strong emotional connections with. The pandemic allowed me to form really close connections with my \"bubble\", and I've been so much happier since :)", "My mom started getting mad at me again"];

// What has been your favourite place to travel during your undergrad?
let UNDERGARD_TRAVEL = [{{ "name:": " Thailand", "value": 1 }, { "name:": "Dubai", "value": 1 }, { "name:": "Vancouver", "value": 4 }, { "name:": "Iceland", "value": 3 }, { "name:": "Chile was a lot of fun. Got to hike the W trek in Torres Del Paine.", "value": 1 }, { "name:": "Switzerland ", "value": 1 }, { "name:": "Sausalito, California", "value": 1 }, { "name:": " Singapore", "value": 2 }, { "name:": "Hong Kong", "value": 1 }, { "name:": "Korea", "value": 1 }, { "name:": "Montreal", "value": 1 }, { "name:": "Bay Area", "value": 1 }, { "name:": "Australia", "value": 1 }, { "name:": "I travelled to London for co-op, then Paris afterwards which is the only real trip I've done.", "value": 1 }, { "name:": "My roommate's room", "value": 1 }, { "name:": "California", "value": 1 }, { "name:": " Paris", "value": 1 }, { "name:": "Europe", "value": 1 }, { "name:": "Italy", "value": 1 }];

// When travel restrictions will be lifted, which country/city do you want to visit the most and why?
let POST_COVID_TRAVEL = [
  { "name:": "Many Asian countries (Japan, Korea, Singapore, Taiwan ...)", "value": 1 }, { "name:": "Canada", "value": 1 }, { "name:": "Russia; I want to explore the culture and the Russian wilderness", "value": 1 }, { "name:": "Japan", "value": 1 }, { "name:": "Italy", "value": 1 }, { "name:": "Europe and Asia", "value": 1 }, { "name:": "Germany/Munich to watch soccer games", "value": 1 }, { "name:": " Korea, for the soju", "value": 1 }, { "name:": "Tuscaloosa, Alabama to watch a Crimson Tide home football game", "value": 1 }, { "name:": "Singapore, European Union", "value": 1 }, { "name:": "Korea - Fried Chicken", "value": 1 }, { "name:": "Paris, France", "value": 1 }, { "name:": " Japan, big weeb vibes. ", "value": 1 }, { "name:": "Italy because PIZZA", "value": 1 }, { "name:": " South Korea", "value": 1 }, { "name:": "Amsterdam, Netherlands, since I had planned to travel there but cancelled due to Omicron", "value": 1 }, { "name:": "China: see family and embrace culture", "value": 1 }, { "name:": "China, to visit family", "value": 1 }, { "name:": " Japan for the scenic views and the food", "value": 1 }, { "name:": "San Francisco", "value": 1 }, { "name:": " Japan", "value": 1 }, { "name:": "Germany to drive around", "value": 1 }, { "name:": "United Kingdom, Would love to watch a cricket game :D", "value": 1 }, { "name:": "Japan! I love the culture, food, and have never been to Asia before.", "value": 1 }, { "name:": " Tanzania for the Serengeti", "value": 1 }, { "name:": "South America for the ancient ruins", "value": 1 }, { "name:": "India", "value": 1 }, { "name:": "Japan; I want to be in a country where rice is fast food - IMAGINE??? Here if you get a rice bowl, it's more expensive than housing in San Fran, but in Japan it's like their McDonalds 🤤 jokes aside (though highkey I love rice) the traditional culture would be fun to experience, as something very different to Western countries.", "value": 1 }];

// What has been your favourite restaurant to eat at in Waterloo?
let FAVOURITE_RESTAURANT = [
  { "name": "Baba's Grill", "value": 1 },
  { "name": "Bao", "value": 1 },
  { "name": "Bao sandwich bar", "value": 1 },
  { "name": "Beertown", "value": 2 },
  { "name": "Betterchef", "value": 1 },
  { "name": "Chef on Call", "value": 1 },
  { "name": "DoShack", "value": 1 },
  { "name": "Fresh Burrito", "value": 1 },
  { "name": "Gol's Lanzhou Noodle", "value": 1 },
  { "name": "iPho", "value": 1 },
  { "name": "Ipho", "value": 1 },
  { "name": "It's not the best restaurant, but Shawerma Plus has probably been the only reason I survived to graduation.", "value": 1 },
  { "name": "Ken Sushi", "value": 2 },
  { "name": "KEN Sushi House", "value": 1 },
  { "name": "Ken's", "value": 1 },
  { "name": "Kinkaku", "value": 2 },
  { "name": "Kinkaku Izakaya", "value": 1 },
  { "name": "Kinkaku/Jinzakaya", "value": 1 },
  { "name": "Kismet", "value": 1 },
  { "name": "Leung Yue Hot Pot", "value": 1 },
  { "name": "Mimo Thai", "value": 1 },
  { "name": "Mizu (gotta get that omurice)", "value": 1 },
  { "name": "Nuri Village", "value": 2 },
  { "name": "Proof's Kitchen", "value": 1 },
  { "name": "Shawarma Plus", "value": 2 },
  { "name": "The Owl of Minerva", "value": 1 },
  { "name": "The Poke Box", "value": 2 },
  { "name": "The Works", "value": 1 }];

// Which store(s) was (were) your go-to grocery stores?
let GROCERY = [{ "name:": "Walmart", "value": 23 }, { "name:": "Waterloo Central Supermarket/The asian supermarket", "value": 21 }, { "name:": "Sobey's", "value": 18 }, { "name:": "Costco", "value": 9 }, { "name:": "T&T", "value": 21 }, { "name:": "Zehrs", "value": 4 }, { "name:": "Freshco", "value": 1 }, { "name:": "Superstore", "value": 1 }, { "name:": "Vincenzos", "value": 1 }, { "name:": "Uptown Valumart", "value": 4 }];

// Did you spend a semester during an online term living away from Waterloo/home town?
let LOCATION_ONLINE_TERM = [{ "name": "Vancouver", "value": 19 }, { "name": "Toronto", "value": 11 }, { "name": "Quebec", "value": 3 }, { "name": "Europe", "value": 4 }, { "name": "Victoria", "value": 1 }, { "name": "Windsor", "value": 1 }, { "name": "Kingston", "value": 1 }, { "name": "No, Only lived at home", "value": 12 }, { "name": "No, Stayed in Waterloo (not at home)", "value": 18 }]

// Favourite animal(s) as a pet?
let FAVOURITE_ANIMAL = [{ "name": "Dog", "value": 28 }, { "name": "Cat", "value": 17 }, { "name": "Fish", "value": 4 }, { "name": "Bird", "value": 3 }, { "name": "Rabbit", "value": 2 }, { "name": "Horse", "value": 1 }, { "name": "Lizard", "value": 1 }, { "name": "Turtle", "value": 1 }, { "name": "Leaping Blenny", "value": 1 }, { "name": "None", "value": 2 }];

// Favourite colour? (Give a hex code: https://htmlcolorcodes.com/ )
let FAVOURITE_COLOR = ["000FFF", "F20000", "F7DC6F", "C359FF", "E1D1FF", "FFFB00", "FFF8E9", "FF5733", "42F5AE", "000000", "000000", "CD7300", "00BDFF", "9DECA2", "FFDFF1", "BE41FF", "9D3B4F", "FE9233", "B168ED", "3ABD55", "FAA600", "E22CCC", "C71644", "FFCAB1", "009600", "33BAFF", "696969", "33B8FF", "03FC73", "4.17E+04", "49D2DA", "DCC0FC", "000000", "CB3E20", "000000", "FFE5E2", "00CAFF", "AED2EB", "3DC2B3", "444444", "0079D8"];

// Have you ever physically fought someone outside of controlled martial arts environments, if so how many?
let FIGHTS = [{
  "name": "0",
  "value": 56
}, {
  "name": "1",
  "value": 3
}, {
  "name": "2",
  "value": 1
}, {
  "name": "3",
  "value": 2
}];

// How many times did you cry per school term?
let CRYING = [2, 10, 0, 1, 4, 1, 0.5, 0, 2, 2, 0, 3, 0, 0, 3, 4, 5, 2, 0.375, 0, 70, 0, 3, 5, 0, 4, 0, 3, 3, 2, 2, 1, 2, 1, 0, 0, 0.5, 2, 0, 0, 1, 7, 1, 10, 1, 0, 3];

// On average, how many hours did you spend on the UW Reddit per week during your undergrad? (put 0 if never on it)
let REDDIT = [0, 1, 1, 2, 1, 4, 1, 0, 8, 1, 2, 0.01, 0.5, 1, 0, 0, 5, 0.5, 3, 5, 3, 10, 2, 0.5, 1, 1, 1, 5, 1, 0, 1, 5, 0.5, 2, 1, 1, 5, 0.5, 1, 1, 3, 0, 0, 0.5, 3, 0, 1, 0, 0.5, 3, 0];

// On average, How many hours did you spend on social media platforms per week during your undergrad? (excluding the UW Reddit) (put 0 if never on it)
let SOCIAL_MEDIA = [2, 10, 6, 7, 15, 4, 3, 15, 8, 0.5, 10, 7, 7, 7, 2, 10, 55, 7, 10, 2, 20, 3, 10, 7, 7, 10, 7, 4, 8, 5, 10, 21, 2, 20, 10, , 0.5, 2, 6, 15, 10, 0, 2, 23, 1, 20, 6, 11, 5];

// On average, How many hours did you play video games per week during your undergrad? (put 0 if never on it)
let VIDEO_GAMES = [3, 6, 0, 4, 0, 0, 12, 12, 8, 7, 1, 0.5, 4, 5, 0, 6, 2, 0, 1, 10, 3, 20, 0.25, 0, 1, 0, 0, 0.5, 15, 2, 1, 5, 1, 5, 40, 0, 12, 1, 0, 10, 2, 1, 0, 0, 2, 2, 0];

// Old data starts here

let BURNOUT = [{
  "name": "0",
  "value": 8
}, {
  "name": "1",
  "value": 8
}, {
  "name": "2",
  "value": 10
}, {
  "name": "3",
  "value": 2
}, {
  "name": "4",
  "value": 4
}, {
  "name": "5",
  "value": 1
}, {
  "name": "6",
  "value": 4
}, {
  "name": "7",
  "value": 2
}, {
  "name": "8",
  "value": 8
}];

let REDDIT_USAGE = [{
  "name": "< 1 Hour",
  "value": 0
}, {
  "name": "[1,3) Hours",
  "value": 33
}, {
  "name": "[3,5) Hours",
  "value": 6
}, {
  "name": "[5,7) Hours",
  "value": 1
}, {
  "name": ">= 7 Hours",
  "value": 0
}]

let TRANSFER_THOUGHTS = [{
  "name": "Yes",
  "value": 29,
}, {
  "name": "No",
  "value": 21
}]

let DROPOUT_THOUGHTS = [{
  "name": "Yes",
  "value": 4,
}, {
  "name": "No",
  "value": 46
}]

let SE21_GRAD = [{
  "name": "Yes",
  "value": 44,
}, {
  "name": "No",
  "value": 6
}]

export {
  BURNOUT,
  FIGHTS,
  REDDIT_USAGE,
  CRYING,
  TRANSFER_THOUGHTS,
  DROPOUT_THOUGHTS,
  SE21_GRAD
}
