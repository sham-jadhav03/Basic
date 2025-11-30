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
    userProfile: "profiles/sham.png"
  },
  {
    username: "code_master",
    likeCount: 942,
    isLiked: true,
    commentCount: 88,
    shareCount: 20,
    isFollowed: false,
    caption: "React + Tailwind = clean UI supremacy ✨",
    video: "videos/video1.mp4",
    userProfile: "profiles/master.png"
  },
  {
    username: "frontend_freak",
    likeCount: 534,
    isLiked: false,
    commentCount: 40,
    shareCount: 7,
    isFollowed: true,
    caption: "CSS animations are basically sorcery 😭💫",
    video: "videos/video3.mp4",
    userProfile: "profiles/freak.png"
  },
   {
    username: "code_master",
    likeCount: 942,
    isLiked: true,
    commentCount: 88,
    shareCount: 20,
    isFollowed: false,
    caption: "React + Tailwind = clean UI supremacy ✨",
    video: "videos/video4.mp4",
    userProfile: "profiles/master.png"
  },
   {
    username: "riya_18",
    likeCount: 942,
    isLiked: true,
    commentCount: 88,
    shareCount: 20,
    isFollowed: false,
    caption: "React + Tailwind = clean UI supremacy ✨",
    video: "videos/video2.mp4",
    userProfile: "https://images.unsplash.com/photo-1591118490115-9f51ee41094c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
  },
];

var sum = ''
posts.forEach((elem)=>{
  sum = sum + ` <div class="reel">
          <video class="main-img"
            src="${elem.video}"
            alt="">
        </div>
        <div class="bottom">
          <div class="user">
            <img src="${elem.userProfile}" autoplay muted alt="">
            <h4>${elem.username}</h4>
            <button>${elem.isFollowed}</button>
          </div>
          <h3>${elem.caption}</h3>
        </div>
        <div class="right">
          <div class="like">
            <h4 class="like-icon icon">liked<i class="love ri-heart-3-fill"></i></i>'</h4>
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
        </div>`
})

var allreels = document.querySelector('.all-reels')

allreels.innerHTML = sum