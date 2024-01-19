const link = document.getElementById('membership');
const drop = document.getElementById('dropDown');
const closeBtn = document.getElementById('close');
const twitter = document.getElementById('twitter');
const youtube = document.getElementById('youtube');
const linkedin = document.getElementById('linkedin');

twitter.addEventListener('click', () => {
    if (confirm("Are you sure you want to visit twitter?") == true) {
        console.log('Went to twitter)')
    } else {
        console.log('Did not go to twitter')
    }
})

youtube.addEventListener('click', () => {
    if (confirm("Are you sure you want to visit youtube?") == true) {
        console.log('Went to youtube)')
    } else {
        console.log('Did not go to youtube')
    }
})

linkedin.addEventListener('click', () => {
    if (confirm("Are you sure you want to visit linkedin?") == true) {
        console.log('Went to linkedin)')
    } else {
        console.log('Did not go to linkedin')
    }
})

link.addEventListener('click', () => {
    drop.classList.toggle('toggle')
});

closeBtn.addEventListener('click', () => {
    drop.classList.toggle('toggle');
})

