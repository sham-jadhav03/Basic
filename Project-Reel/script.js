const posts = [
  {
    username: "sham_dev",
    likeCount: 120,
    isLiked: false,
    commentCount: 15,
    shareCount: 3,
    isFollowed: true,
    caption: "Building my JS empire one bug at a time 💻🔥",
    video: "video/video.mp4",
    userProfile: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
  },
  {
    username: "code_master",
    likeCount: 942,
    isLiked: true,
    commentCount: 88,
    shareCount: 20,
    isFollowed: false,
    caption: "React + Tailwind = clean UI supremacy ✨",
    video: "video/video1.mp4",
    userProfile: "https://images.pexels.com/photos/2641022/pexels-photo-2641022.jpeg"
  },
  {
    username: "frontend_freak",
    likeCount: 534,
    isLiked: false,
    commentCount: 40,
    shareCount: 7,
    isFollowed: true,
    caption: "CSS animations are basically sorcery 😭💫",
    video: "video/video3.mp4",
    userProfile: "https://images.pexels.com/photos/27765641/pexels-photo-27765641.jpeg"
  },
  {
    username: "Beauty_master",
    likeCount: 942,
    isLiked: true,
    commentCount: 88,
    shareCount: 20,
    isFollowed: false,
    caption: " clean and ashthetic #explore ✨",
    video: "video/video4.mp4",
    userProfile: "https://images.pexels.com/photos/29498623/pexels-photo-29498623.jpeg"
  },
  {
    username: "riya_18",
    likeCount: 942,
    isLiked: true,
    commentCount: 88,
    shareCount: 20,
    isFollowed: false,
    caption: "React + Tailwind = clean UI supremacy ✨",
    video: "video/video2.mp4",
    userProfile: "https://images.unsplash.com/photo-1591118490115-9f51ee41094c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
  },
];

var allreels = document.querySelector('.all-reels')

function addData() {
  var sum = ''
  posts.forEach((elem, idx) => {
    sum = sum + `<div class="reel">
          <video autoplay loop muted src="${elem.video}"></video>
          <div class="bottom">
            <div class="user">
              <img src="${elem.userProfile}" alt="">
              <h4>${elem.username}</h4>
              <button id=${idx} class=follow >${elem.isFollowed ? 'Unfollow' : 'Follow'}</button>
            </div>
            <h3>${elem.caption}</h3>
          </div>
          <div class="right">
            <div id=${idx} class="like">
              <h4 class="like-icon icon">${elem.isLiked ? '<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}</h4>
              <h6>${elem.likeCount}</h6>
            </div>
            <div class="comment">
              <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
              <h6>${elem.commentCount}</h6>
            </div>
            <div class="share">
              <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
              <h6>${elem.shareCount}</h6>
            </div>
            <div class="menu">
              <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
            </div>
          </div>
        </div>`
  })

  allreels.innerHTML = sum;

}

addData()

allreels.addEventListener('click', function (dets) {

  if (dets.target.className == 'like') {
    if (!posts[dets.target.id].isLiked) {
      posts[dets.target.id].likeCount++;
      posts[dets.target.id].isLiked = true;
    } else {
      posts[dets.target.id].likeCount--;
      posts[dets.target.id].isLiked = false;
    }
  }

  if(dets.target.className == 'follow'){
    if (!posts[dets.target.id].isFollowed) {
      posts[dets.target.id].isFollowed = true;
    }
    else{
      posts[dets.target.id].isFollowed = false;
    }
  }

  addData()
})
