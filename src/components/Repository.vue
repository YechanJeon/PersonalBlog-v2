<template>
  <div class = 'repository'>
      <div class = 'titleWrap'>
          <span ><!--@click="$router.push(`/post/${post.key}`)"-->
              {{title}}
          </span>
      </div>
      <div class = 'repo-contents'>
          {{description}}
      </div>
        
      <div class = 'repo-tags' v-if = "tags.length > 0">
          <div class = 'tag' v-for = 'tag in tags' :key = 'tag'>{{tag}}</div>
      </div>
      <div class = 'repo-info'>
          <!-- <div class = 'pinnedPPostPackageCircle' :style = "{ backgroundColor : post.package.color}" @click="$router.push(`/project/${post.package.key}`)"></div> -->
          <!-- <span @click="$router.push(`/project/${post.package.key}`)">{{post.package.name}}</span> -->
            <div>
              <!-- {{`${post.date.split('-')[0]}년 ${post.date.split('-')[1]}월 ${post.date.split('-')[2].substring(0,2)}일`}} -->
            </div>
      </div>
  </div>
</template>

<script>
export default {
    props : {
        tags : {
            type : Array
        },
        title : {
            type : String
        },
        description : {
            type : String
        }
    }
}
</script>

<style>
    .repository{
        width: 100%;

        padding: 24px 0 24px 0;
        border-bottom: 1px solid #D0D7DE
    }
    .titleWrap{
        margin-bottom: 4px;
    }
    .titleWrap>span:hover{
        text-decoration-line:underline;
        text-underline-position: under;
        cursor: pointer;
    }
    .titleWrap>span:nth-child(1){
        font-size: 20px;
        color: #0969da;
        font-weight: 600;
    }
    .repo-contents{
        font-size: 14px;
        margin-bottom: 12px;
        padding-right: 24px;
        color : #57606a
    }
    .repo-tags{
        display: flex;
        margin-bottom: 12px;
    }
    .tag{
        margin: 4px 1.5px 4px 0;
        /* border: 1px solid #D0D7DE; */
        background-color: #DDF4FF;
        padding : 0 10px 0 10px;
        font-size : 12px;
        height: 24px;
        line-height: 24px;
        border-radius: 14px;
        color: #0969DA;
        font-weight: 500;
    }
    .repo-info{
        /* margin-top: 12px; */
        /* tags밑으로 마진 12px 내려오도록 */
        font-size: 12px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .repo-info>span:nth-child(2){
        margin-right: 16px;
    }
    .repo-info>span:nth-child(2):hover{
        text-decoration-line:underline;
        text-underline-position: under;
        cursor: pointer;
    }
</style>