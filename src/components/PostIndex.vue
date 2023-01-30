<template>
  <div id="postIndex">
    <!-- {{ list }} -->
    <div style="display: none">{{ scroll }}</div>
    <div v-for="ele in list" :key="ele.position" @click="scrollMove(ele.ele)">
      <!-- {{ ele.tag }} -->
      <!-- {{ scroll<=ele.position&&scroll>ele.finish }} -->
      <!-- <div v-if="scroll >= ele.position && scroll < ele.finish" class="ccc"> -->
      <div
        v-if="Math.floor(ele.ele.getBoundingClientRect().y) <= 0"
        class="ccc"
      >
        <!-- <div>{{  }}</div> -->
        <div v-if="ele.tag === 'H1'" class="index">{{ ele.content }}</div>
        <div v-if="ele.tag === 'H2'" class="subIndex">- {{ ele.content }}</div>
      </div>
      <div v-else>
        <div v-if="ele.tag === 'H1'" class="index">{{ ele.content }}</div>
        <!-- <div>{{ ele.ele.getBoundingClientRect().y }}</div> -->
        <div v-if="ele.tag === 'H2'" class="subIndex">- {{ ele.content }}</div>
      </div>
    </div>
    <!-- salkdfjlasjdflks;ja -->
    <!-- {{ list}} -->
  </div>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
let list = ref([]);
let scroll = ref(0);

const setIndex = () => {
  let element = document.querySelectorAll("h1,h2");
  // console.log(element.length);
  for (let index = 0; index < element.length; index++) {
    list.value.push({
      content: element[index].textContent,
      tag: element[index].tagName,
      ele: element[index],
      //   position: Math.floor(element[index].getBoundingClientRect().y),
      //   finish: element[index + 1]
      //     ? Math.floor(element[index + 1].getBoundingClientRect().y)
      //     : null,
    });
  }
};
// setIndexPosition = () => {
//   for (let i = 0; i < list.value.length; i++) {}
// };
watch([route], () => {
  list.value = [];
  setIndex();
  //   setTimeout(setIndex(), 100);
});
console.log(route.params.post);
onMounted(() => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 294) {
      document.getElementById("postIndex").classList = "postIndexFix";
    } else {
      document.getElementById("postIndex").classList.remove("postIndexFix");
    }
    scroll.value = window.scrollY;
    // console.log(window.pageYOffset)
  });
  document.getElementById("postIndex").style.left = `${
    window.innerWidth / 2 + 493
  }px`;
  window.addEventListener("resize", () => {
    document.getElementById("postIndex").style.left = `${
      window.innerWidth / 2 + 493
    }px`;
  });
  //   setTimeout(setIndex(), 100);
  setIndex();
});
const scrollMove = (ele) => {
  //   console.log(ele);
  //   console.log(ele.getBoundingClientRect().top);
  window.scrollTo(0, Math.floor(ele.getBoundingClientRect().y + scroll.value));
};
</script>
<style>
#postIndex {
  position: absolute;
  top: 325px;
  /* right: 377px; */
  /* padding-left: 20px;
        border-left: 5px solid green; */
}
.postIndexFix {
  position: fixed !important;
  top: 30px !important;
}
.index {
  margin-top: 10px;
  color: rgb(153, 153, 153);
}
.subIndex {
  font-size: 14px;
  margin-top: 6px;
  margin-left: 4px;
  color: rgb(153, 153, 153);
}
#postIndex > div:nth-child(1) > div > div {
  margin-top: 0;
}
/* #postIndex>div{
    margin-bottom: 10px;
} */
.ccc > div {
  color: #24292f !important;
  font-weight: 600;
}
</style>
