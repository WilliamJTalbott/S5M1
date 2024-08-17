function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here

  const widgets = document.querySelectorAll('section>div')
  widgets.forEach(widget => {
    widget.classList.add('widget')
  })

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here

    const ranIdx = Math.floor(Math.random() * quotes.length)
    const randomQuote = quotes[ranIdx]
    const quote = document.createElement('div')
    quote.textContent = randomQuote.quote
    const widgetQuote = document.querySelector('.quoteoftheday')
    widgetQuote.appendChild(quote)

    const authorDate = document.createElement('div')
    const {author, date} = randomQuote
    authorDate.textContent = `${author} in ${date || "an unknown date"}`
    widgetQuote.appendChild(authorDate)
  


  //

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here

  const ranVerb1 = verbs[Math.floor(Math.random() * verbs.length)]
  const ranVerb2 = verbs[Math.floor(Math.random() * verbs.length)]

  const ranNoun1 = nouns[Math.floor(Math.random() * nouns.length)]
  const ranNoun2 = nouns[Math.floor(Math.random() * nouns.length)]

  const ranAdverb1 = adverbs[Math.floor(Math.random() * adverbs.length)]
  const ranAdverb2 = adverbs[Math.floor(Math.random() * adverbs.length)]

  const message = document.createElement('p')

  message.textContent = `We need to ${ranVerb1} our ${ranNoun1} ${ranAdverb1}
    in order to ${ranVerb2} our ${ranNoun2} ${ranAdverb2}.`

  const CspeakWidget = document.querySelector('.corporatespeak')
  CspeakWidget.appendChild(message)


  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here

  const countdownWidget = document.querySelector('.countdown')
  let count = 5;
  const countdown = document.createElement('p')
  countdown.textContent = `T-minus ${count}...`
  countdownWidget.appendChild(countdown)

  const id = setInterval(() => {

    if (count === 1){
    countdown.textContent = 'Liftoff! 🚀'
    clearInterval(id)
  }

    else {

      count--
      countdown.textContent = `T-minus ${count}...`

    }

  }, 1000)

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here


//   <div class="friends widget">
//   <h3>Friends</h3>
//   <p>Michael Chen was born in 1995 and is friends with Carlos Garcia, Mohammed Ali and Jason Wong.</p>
//   </div>

const randomFriendValue = Math.floor(Math.random() * people.length)

const friendNAME = `${people[randomFriendValue].fname} ${people[randomFriendValue].lname}`
const friendYEAR = people[randomFriendValue].dateOfBirth.split("-")[0];

  //Get array on friend names.
const friendFRIENDS = people[randomFriendValue].friends

      .map(friendId => people.find(p => p.id === friendId))
      .filter(Boolean)
      .map(friend => `${friend.fname} ${friend.lname}`);

        const friendFRIENDSFormatted = (friendFRIENDS) => {

          if (friendFRIENDS.length === 0){return "has no friends"}

          else if (friendFRIENDS.length === 1) {
            return `is friends with ${friendFRIENDS[0]}`;
          }
          
          else if (friendFRIENDS.length === 2) {
            return `is friends with ${friendFRIENDS[0]} and ${friendFRIENDS[1]}`;
          
          }
          else {

            const lastFriend = friendFRIENDS.pop();
            return `is friends with ${friendFRIENDS.join(", ")} and ${lastFriend}`;


          }

        }

const friendsWidget = document.querySelector('.friends')
const friends = document.createElement('p')
//Set up text
friends.textContent = `${friendNAME} was born in ${friendYEAR} and ${friendFRIENDSFormatted(friendFRIENDS)}.`

friendsWidget.appendChild(friends)







  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  const blocks = document.querySelectorAll('section>div')
  blocks.forEach((block, idx) => {
    block.classList.add('widget')
    block.setAttribute('tabindex', idx + 1 + "")
  })

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
