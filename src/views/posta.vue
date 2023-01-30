<template>
  <div id="viewPost">
    <div>
      <div>
        <div id="viewPost-mainInfos">
          <div
            id="viewPost-packageInfos"
            v-if="post.series"
            @click="routeProject(post.series.url_slug)"
          >
            <div :style="{ backgroundColor: post.series.color }"></div>
            {{ post.series.name }}
          </div>

          <div id="viewPost-title">{{ post.title }}</div>
        </div>

        <div id="viewPost-infos">
          <div id="viewPost-profile">
            <div id="viewPost-profileImage" @click="$router.push('/')">
              <img :src="userProfile.image" alt="" />
            </div>
            <div>
              <div id="viewPost-InfoName" @click="$router.push('/')">
                {{ userProfile.name }}
              </div>
              <div id="viewPost-InfoDate">{{ uploadDate }}</div>
            </div>
          </div>
        </div>
        <div class="repo-tags" v-if="post.tags">
          <div
            class="tag"
            style="margin-right: 3.5px"
            v-for="tag in post.tags"
            :key="tag"
            @click="() => tagSelect(tag)"
          >
            {{ tag }}
          </div>
        </div>
        <PostIndex></PostIndex>
        <div id="thumbnail-wrap">
          <img :src="post.thumbnail" />
        </div>
        <div
          id="viewPost-content"
          v-if="post.content"
          v-html="post.content"
          @load="() => (loaded.value = true)"
        ></div>
        <OtherPosts :posts="post.linked_posts"></OtherPosts>
        <CommentsLayout
          :comments="post.comments"
          :count="post.comments_count"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { onUnmounted, computed, ref } from "vue";
import dayjs from "dayjs";
import CommentsLayout from "../components/CommentsLayout.vue";
import PostIndex from "../components/PostIndex.vue";
import OtherPosts from "../components/OtherPosts.vue";
// import {marked} from "marked"
const store = useStore();
const route = useRoute();
const router = useRouter();
let loaded = ref(false);
const tagSelect = (tag) => {
  store.dispatch("getPosts", tag);
  router.push({ path: "/Repositories", query: { tag: tag } });
};

console.log(store.state.post);
let post = ref(null);
// const post = computed(() => store.state.post)
let userProfile = ref(null);

if (store.state.post.title) {
  post = computed(() => store.state.post);
} else {
  await store.dispatch("getPost", route.params.post);
  post = computed(() => store.state.post);
}
if (store.state.userProfile.name) {
  userProfile.value = store.state.userProfile;
} else {
  userProfile.value = await store.dispatch("getProfile");
}

console.log(post.value);

const uploadDate = computed(() => {
  const uploadDate = dayjs(post.value.released_at);
  const currentDate = dayjs();
  const timeGap = (option) => {
    if (option === "day") {
      if (currentDate.diff(uploadDate, "day") < 8) {
        return currentDate.get("date") - uploadDate.get("date");
      } else {
        return 100;
      }
    }
    return currentDate.diff(uploadDate, option);
  };

  if (timeGap("minute") < 1) {
    return "Now";
  } else if (timeGap("hour") < 1) {
    return `Uploaded ${timeGap("minute")} minute ago`;
  } else if (timeGap("hour") < 24) {
    // return `${ti}`
    return `Uploaded ${timeGap("hour")} hours ago`;
  } else if (timeGap("day") < 8) {
    return `Uploaded ${timeGap("day")} days ago`;
  } else {
    return `Uploaded on ${uploadDate.format("MMM")} ${uploadDate.get(
      "date"
    )}, ${uploadDate.get("year")}`;
  }
});
document.title = post.value.title;

onUnmounted(() => {
  store.commit("RESET_POST");
});

const routeProject = async (url) => {
  await store.dispatch("getSeriesPosts", url);
  router.push(`/project/${url}`);
};
</script>

<style>
#viewPost-content > p {
  white-space: break-spaces;
}
@media (max-width: 576px) {
  #viewPost-packageInfos {
    font-size: 12px;
  }
  #viewPost-packageInfos > div {
    width: 10px !important;
    height: 10px !important;
  }
  #viewPost-title {
    font-size: 1.9em !important;
  }
  #viewPost-Infos {
    margin-top: 8px !important;
  }
  #viewPost-profileImage {
    width: 34px !important;
    height: 34px !important;
  }
  #viewPost-profileImage > img {
    max-width: 34px !important;
    max-height: 34px !important;
    min-width: 34px !important;
    min-height: 34px !important;
  }
  #viewPost-InfoName {
    font-size: 16px !important;
  }
  #viewPost-InfoDate {
    font-size: 10px !important;
  }
  /* 34 16 11 */
  #viewPost-controllTogle > span {
    font-size: 14px;
    margin-bottom: 3px;
  }
}
#viewPost {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#viewPost > div > img {
  max-width: 100%;
}
#viewPost > div {
  width: 846px;
  margin: 0 16px;
}
@media (max-width: 878px) {
  #viewPost > div {
    width: 100%;
    padding: 0 16px;
  }
}
#viewPost-title {
  font-size: 2.5em;
  font-weight: 600;
  margin-top: 6px;
}
#viewPost-packageInfos {
  display: flex;
  align-items: center;
}
#viewPost-packageInfos:hover {
  text-decoration: underline;
  cursor: pointer;
}
#viewPost-packageInfos > div:nth-child(1) {
  width: 14px;
  height: 14px;
  border-radius: 100%;
  margin-right: 4px;
}
#viewPost-mainInfos {
  margin-top: 40px;
}
#viewPost-infos {
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  /* border-bottom: 1px solid #D0D7DE; */
  padding-bottom: 10px;
  justify-content: space-between;
}
#viewPost-profile {
  display: flex;

  align-items: center;
}
#viewPost-controllTogle {
  /* margin-top: 12px; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
#viewPost-controll {
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 28px;
  background: white;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  padding: 4px 0;
  margin-right: -4px;
}
#viewPost-controll > div {
  display: flex;
  white-space: nowrap;
}
#viewPost-controll > div > div:nth-child(1) {
  width: 20px;
}
#viewPost-controll > div {
  padding: 5px 12px;
  font-size: 13px;
}
#viewPost-controll > div:hover {
  background: #0968da;
  color: white;
}
#viewPost-profileImage {
  border-radius: 100%;
  background: lightslategray;
  width: 40px;
  height: 40px;
  margin-right: 8px;
  cursor: pointer;
}
#viewPost-profileImage > img {
  max-width: 40px;
  max-height: 40px;
  min-width: 40px;
  min-height: 40px;
  border-radius: 100%;
}
#viewPost-InfoName {
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
}
#viewPost-InfoDate {
  font-size: 12px;
  margin-bottom: 4px;
}
#viewPost-tags {
  display: flex;
  flex-direction: row;
}
#viewPost-content {
  line-height: 1.8em;
  border-bottom: 1px solid #d8dee4;
  padding-bottom: 100px;
}
#viewPost-content > img {
  max-width: 100%;
}
p > img {
  max-width: 100%;
}
#thumbnail-wrap {
  max-width: 100%;
  display: flex;
  justify-content: center;
  margin: 40px 0 60px 0;
}
#thumbnail-wrap > img {
  max-width: 100%;
}
#postLike {
  width: 100%;
  display: flex;
  justify-content: center;
}
#postLike > div {
  width: 40px;
  height: 40px;
  background-color: green;
}
.overflow-hidden {
  overflow: hidden;
}
</style>
