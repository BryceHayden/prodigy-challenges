
function syncFunc() {
  return 'I finished as soon as I was called'
}

function asyncFunc() {
  setTimeout(() => {
    return 'I just barely finished'
  }, 5000);
}

function getSSNSync(state, outputData) {
  outputData()
}
function getSSNForState(state, outputData){
  setTimeout(function () {
    outputData()
  }, state.length * 1000);
}

function asyncFuncWithCallback(timeToWait, myFancyCallback) {
  setTimeout(function () {
    myFancyCallback(timeToWait)
  }, timeToWait * 1000);
}

function main() {
  console.log(asyncFunc())
  console.log(syncFunc())
  asyncFuncWithCallback(25,
    function (howLongDidYouWait) {
       console.log(`I waited: ${howLongDidYouWait}`)
    }
  )
  getSSNSync('Utah', function () { console.log('Now ------')})
  asyncFuncWithCallback(8, (howLongDidYouWait) => { console.log(`I should have waited the least: ${howLongDidYouWait}`)})
  asyncFuncWithCallback(17, (howLongDidYouWait) => { console.log(`I waited (middle): ${howLongDidYouWait}`)})

  getSSNForState('California', function () { console.log('Finished with California')})
  getSSNForState('Utah', function () { console.log('Finished with Utah')})
}

main()
