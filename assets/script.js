const topics = [ "HTML", "CSS", "Git", "JavaScript" ];
console.log("topics:" + topics);

function listTopics() {
    for (let i = 0; i < topics.length; ++i) {
        console.log(topics[i])
    }
}

function selectTopic(topic) {
    if (topic === 'HTML') {
    console.log("Let's study HTML!");
    } else if (topic === 'CSS') {
    console.log("Let's study CSS!");
    } else if (topic === 'Git') {
    console.log("Let's study Git!");
    } else if (topic === 'JavaScript') {
    console.log("Let's study JavaScript!");
    } else {
    console.log('Please try again!');
    }
}

console.log("Here are the topics we reviewed in the pre-work:")
listTopics();
console.log("Which topic should we study first?")
selectTopic(topics[Math.floor(Math.random() * topics.length)]);